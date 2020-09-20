from rest_framework import viewsets

from listtodo.models import TodoList
from listtodo.serializers import TodoListSerializer


class TodoListView(viewsets.ModelViewSet):
    model = TodoList
    serializer_class = TodoListSerializer
    queryset = TodoList.objects.all()
    permission_classes = ()

