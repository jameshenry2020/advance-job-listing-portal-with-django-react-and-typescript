# Generated by Django 4.1.1 on 2022-09-14 13:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_alter_job_job_zone'),
    ]

    operations = [
        migrations.RenameField(
            model_name='job',
            old_name='catgory',
            new_name='category',
        ),
    ]
