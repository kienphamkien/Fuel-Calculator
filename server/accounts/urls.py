from unicodedata import name
from django.urls import path
from .views import UserProfile, QuotesHistory, GetPrice

urlpatterns = [
    path('profile', UserProfile.as_view(), name='profile'),
    path('fuelquotes', QuotesHistory.as_view(), name = 'fuelquotes'),
    path('getprice', GetPrice.as_view(), name = 'getprice'),
]