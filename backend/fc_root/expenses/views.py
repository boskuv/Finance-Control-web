from rest_framework import generics
from django_filters import rest_framework as filters
from .serializers import CategorySerializer, ExpenseSerializer
from .models import Category, Expense
from .filters import ExpenseFilter


class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    lookup_field = 'codename'


class ExpenseListView(generics.ListCreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ExpenseFilter


class ExpenseByCategoryListView(generics.ListCreateAPIView):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

    lookup_field = 'category_codename'

#def get_queryset(self):
#        last_two_days = now() - timedelta(days=2)
#        return Question.objects.filter(pub_date__gt=last_two_days)

#  def get_serializer_class(self):
#         if self.request.method == 'GET':
#             return QuestionListPageSerializer
#         else:
#             return QuestionDetailPageSerializer
