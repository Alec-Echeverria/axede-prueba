# Create your models here.
from django.db import models

#Modelo hotel/ciudad - se va identificar con el nombre de la ciudad
class Hotel(models.Model):
    city = models.CharField(max_length=50, unique=True)
    # Otros campos de tu modelo
    def __str__(self):
        return self.city

#Modelo Habitacion - Este se enlaza a al hotel y es una descipcion de la habitación
class Habitacion(models.Model):
    STANDARD = 'Standard'
    PREMIUM = 'Premium'
    VIP = 'VIP'

    ROOM_TYPES = [
        (STANDARD, 'Estándar'),
        (PREMIUM, 'Premium'),
        (VIP, 'VIP'),
    ]

    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=10, choices=ROOM_TYPES)
    disponible = models.BooleanField(default=True)
    capacidad_maxima = models.PositiveIntegerField(default=4)

    def __str__(self):
        return f'{self.tipo} - {self.hotel.city}'
    

#Relación entre Hotel y Habitacion, aca decidimos cuantas habitaciones tendra cada 'hotel'
class AsignacionHabitacion(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    habitacion = models.ForeignKey(Habitacion, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.cantidad} habitaciones asignadas a {self.hotel.city}'
