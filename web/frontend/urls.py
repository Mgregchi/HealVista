# frontend/urls.py
from django.urls import path
from frontend import views

app_name = 'frontend'

urlpatterns = [
    path('', views.home, name='home'),
]
