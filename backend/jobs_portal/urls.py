from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi



schema_view = get_schema_view(
   openapi.Info(
      title="Job Listing Portal  API",
      default_version='v1',
      description="this is an api for remote jobs listing website ",
      terms_of_service="https://www.mywebsitepolice.com/terms/",
      contact=openapi.Contact(email="aengrhenry@gmail.com"),
      license=openapi.License(name="test License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)




urlpatterns = [
   
    path('admin/', admin.site.urls),
    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/', include('djoser.urls.jwt')),
    path('api/v1/auth/', include('djoser.social.urls')),
    path('api/v1/', include('apps.jobs.urls')),
    path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path("redoc", schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc')
]
