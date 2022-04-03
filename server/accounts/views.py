from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from .models import ClientInformation, FuelQuotes
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
            return Response({ 'error': 'Something went wrong when updating profile.' })

class QuotesHistory(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = self.request.user
        user_id = user.id
        quotes = list(FuelQuotes.objects.filter(user_id=user_id).values('id', 'gallons', 'delivery_address', 'delivery_date', 'price', 'amount_due'))
        return JsonResponse(quotes, safe=False)

    def post(self, request):
        try:
            user = self.request.user
            user_id = user.id

            data = self.request.data
            FuelQuotes.objects.create(user_id=user_id, gallons=data['gallons'], delivery_address=data['delivery_address'], delivery_date=data['delivery_date'], price=data['price'], amount_due=data['amount_due'])
            print(FuelQuotes.objects.all())
            return Response({ 'success': 'Fuel quote has been submitted.' })
        except:
            return Response({ 'error': 'Something went wrong when submitting fuel quote.' })


class GetPrice(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        user = self.request.user
        user_id = user.id
        gallons = int(self.request.data['gallons'])

        location_factor = 0.02 if ClientInformation.objects.get(user_id=user_id).state == 'TX' else 0.04
        history_factor = 0.01 if len(FuelQuotes.objects.filter(user_id=user_id)) != 0 else 0
        gallons_factor = 0.02 if gallons > 1000 else 0.03
        company_factor = 0.1
        price = (1.5 * (1 + (location_factor - history_factor + gallons_factor + company_factor)))
        return JsonResponse({"price": round(price,3), "amount_due": round(gallons * price, 2)})