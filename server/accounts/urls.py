from django.urls import path
from .views import UserProfile, QuotesHistory, GetPrice

urlpatterns = [
    path('profile', UserProfile.as_view()),
    path('fuelquotes', QuotesHistory.as_view()),
    path('getprice', GetPrice.as_view()),
]