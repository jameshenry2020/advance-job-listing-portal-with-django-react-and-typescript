from rest_framework import serializers
from .models import Company, Job



class CompanySerializers(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"

class CompanyCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['company_name', 'location', 'website', 'company_email', 'company_logo','description']

class CreateJobSerializer(serializers.ModelSerializer):
    skills = serializers.StringRelatedField(many=True)
    class Meta:
        model = Job
        fields =[
            "company",
            "job_title",
            "category",
            "skills",
            "job_type",
            "region",
            "job_zone",
            "salary",
            "application"
        ]
