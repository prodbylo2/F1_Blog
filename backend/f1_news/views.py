from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from .models import BlogPost, BlogManager, Tag
from markdown import markdown
import json
from django.conf import settings

# Initialize the blog manager
blog_manager = BlogManager(settings.BASE_DIR / 'posts')

class BlogPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

@api_view(['GET'])
def list_posts(request):
    query = request.GET.get('search', '')
    if query:
        return search_posts(request)
    else:
        posts = blog_manager.get_all_posts()
    
    paginator = BlogPagination()
    page = paginator.paginate_queryset(posts, request)
    
    # Convert posts to JSON
    posts_data = [post.to_dict() for post in page]
    
    # Convert markdown to HTML
    for post in posts_data:
        post['html_content'] = markdown(post['content'])
    
    return paginator.get_paginated_response(posts_data)

@api_view(['GET'])
def search_posts(request):
    query = request.GET.get('query', '')
    if not query:
        return JsonResponse({'results': [], 'count': 0, 'page': 1, 'total_pages': 1})
    
    posts = blog_manager.search_posts(query)
    
    paginator = BlogPagination()
    page = paginator.paginate_queryset(posts, request)
    
    # Convert posts to JSON
    posts_data = [post.to_dict() for post in page]
    
    # Convert markdown to HTML
    for post in posts_data:
        post['html_content'] = markdown(post['content'])
    
    return paginator.get_paginated_response(posts_data)

@api_view(['GET'])
def get_post(request, slug):
    post = blog_manager.get_post_by_slug(slug)
    if not post:
        return JsonResponse({'error': 'Post not found'}, status=404)
    
    post_data = post.to_dict()
    post_data['html_content'] = markdown(post_data['content'])
    return JsonResponse(post_data)

@api_view(['GET'])
def list_tags(request):
    tags = Tag.objects.all()
    tags_data = [{'name': tag.name} for tag in tags]
    return JsonResponse(tags_data, safe=False)
