from django.contrib import admin

# Register your models here.
from listtodo.models import TodoList

admin.site.register(TodoList)