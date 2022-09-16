from rest_framework import serializers
from .models import Company, Job, JobSkill



class SkillSerializers(serializers.ModelSerializer):
    class Meta:
        model=JobSkill
        fields =["id", "name"]

class CompanySerializers(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = "__all__"

class CompanyCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['company_name', 'location', 'website', 'company_email', 'company_logo','description']



class CreateJobSerializer(serializers.ModelSerializer):
    skills = serializers.PrimaryKeyRelatedField(many=True, queryset=JobSkill.objects.all())
    class Meta:
        model = Job
        fields =[
            "job_title",
            "category",
            "skills",
            "job_type",
            "region",
            "job_zone",
            "salary",
            "application"
        ]

    def create(self, validated_data):
        print(validated_data)
        skills_data=validated_data.pop('skills')
        job=Job.objects.create(**validated_data)
        for skill in skills_data:
            job.skills.add(skill)
        return job
        

class JobSerializer(serializers.ModelSerializer):
    company=serializers.SerializerMethodField()
    skills=serializers.SerializerMethodField()

    class Meta:
        model=Job
        fields= [
            "id",
            "pkid",
            "job_title",
            "category",
            "job_type",
            "region",
            "job_zone",
            "salary",
            "application",
            "company",
            "skills"

        ]

    def get_company(self, obj):
        return CompanySerializers(obj.company).data

    def get_skills(self, obj):
        return SkillSerializers(obj.skills.all(), many=True).data



class CompanyJobSerializer(serializers.ModelSerializer):
    skills=serializers.SerializerMethodField()
    class Meta:
        model=Job
        fields= [
            "id",
            "pkid",
            "job_title",
            "category",
            "job_type",
            "region",
            "job_zone",
            "salary",
            "application",
            "job_description",
            "skills"

        ]

    def get_skills(self, obj):
        return SkillSerializers(obj.skills.all(), many=True).data
