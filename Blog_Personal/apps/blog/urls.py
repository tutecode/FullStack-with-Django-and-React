from django.urls import path

from .views import *

urlpatterns = [
    path('list', BlogListView.as_view()),
    path('by_category', ListPostsByCategoryView.as_view()),
    path('detail/<slug>', PostDetailView.as_view())
    path('search', SearchBlogView.as_view())
]





## EXAMPLE FROM https://docs.djangoproject.com/en/4.1/topics/http/urls/
#from django.urls import path
#
#from . import views
#
#urlpatterns = [
#    path('articles/2003/', views.special_case_2003),
#    path('articles/<int:year>/', views.year_archive),
#    path('articles/<int:year>/<int:month>/', views.month_archive),
#    path('articles/<int:year>/<int:month>/<slug:slug>/', views.article_detail),
#]

