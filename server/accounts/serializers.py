from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import ClientInformation

User = get_user_model()
class UserCreateSerializer(UserCreateSerializer):
    info = serializers.PrimaryKeyRelatedField(many=False, read_only=True)
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'username', 'password', 'info')