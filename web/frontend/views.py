# frontend/views.py
from django.shortcuts import render, redirect
from frontend.models import (
    UserProfile, Address,
)


def landing(request):
    return render(request, 'frontend/landing-page.html')


def home(request):
    return render(request, 'frontend/index.html')
