from audioop import reverse
from rest_framework.test import APITestCase



class TestViewsList(APITestCase):

    def test_creates_user(self):
        self.client.put(reverse)
