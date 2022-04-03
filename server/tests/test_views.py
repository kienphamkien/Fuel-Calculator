# from audioop import reverse
from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from accounts.models import UserAccount, ClientInformation
# self.user = UserAccount.objects.create_user('peter@gmail.com', 'cajiza99','password123!@')
# self.client = ClientInformation.objects.filter(user_id=self.user.id)[0]

class TestViews(APITestCase):
    def test_authenticate(self):
        body = {"email": "katyfc99@gmail.com", "username": "cutone", "password": "sumPass392", "re_password": "sumPass392"}
        res = self.client.post('http://localhost:8000/auth/users/', body)
        self.assertEquals(res.status_code, status.HTTP_201_CREATED)
        login = {"username": "cutone", "password": "sumPass392"}
        res = self.client.post('http://localhost:8000/auth/jwt/create/', login)
        self.assertEquals(res.status_code, status.HTTP_200_OK)
        token = res.data['access']
        self.assertIsNotNone(token)
        self.client.credentials(HTTP_AUTHORIZATION='JWT ' + token)
 
    def test_should_not_get_user_without_auth(self):
        res = self.client.get(reverse('profile'))
        self.assertEquals(res.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_should_get_user_with_auth(self):
        self.test_authenticate()
        res = self.client.get(reverse('profile'))
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_update_profile(self):
        self.test_authenticate()
        body = {"full_name": "Kien Kien", "address1": "323 Main St", "address2": "559 Houston St", "city": "Houston", "state": "TX", "zipcode": "32415"}
        res = self.client.put(reverse('profile'), body)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
    
    def test_quotes_history(self):
        self.test_authenticate()
        res = self.client.get(reverse('fuelquotes'))
        self.assertIsNotNone(res)

    def test_submit_quote(self):
        self.test_authenticate()
        body = {"gallons": "10", "delivery_address": "323 Main St", "delivery_date": "04/03/2022", "price": "2.3", "amount_due": "123.23"}
        res = self.client.post(reverse('fuelquotes'), body)        
        self.assertEqual(res.status_code, status.HTTP_200_OK)