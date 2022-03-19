from multiprocessing.connection import Client
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.validators import MinLengthValidator, MinValueValidator
from django.conf import settings
from decimal import Decimal

class UserAccountManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Please enter your username')

        email = self.normalize_email(email)
        user = self.model(email=email, username=username)

        user.set_password(password)
        user.save()
        ClientInformation(user_id=user.id).save()
        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    username = models.CharField(max_length=50, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username

class ClientInformation(models.Model):
    user = models.OneToOneField(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    full_name= models.CharField(default='',max_length=50)
    address1= models.CharField(default='', max_length=100)
    address2= models.CharField(default='',max_length=100)
    city= models.CharField(default='',max_length=100)
    state= models.CharField(default='',max_length=2)
    zipcode= models.CharField(default='',max_length=9, validators=[MinLengthValidator(4)])

    def __str__(self):
        return str(self.user)

class FuelQuotes(models.Model):
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    gallons = models.FloatField()
    delivery_address = models.CharField(max_length=100)
    delivery_date = models.CharField(max_length=100)
    price = models.FloatField()
    amount_due = models.FloatField()

    def __str__(self):
        return str(self.user)

