from django.shortcuts import render
from rest_framework import generics
from .serializers import CategorySerializer, ExpenseSerializer
from .models import Category


class RESTCategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_view_name(self):
        return "List"


class RESTCategoryDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    lookup_field = 'codename'

    def get_view_name(self):
        return "Detail"
