# En reservations/urls.py
from django.urls import path,include
from rest_framework import routers
from .views import HotelView, AsignacionHabitacionView

router=routers.DefaultRouter()
router.register(r'hotel',HotelView,'hotel')
router.register(r'habitacion',AsignacionHabitacionView,'habitacion')


urlpatterns = [
        path("api/v1/", include(router.urls))
]

