# En reservations/views.py
from rest_framework import viewsets
from .serializer import HotelSerializer,AsignacionHabitacionSerializer
from .models import Hotel, AsignacionHabitacion

#Obtener las ciudades
class HotelView(viewsets.ReadOnlyModelViewSet):
    serializer_class = HotelSerializer
    queryset = Hotel.objects.all()


# Obtener las habitaciones de las ciudades
class AsignacionHabitacionView(viewsets.ReadOnlyModelViewSet):
    serializer_class = AsignacionHabitacionSerializer
    queryset = AsignacionHabitacion.objects.all()
 

