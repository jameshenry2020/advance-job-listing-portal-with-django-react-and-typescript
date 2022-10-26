import environ
from pathlib import Path
from datetime import timedelta
from django.utils.encoding import force_str

force_text = force_str

env = environ.Env(
    DEBUG=(bool, False)
)
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

environ.Env.read_env(BASE_DIR / ".env")

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = env("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = env('DEBUG')

ALLOWED_HOSTS = ["*"]


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.sites',
    #third party apps
    'rest_framework',
    'djoser',
    'django_filters',
    'social_django',
    'rest_framework_simplejwt',
    "corsheaders",
    'drf_yasg',
    'djcelery_email',
    # locals apps
    'apps.user',
    'apps.jobs',
]

SITE_ID=1
AUTH_USER_MODEL='user.MyUser'

MIDDLEWARE = [
    'social_django.middleware.SocialAuthExceptionMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    "corsheaders.middleware.CorsMiddleware",
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'jobs_portal.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',
            ],
        },
    },
]

WSGI_APPLICATION = 'jobs_portal.wsgi.application'

CORS_ALLOWED_ORIGINS = [ 
    "http://localhost:3000",
    "http://127.0.0.1:3000"
    
]
CORS_ORIGIN_WHITELIST = [
     "http://localhost:3000",
     "http://127.0.0.1:3000", 
]
CORS_ALLOW_CREDENTIALS = True


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases




# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


AUTHENTICATION_BACKENDS = (
    'social_core.backends.google.GoogleOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)


SOCIAL_AUTH_GOOGLE_OAUTH2_KEY='1022570077843-pttfei8bctlsj2i2bu5m8vpllho32iqm.apps.googleusercontent.com'
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET='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'
SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE=['https://www.googleapis.com/auth/userinfo.email',
                                              'https://www.googleapis.com/auth/userinfo.profile', 'openid']
SOCIAL_AUTH_GOOGLE_OAUTH2_EXTRA_DATA=['first_name', 'last_name']



SWAGGER_SETTINGS = {
   'SECURITY_DEFINITIONS':{
     "Auth Token eg [Bearer (JWT)]":{
        "type":"apiKey",
        "name":"Authorization",
        "in":"header"
     }
   }
}
#djoser auth settings
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        
    ),
    
}

SIMPLE_JWT = {
   'AUTH_HEADER_TYPES': (
    'Bearer',
    'JWT',
    ),
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=120),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'SIGNING_KEY': env("SECRET_KEY"),
    'AUTH_HEADER_NAME': 'HTTP_AUTHORIZATION',
    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
}
DOMAIN='localhost:3000'
SITE_NAME = 'Henry Remote Job Portal'


DJOSER = {
    #... your other settings
    "EMAIL": {
        "activation": "apps.user.emails.ActivationEmail" # app being your app's name
    }
}

DJOSER = {
    'PASSWORD_RESET_CONFIRM_URL': '/password/reset/confirm/{uid}/{token}',   
    "SEND_CONFIRMATION_EMAIL": True,
    "USER_CREATE_PASSWORD_RETYPE": True,
    "PASSWORD_RESET_CONFIRM_RETYPE": True,
    "ACTIVATION_URL": "activate/{uid}/{token}",
    "SEND_ACTIVATION_EMAIL": True,
    "SET_PASSWORD_RETYPE": True,
    'SERIALIZERS': {},
    "EMAIL": {
        "activation": "djoser.email.ActivationEmail" # app being your app's name
    },
    'SOCIAL_AUTH_TOKEN_STRATEGY': 'djoser.social.token.jwt.TokenStrategy',
    'SOCIAL_AUTH_ALLOWED_REDIRECT_URIS': ['http://localhost:3000', 'http://localhost:3000/login']
}

# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True



STATIC_URL = 'static/'
MEDIA_URL = 'mediafiles/'
MEDIA_ROOT = BASE_DIR / 'mediafiles'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'



# import logging
# import logging.config

# from django.utils.log import DEFAULT_LOGGING

# logger = logging.getLogger(__name__)

# LOG_LEVEL = "INFO"

# logging.config.dictConfig(
#     {
#         "version": 1,
#         "disable_existing_loggers": False,
#         "formatters": {
#             "console": {
#                 "format": "%(asctime)s %(name)-12s %(levelname)-8s %(message)s",
#             },
#             "file": {"format": "%(asctime)s %(name)-12s %(levelname)-8s %(message)s"},
#             "django.server": DEFAULT_LOGGING["formatters"]["django.server"],
#         },
#         "handlers": {
#             "console": {
#                 "class": "logging.StreamHandler",
#                 "formatter": "console",
#             },
#             "file": {
#                 "level": "INFO",
#                 "class": "logging.FileHandler",
#                 "formatter": "file",
#                 "filename": "logs/jobs.log",
#             },
#             "django.server": DEFAULT_LOGGING["handlers"]["django.server"],
#         },
#         "loggers": {
#             "": {"level": "INFO", "handlers": ["console", "file"], "propagate": False},
#             "apps": {"level": "INFO", "handlers": ["console"], "propagate": False},
#             "django.server": DEFAULT_LOGGING["loggers"]["django.server"],
#         },
#     }
# )
