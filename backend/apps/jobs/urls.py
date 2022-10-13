from unicodedata import name
from django.urls import path
from .views import (GetallSkills,
                    GetAllRecentJobs,
                    AddJobToListing,
                    CreateCompanyProfile,
                    GetCompanyDetail, 
                    GetSingleJobDetails, 
                    GetJobsPostedByCompany,
                     SendApplicationView, 
                     check_user_has_company)


urlpatterns=[
    path('create-company/', CreateCompanyProfile.as_view(), name='company'),
    path('company/', GetCompanyDetail.as_view(), name='get-company'),
    path('skills/', GetallSkills.as_view(), name='all-skills'),
    path('add-jobs/', AddJobToListing.as_view(), name='jobs'),
    path('jobs/', GetAllRecentJobs.as_view(), name='jobs'),
    path('jobs/<uuid:id>/', GetSingleJobDetails.as_view(), name='job-detail'),
    path('company/jobs/', GetJobsPostedByCompany.as_view(), name='copany-jobs'),
    path('job/application/', SendApplicationView.as_view(), name='jobs-application'),
    path('users/has-company/', check_user_has_company, name='has-company')
]