from rest_framework import serializers
from expenses.models import Category, Expense


class ExpenseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Expense
        fields = '__all__' # ['amount', 'created', 'category_codename']


class CategorySerializer(serializers.ModelSerializer):
    #was_published_recently = serializers.BooleanField(read_only=True)
    #choice_set = ExpenseSerializer(read_only=True, many=True)

    class Meta:
        model = Category
        fields = '__all__' # ['name', 'codename', 'is_regular_expense']
