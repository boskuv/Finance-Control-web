# Generated by Django 3.2 on 2022-01-29 18:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('name', models.CharField(max_length=255)),
                ('codename', models.CharField(max_length=255, primary_key=True, serialize=False, unique=True)),
                ('is_regular_expense', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Expense',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('amount', models.FloatField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('category_codename', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='expenses.category')),
            ],
        ),
    ]
