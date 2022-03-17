from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import ClientInformation

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
    # info = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = '__all__'


class ClientInfoSerializer(serializers.ModelSerializer):
    # info = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = ClientInformation
        fields = '__all__'
# class UserCreateSerializer(UserCreateSerializer):
#     class Meta(UserCreateSerializer.Meta):
#         model = User
#         fields = ('id', 'email', 'username', 'password')
