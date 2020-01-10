from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    age = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return str(self.username)


class Todo(models.Model):
    task = models.TextField(max_length=200)
    done = models.BooleanField(default=False)