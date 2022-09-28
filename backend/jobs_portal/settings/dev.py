from .base import *


# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }

DATABASES={
        'default': {
        'ENGINE': env("POSTGRES_ENGINE"),
        'NAME': env("POSTGRES_DB"),
        'USER': env("POSTGRES_USER"),
        'PASSWORD': env("POSTGRES_PASSWORD"),
        'HOST': env("POSTGRES_HOST"),
        'PORT': env("POSTGRES_PORT")
    }
    }

#email configuration
EMAIL_BACKEND = 'djcelery_email.backends.CeleryEmailBackend'
EMAIL_HOST = 'smtp.mailtrap.io'
EMAIL_HOST_USER = 'dbd57b9371c2f9'
EMAIL_HOST_PASSWORD = 'bdb5540a1b336b'
EMAIL_PORT = '2525'
DEFAULT_FROM_EMAIL = 'info@henryjobportal.com'
DOMAIN='locahost:8000'
SITE_NAME = 'Henry Remote Job Portal'

CELERY_BROKER_URL=env("CELERY_BROKER")
CELERY_RESULT_BACKEND=env("CELERY_BACKEND")