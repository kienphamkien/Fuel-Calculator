from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserCreateSerializer, ClientInfoSerializer
from django.contrib.auth import get_user_model
from .models import ClientInformation
from django.db import connection
from django.http import JsonResponse

User = get_user_model()

class UserProfile(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = self.request.user
        user_id = user.id
        client_info = ClientInformation.objects.filter(user_id=user_id).values('full_name', 'address1', 'address2', 'city', 'state', 'zipcode')
        return JsonResponse(client_info[0])

    def put(self, request):
        try:
            user = self.request.user
            user_id = user.id
            
            data = self.request.data
            full_name = data['full_name']
            address1 = data['address1']
            address2 = data['address2']
            city = data['city']
            state = data['state']
            zipcode = data['zipcode']

            ClientInformation.objects.filter(user_id=user_id).update(full_name=full_name, address1=address1, address2=address2, city=city, state=state, zipcode=zipcode)
            return Response({ 'success': 'Profile has been updated.' })
        except:
            return Response({ 'error': 'Something went wrong when updating profile' })