from django.contrib import admin
from .models import Hotel,Habitacion,AsignacionHabitacion

# Register your models here.
admin.site.register(Hotel)
admin.site.register(Habitacion)
admin.site.register(AsignacionHabitacion)