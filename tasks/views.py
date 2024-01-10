"""
en este archivo configuramos las vistas 
que queremos mostar a los usuarios
"""

from rest_framework import viewsets
from .serializer import TasksSerializer
from .models import Tasks

# Create your views here.


class TasksView(viewsets.ModelViewSet):
    """esta clase muestra las vistas que se serializaron"""
    serializer_class = TasksSerializer
    queryset = Tasks.objects.all()
