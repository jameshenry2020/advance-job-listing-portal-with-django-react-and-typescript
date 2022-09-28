from __future__ import absolute_import
import os
from celery import Celery
from jobs_portal.settings import base

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jobs_portal.settings.dev')

app = Celery("jobs_portal")

# app.config_from_object('django.conf:settings.dev', namespace='CELERY')
app.config_from_object("jobs_portal.settings.dev", namespace="CELERY"),


app.autodiscover_tasks(lambda: base.INSTALLED_APPS)
