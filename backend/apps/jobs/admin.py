from django.contrib import admin
from .models import Company, JobSkill, Job

# Register your models here.
class SkillAdmin(admin.ModelAdmin):
    list_display=['id', 'name']
    list_display_links=['name']

class CompanyAdmin(admin.ModelAdmin):
    list_display=['id', 'company_name','location']
    list_display_links=['id', 'company_name']


admin.site.register(Company, CompanyAdmin)
admin.site.register(JobSkill, SkillAdmin)
admin.site.register(Job)
