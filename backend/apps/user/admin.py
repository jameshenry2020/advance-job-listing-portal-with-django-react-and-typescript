from django.contrib import admin
from .models import MyUser
from .forms import CustomUserCreationForm
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
# Register your models here.

class UserAdmin(BaseUserAdmin):
    ordering = ["email"]
    add_form =CustomUserCreationForm
    model = MyUser
    list_display = ['pkid','id', 'email', 'names','date_joined']
    list_display_links= ['id', 'email']
    field_sets = (
        (
        _("Login Credentials"),
        {
            "fields":("email", "password",)
        },
        ),
        
    )

admin.site.register(MyUser, UserAdmin)