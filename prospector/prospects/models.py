from django.db import models

class Prospect(models.Model):
  name = models.CharField(max_length=100)
  email = models.EmailField(max_length=100, unique=True)
  notes = models.TextField(blank=True)
  created_on = models.DateTimeField(auto_now_add=True)

