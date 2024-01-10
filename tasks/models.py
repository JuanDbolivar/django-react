"""En este archivo se crean las tablas 
de la base de datos, los ids se generan
automaticamente
"""

from django.db import models

# Create your models here.


class Tasks(models.Model):
    """task model"""
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    done = models.BooleanField(default=False)

# esta funcion debe ir dentro del modelo
    def __str__(self):
        return self.title
