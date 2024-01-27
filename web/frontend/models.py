from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # Add any additional user profile fields here
    # ...

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
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    document_type = models.CharField(max_length=255)
    document_file = models.FileField(upload_to='documents/')

    def __str__(self):
        return f"{self.user.get_user_email()} - {self.document_type}"


class PaymentPlan(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name


class Payment(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    payment_plan = models.ForeignKey(PaymentPlan, on_delete=models.CASCADE)
    transaction_id = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.get_user_email()} - {self.payment_plan.name}"


class CustomerSupport(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    issue_description = models.TextField()
    response = models.TextField()

# Additional models can be added based on the evolving requirements of your application
