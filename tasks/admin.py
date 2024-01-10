""" 
esta es la configuracion del panel
de administrador
"""

from django.contrib import admin
from .models import Tasks
# Register your models here.

admin.site.register(Tasks)
