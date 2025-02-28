import random

from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission


class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    first_name = models.CharField(max_length=50, default=f'user{random.randint(1, 1000)}')
    last_name = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50, unique=True)
    is_verified = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    verification_token = models.CharField(max_length=100, null=True, blank=True)
    password = models.CharField(max_length=100, null=True, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'name', 'email']

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.email
