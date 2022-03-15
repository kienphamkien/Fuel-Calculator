from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from .models import ClientInformation


User = get_user_model()

class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            user = self.request.user
            username = user.username
            user_profile = User.objects.get(username=user)
            user_profile = UserCreateSerializer(user_profile)

            return Response({ 'profile': user_profile.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when retrieving profile' })

    def put(self, request):
        try:
            user = self.request.user
            user_id = user.id
            b =  ClientInformation(user_id=user_id, full_name='Kien Pham')
            b.save()
            return Response({ 'error': 'ok bede' })
        except:
            return Response({ 'error': 'Something went wrong when retrieving profile' })