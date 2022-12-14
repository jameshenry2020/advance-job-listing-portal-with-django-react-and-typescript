from django.shortcuts import render
from rest_framework.generics import ListAPIView,CreateAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import CompanyCreateSerializer, CompanySerializers, CreateJobSerializer, JobSerializer, CompanyJobSerializer
from .models import Application, JobSkill, Company, Job
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
from django.core.mail import EmailMessage
from .serializers import ApplicationSerializer
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from jobs_portal.settings.dev import DEFAULT_FROM_EMAIL

class JobsPagination(PageNumberPagination):
    page_size = 4
    page_size_query_param ='page_size'
    max_page_size=10

    def get_paginated_response(self, data):
        return Response({  
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'page_number': self.page.number,
            'count': self.page.paginator.count,
            'results': data,
            
        })



# Create your views here.
class GetallSkills(APIView):
    permission_classes=[AllowAny]

    def get(self, request):
        data=[]
        skills=JobSkill.objects.all()
        for skill in skills:
            data.append({'value':skill.pk, 'label':skill.name})
        return Response(data=data, status=status.HTTP_200_OK)



class CreateCompanyProfile(CreateAPIView):
    serializer_class=CompanyCreateSerializer
    permission_classes=[IsAuthenticated]
    queryset=Company.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)



class GetCompanyDetail(APIView):
    permission_classes=[IsAuthenticated]
    def get(self, request, *args, **kwargs):
        companies=Company.objects.filter(user=request.user)
        if companies.exists():
            company=companies[0]
            serializer=CompanySerializers(company)
            return Response(data=serializer.data, status=status.HTTP_200_OK)
        return Response({'msg':'oop you dont has a company profile yet create a profile'}, status=status.HTTP_404_NOT_FOUND)


    


    
    
    
    

class AddJobToListing(CreateAPIView):
    serializer_class=CreateJobSerializer
    permission_classes=[IsAuthenticated]
    queryset=Job.objects.all()

    def perform_create(self, serializer):
        company=Company.objects.get(user=self.request.user)
        serializer.save(company=company)



class GetAllRecentJobs(ListAPIView):
    serializer_class=JobSerializer
    queryset=Job.objects.all().order_by('-created_at')
    pagination_class = JobsPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['job_title', 'region']



    

class GetSingleJobDetails(RetrieveAPIView):
    serializer_class=JobSerializer
    queryset=Job.objects.all()
    permission_classes=[AllowAny]
    lookup_field='id'



#get list of job post by a company
class GetJobsPostedByCompany(ListAPIView):
    serializer_class=CompanyJobSerializer
    permission_classes=[IsAuthenticated]

    def get_queryset(self):
        company=Company.objects.get(user=self.request.user)
        return Job.objects.filter(company=company)




#dockerize api

#send application email implement celery to send email asyncrously
class SendApplicationView(APIView):
    parser_classes=[MultiPartParser, FormParser]
    permission_classes=[AllowAny]
    def post(self, request, *args, **kwargs):
        data=request.data
        serializer=ApplicationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True): 
            posted_job=Job.objects.get(pkid=data['position'])
            company_email=posted_job.company.company_email
            from_email=DEFAULT_FROM_EMAIL
            email_subject=f"Appliation for the role {posted_job.job_title}"
            msg_body=f"application of {data['applicant_name']} for the role of {posted_job.job_title} \n\n  portofolio link {data['portfolio_link']} \n\n github link {data['github_link']} \n\n applicant email {data['email']} "
            pdf_file=request.data.get('resume')
            print(pdf_file)
            message=EmailMessage(
                email_subject,
                msg_body,
                from_email,
                [company_email],

            )
            message.attach(pdf_file.name, pdf_file.read(), 'application/pdf')
            message.send(fail_silently=False)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)   

                  

        # return Response({"failed":"email not sent"}, status=status.HTTP_400_BAD_REQUEST)           
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#push to github
@api_view(http_method_names=['GET'])
@permission_classes([IsAuthenticated])
def check_user_has_company(request):
    user_company=Company.objects.filter(user=request.user)
    if user_company.exists():
        return Response({"hasCompany":True}, status=status.HTTP_200_OK)
    return Response({"hasCompany":False}, status=status.HTTP_200_OK)

