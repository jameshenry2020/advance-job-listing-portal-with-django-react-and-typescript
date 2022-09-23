from django.db import models
from apps.user.models import CommonUUIDModel, MyUser
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Company(CommonUUIDModel):
    user= models.ForeignKey(MyUser, on_delete=models.CASCADE)
    company_name=models.CharField(max_length=255, verbose_name=_("Company Name"))
    location=models.CharField(max_length=255, verbose_name=_("Company Headquarter"))
    website=models.URLField(blank=True, null=True)
    company_email=models.EmailField(max_length=100, verbose_name=_("Company Email"))
    company_logo=models.ImageField(upload_to="company", verbose_name=_("Company Logo"))
    description=models.TextField()

    class Meta:
        verbose_name_plural="Companies"


    def __str__(self):
        return self.company_name

class JobSkill(models.Model):
    name=models.CharField(max_length=150, verbose_name=_("Skill"))

    def __str__(self):
        return self.name

    
    
class Job(CommonUUIDModel):
    company=models.ForeignKey(Company, on_delete=models.CASCADE)
    job_title=models.CharField(max_length=255, verbose_name=_("Job Title"))
    category=models.CharField(max_length=100, verbose_name=_("Job Category"))
    skills=models.ManyToManyField(JobSkill)
    job_type=models.CharField(max_length=200, verbose_name=_("Job Type"))
    region=models.CharField(max_length=255, verbose_name=_("Job Region"), default="world wide")
    job_zone=models.CharField(max_length=200, blank=True, null=True)
    salary=models.CharField(max_length=100, verbose_name=_("Expected Salary"))
    application=models.CharField(max_length=100)
    job_description=models.TextField(default='this is a test description')

    def __str__(self):
        return self.job_title




class Application(CommonUUIDModel):
    position=models.ForeignKey(Job, related_name='applications', on_delete=models.CASCADE)
    applicant_name=models.CharField(max_length=250, verbose_name=_("Names"))
    email=models.EmailField(max_length=200)
    resume=models.FileField(upload_to='jobs')
    github_link=models.URLField(max_length=200)
    portfolio_link=models.URLField(max_length=200)

    def __str__(self):
        return f"applicant-${self.pkid} for ${self.job.job_title}"

    


