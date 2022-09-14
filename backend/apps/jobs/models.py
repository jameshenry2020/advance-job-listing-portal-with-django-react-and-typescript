from django.db import models
from user.models import CommonUUIDModel, MyUser
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Company(CommonUUIDModel):
    user= models.ForeignKey(MyUser, on_delete=models.CASCADE)
    company_name=models.CharField(max_length=255, verbose = _("Company Name"))
    location=models.CharField(max_length=255, verbose = _("Company Headquarter"))
    website=models.URLField(blank=True, null=True)
    company_email=models.EmailField(max_length=100, verbose=_("Company Email"))
    company_logo=models.ImageField(upload_to="/company", verbose=_("Company Logo"))
    description=models.TextField()

    class Meta:
        verbose_name_plural="Companies"


    def __str__(self):
        return self.company_name

class JobSkill(models.Model):
    name=models.CharField(max_length=150, verbose=_("Skill"))

    def __str__(self):
        return self.name

    
    
class Job(CommonUUIDModel):
    company=models.ForeignKey(Company, on_delete=models.CASCADE)
    job_title=models.CharField(max_length=255, verbose=_("Job Title"))
    catgory=models.Charfield(max_length=100, verbose=_("Job Category"))
    skills=models.ManyToManyField(JobSkill, on_delete=models.DO_NOTHING)
    job_type=models.CharField(max_length=200, verbose=_("Job Type"))
    region=models.CharField(max_length=255, verbose=_("Job Region"), default="world wide")
    job_zone=models.CharField(max_length=200)
    salary=models.CharField(max_length=100, verbose=_("Expected Salary"))
    application=models.CharField(max_length=100)

    def __init__(self):
        return self.job_title






