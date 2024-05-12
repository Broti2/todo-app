from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('list/',views.List,name='list'),
    path('add/',views.Addlist,name='addlist'),
    path('delete/<int:id>/',views.Delete,name='delete'),
    path('<int:id>/update/',views.Update,name='update'),

]
