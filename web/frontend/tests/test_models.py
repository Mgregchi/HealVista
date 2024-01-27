# frontend/test_models.py

from django.test import TestCase
from django.contrib.auth.models import User


class UserModelTest(TestCase):

    def setUp(self):
        # This method is called before each test is run
        pass

    def test_create_user(self):
        user = User.objects.create(
            username="testuser",
            email="testuser@example.com",
            password="testpassword"
        )
        self.assertEqual(user.username, "testuser")
        self.assertEqual(user.email, "testuser@example.com")

    def test_user_str_method(self):
        user = User.objects.create(
            username="testuser",
            email="testuser@example.com",
            password="testpassword"
        )
        self.assertEqual(str(user), "testuser")

    def tearDown(self):
        # This method is called after each test is run
        # Clean up test data
        User.objects.all().delete()

    # Add more tests as needed based on your model and business logic
