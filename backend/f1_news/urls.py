from django.urls import path
from .views import list_posts, get_post, list_tags

urlpatterns = [
    path('posts/', list_posts, name='list_posts'),
    path('posts/<slug:slug>/', get_post, name='get_post'),
    path('tags/', list_tags, name='list_tags'),
]
