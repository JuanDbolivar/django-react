"""
este archivo es para crear las rutas 
GET
POST
PUT
DELETE
"""

from django.urls import path, include
# from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

router = routers.DefaultRouter()
# el r'task' es la ultima parte de la url
# eso quiere decir que con esta linea de codigo creamos endpoints con diferentes nombres
router.register(r'tasks', views.TasksView, 'tasks')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    # path('docs/', include_docs_urls(title='Tasks API')),
]
