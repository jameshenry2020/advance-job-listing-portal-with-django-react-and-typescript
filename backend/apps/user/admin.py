from django.contrib import admin
from .models import MyUser
from .forms import CustomUserCreationForm, CustomUserChangeForm
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext_lazy as _
# Register your models here.

class UserAdmin(BaseUserAdmin):
    ordering = ["email"]
    add_form =CustomUserCreationForm
    form = CustomUserChangeForm
    model = MyUser
    exclude = ('date_joined',)
    list_display = ['pkid','id', 'email', 'first_name', 'last_name']
    list_display_links= ['id', 'email']
    field_sets = (
        (
        _("Login Credentials"),
        {
            "fields":("email", "password",)
        },
        ),
                (
            _("Personal Information"),
            {
                "fields": (
                    "first_name",
                    "last_name",
                )
            },
        ),
         (
            _("Permission And Groups"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                )
            },
        ),
        
    )
    add_fieldsets = (
    (
        None,
        {
            "classes": ("wide",),
            "fields": ("email", "password1", "password2", "is_staff", "is_active"),
        },
    ),
)

admin.site.register(MyUser, UserAdmin)