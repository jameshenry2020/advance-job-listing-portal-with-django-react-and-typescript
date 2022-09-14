# Generated by Django 4.1.1 on 2022-09-14 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0004_remove_job_skills_job_skills'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='job',
            name='skills',
        ),
        migrations.AddField(
            model_name='job',
            name='skills',
            field=models.ManyToManyField(null=True, to='jobs.jobskill'),
        ),
    ]
