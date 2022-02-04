from .models import Expense
from django_filters import rest_framework as filters


class ExpenseFilter(filters.FilterSet):
    created = filters.DateFromToRangeFilter()

    class Meta:
        model = Expense
        fields = ['created']
