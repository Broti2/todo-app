from django.db import models


class Todo(models.Model):
    list=models.CharField(max_length=60) 
# Create your models here.
    def __str__(self):
        return f"{self.list}"
