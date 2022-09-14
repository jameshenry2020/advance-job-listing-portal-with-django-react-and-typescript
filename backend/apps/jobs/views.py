from django.shortcuts import render
from rest_framework.generics import ListAPIView,CreateAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import CompanyCreateSerializer, CompanySerializers, CreateJobSerializer, JobSerializer
from .models import JobSkill, Company, Job

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



class GetCompanyDetail(RetrieveAPIView):
    serializer_class=CompanySerializers
    permission_classes=[IsAuthenticated]
    queryset=Company.objects.all()
    lookup_field='id'
    
    

class AddJobToListing(CreateAPIView):
    serializer_class=CreateJobSerializer
    permission_classes=[IsAuthenticated]
    queryset=Job.objects.all()

    def perform_create(self, serializer):
        company=Company.objects.get(user=self.request.user)
        serializer.save(company=company)



class GetAllRecentJobs(ListAPIView):
    serializer_class=JobSerializer
    queryset=Job.objects.all()
    permission_classes=[AllowAny]
    

class GetSingleJobDetails(RetrieveAPIView):
    serializer_class=JobSerializer
    queryset=Job.objects.all()
    permission_classes=[AllowAny]
    lookup_field='id'