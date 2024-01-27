# frontend/views.py
import re
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import AuthenticationForm
from .forms import SignUpForm, SignInForm

from frontend.models import (
    UserProfile, Address,
)


def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = SignUpForm()

    return render(request, 'accounts/signup.html', {'form': form})


def _signin(request):
    if request.method == 'POST':
        form = SignInForm(request, request.POST)
        if form.is_valid():
            phone_or_email = form.cleaned_data['phone_or_email']
            password = form.cleaned_data['password']
            user = authenticate(
                request, username=phone_or_email, password=password)

            if user is not None:
                login(request, user)
                return redirect('profile')
    else:
        form = SignInForm()
    return render(request, 'accounts/signin.html', {'form': form})


def signin_(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('profile')
    else:
        form = AuthenticationForm()
    return render(request, 'accounts/signin.html', {'form': form})


def signin(request):
    if request.method == 'POST':
        form = SignInForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('profile')
            else:
                # Handle invalid login
                pass
    else:
        form = SignInForm()
    
    return render(request, 'accounts/signin.html', {'form': form})


def signout(request):
    if request.post:
        logout(request)
    return redirect('home')


def profile(request):
    user = request.user
    profile = UserProfile.objects.get(user=user)
    # addresses = Address.objects.filter(user=user)
    return render(request, 'accounts/profile.html', {'profile': profile})
