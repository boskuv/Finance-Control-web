from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)
    codename = models.CharField(max_length=255, primary_key=True, unique=True)
    is_regular_expense = models.BooleanField()


class Expense(models.Model):
    id = models.IntegerField(primary_key=True)
    amount = models.FloatField()
    created = models.DateTimeField(auto_now_add=True)
    category_codename = models.ForeignKey(Category, on_delete=models.CASCADE)
