from rest_framework import serializers
from expenses.models import Category, Expense


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'codename', 'is_regular_expense']


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['amount', 'created', 'category_codename']
