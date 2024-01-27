from django.db import models
# from django.contrib.auth.models import User

from django.contrib.auth.models import AbstractUser


class Address(models.Model):
    country = models.CharField(default="Nigeria", max_length=250)
    state = models.CharField(blank=True, null=True, max_length=250)
    city = models.CharField(blank=True, null=True, max_length=250)
    zip_code = models.CharField(blank=True, null=True, max_length=250)
    home_address = models.CharField(
        blank=True, null=True, max_length=250, help_text='')
    default = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.home_address}"


class UserAccount(AbstractUser):
    phone_number = models.CharField(
        max_length=15, unique=True, help_text='Please omit the leading zero, e.g 7012345678')
    address = models.ForeignKey(
        to=Address, blank=True, null=True, on_delete=models.CASCADE)  # type: ignore

    def __str__(self):
        return self.email


class UserProfile(models.Model):
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    # Add any additional user profile fields here
    address = models.ForeignKey(
        to=Address, blank=True, null=True, on_delete=models.CASCADE)  # type: ignore

    def get_user_full_name(self):
        return f"{self.user.first_name} {self.user.last_name}"

    def get_username(self):
        return self.user.username

    def get_user_email(self):
        return self.user.email

    def __str__(self):
        return self.get_user_full_name()


class HealthTourismDestination(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='destinations/')
    description = models.TextField()

    def __str__(self):
        return self.name


class Document(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    document_type = models.CharField(max_length=255)
    document_file = models.FileField(upload_to='documents/')

    def __str__(self):
        return f"{self.user.email} - {self.document_type}"


class PaymentPlan(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class Payment(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    payment_plan = models.ForeignKey(PaymentPlan, on_delete=models.CASCADE)
    transaction_id = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} - {self.payment_plan.name}"


class CustomerSupport(models.Model):
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    issue_description = models.TextField()
    response = models.TextField()

# Additional models can be added based on the evolving requirements of your application
