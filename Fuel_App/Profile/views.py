from django.shortcuts import render
from django.http import HttpResponse



# Create your views here.


def home(request):
    return render(request,'Profile/index.html')

def dashboard(request):
    return render(request,'Profile/dashboard.html')

def login(request):
    return render(request,'Profile/login.html')