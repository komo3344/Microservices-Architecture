# Generated by Django 3.0.1 on 2020-01-10 16:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_todo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='todo',
            new_name='task',
        ),
    ]