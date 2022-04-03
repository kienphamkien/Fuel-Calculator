import email
from rest_framework.test import APITestCase
from accounts.models import UserAccountManager, UserAccount

class TestModel(APITestCase):

    def test_creates_userMan_model(self):
        user=UserAccountManager.create_user('cajiza99','peter@gmail.com','password123!@')
        user=UserAccountManager.__str__('peter@gmail.com')
        self.assertIsInstance(user, UserAccountManager)
        self.assertFalse(user.is_staff)
        self.assertEqual(user.email,'peter@gmail.com')

