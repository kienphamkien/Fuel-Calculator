from django.urls import path
from . import views


urlpatterns = [
    path('', views.home),
    path('dashboard/', views.dashboard),
    path('login/', views.login),
   
]
