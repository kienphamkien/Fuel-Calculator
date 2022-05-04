from django.test import SimpleTestCase
from django.urls import reverse, resolve
from accounts.views import UserProfile, QuotesHistory, GetPrice, FuelQuotes

class TestUrls(SimpleTestCase):

    def test_profile_url_is_resolved(self):

        url = reverse('profile')
        
        self.assertEquals(resolve(url).func.view_class,UserProfile)
    

    def test_fuelquotes_url_is_resolved(self):

        url = reverse('fuelquotes')
        self.assertEquals(resolve(url).func.view_class,QuotesHistory)

    def test_getprice_url_is_resolved(self):

        url = reverse('getprice')
        self.assertEquals(resolve(url).func.view_class,GetPrice)
