from rest_framework import serializers

from listtodo.models import TodoList


class TodoListSerializer(serializers.ModelSerializer):
    name = serializers.CharField(required=True)

    class Meta:
        model = TodoList
        fields = "__all__"
