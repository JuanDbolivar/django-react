"""
este archivo serializer sirve para comvertir 
los datos del modelo en datos python, luego
en JSON y viseversa.
se debe crear una clase y decirle los datos del 
modelo que queremos
"""

from rest_framework import serializers
from .models import Tasks


class TasksSerializer(serializers.ModelSerializer):
    """clase para convertir datos"""
    class Meta:
        """aca van los datos que quiero convertir"""
        model = Tasks
        # con '__all__' añadimos todos los campos de la tabla de manera automatica
        fields = '__all__'
        # fields = ('id', 'title', 'description', 'done')
