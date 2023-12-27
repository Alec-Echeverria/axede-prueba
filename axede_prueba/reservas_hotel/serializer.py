# En reservations/serializers.py
from rest_framework import serializers
from .models import Hotel, AsignacionHabitacion, Habitacion

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model=Hotel
        fields='__all__'
        

class HabitacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Habitacion
        fields = ('id', 'tipo', 'disponible', 'capacidad_maxima')
        
class AsignacionHabitacionSerializer(serializers.ModelSerializer):
    habitacion = HabitacionSerializer()  # Incluye el serializador de Habitacion

    class Meta:
        model=AsignacionHabitacion
        fields='__all__'
