# forms/accounts.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, UserChangeForm
from django.contrib.auth.models import User

from frontend.models import UserAccount


class SignInForm(AuthenticationForm):
    class Meta:
        model = UserAccount
        fields = ('email', 'password')


class SignUpForm_(UserCreationForm):
    email = forms.EmailField(
        max_length=254, help_text='Required. Enter a valid email address.')

    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']


class SignUpForm(UserCreationForm):
    email = forms.EmailField(
        max_length=254, help_text='Required. Enter a valid email address.')
    phone_number = forms.CharField(
        max_length=15, help_text='Required. Enter a valid phone number.')

    class Meta:
        model = UserAccount
        fields = ['email', 'phone_number', 'password1', 'password2']


class UserAccountUpdateForm(UserChangeForm):
    class Meta:
        model = UserAccount
        exclude = ('password',)
