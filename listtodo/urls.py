from rest_framework import routers
from django.urls import path, include

from listtodo.views import TodoListView

router = routers.DefaultRouter()
router.register('todo', TodoListView)


urlpatterns = [
    path('', include(router.urls))
]
