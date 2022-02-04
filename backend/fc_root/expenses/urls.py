from django.urls import path
from expenses.views import CategoryListView, CategoryDetailsView, ExpenseListView, ExpenseByCategoryListView


urlpatterns = [
        path("categories/", CategoryListView.as_view(), name="rest_category_list"),
        path("categories/<str:codename>/", CategoryDetailsView.as_view(), name="rest_category_detail"),
        path("expenses/", ExpenseListView.as_view(), name="rest_expense_list"),
        path("expenses/<str:category_codename>/", ExpenseByCategoryListView.as_view(), name="rest_expense_by_category_list")
]
