
from django.test import TestCase
from accounts.models import UserAccount, ClientInformation

class TestModel(TestCase):
    def setUp(self):
        self.user = UserAccount.objects.create_user('peter@gmail.com', 'cajiza99','password123!@')
        self.client = ClientInformation.objects.filter(user_id=self.user.id)[0]

    def test_creates_UserAccount_model(self):
        self.assertIsInstance(self.user, UserAccount)
        self.assertFalse(self.user.is_staff)
        self.assertEqual(self.user.username,'cajiza99')
        self.assertEqual(self.user.id, 2)

    def test_clientInfo_is_initialized(self):
        self.assertEquals(self.client.user_id, self.user.id)
        self.assertEquals(self.client.full_name, '')
        self.assertEquals(self.client.address1, '')
        self.assertEquals(self.client.address2, '')
        self.assertEquals(self.client.city, '')
        self.assertEquals(self.client.state, '')
        self.assertEquals(self.client.zipcode, '')