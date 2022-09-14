from .models import MyUser
from django.contrib.auth.forms import UserCreationForm, UserChangeForm

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = MyUser
        fields = ["email", "first_name", "last_name"]
        error_class ="error"


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = MyUser
        fields = ["email", "first_name", "last_name"]
        error_class ="error"