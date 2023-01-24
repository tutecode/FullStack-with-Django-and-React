from apps.category.models import Category
from django.db.models.query_utils import Q
from rest_framework import permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Post, ViewCount
from .pagination import (LargeSetPagination, MediumSetPagination,
                         SmallSetPagination)
from .serializers import PostListSerializer, PostSerializer


class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.objects.all().exists():

            #If Post exist return all posts
            posts = Post.objects.all()
            
            # paginar los posts antes de visualizarlos
            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True) # serilize result
            
            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)

class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.objects.all().exists():
            
            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)
            posts = Post.objects.order_by('-published').all()

        # # Si la categoría tiene un padre, filtrar sólo por esta categoría y no por el padre también
        # if category.parent:
        #     posts = posts.filter(category=category)

        # # Si la categoría no tiene una categoría padre, significa que ella misma es una categoría padre
        # else: 

            #Filtrar categoria sola
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)

            # Si esta categoría padre tiene hijos, filtrar por la categoría padre y sus hijos
            else:
                sub_categories = Category.objects.filter(parent=category)
                filtered_categories = [category]
                
                for cat in sub_categories:
                    filtered_categories.append(cat)

                filtered_categories = tuple(filtered_categories)

                # Si el post se encuentra en esta categoria
                posts = posts.filter(category__in=filtered_categories)

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(results, many=True)


            return paginator.get_paginated_response({'posts': serializer.data})
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)

class PostDetailView(APIView):
    # slug from Post
    # If Post exist, we want a list=filter

    def get(self, request, slug, format=None):
        if Post.objects.filter(slug=slug).exists():
            
            # Get Post
            post = Post.objects.get(slug=slug)
            # Convert to JSON
            serializer = PostSerializer(post)

            # Nos permite acceder a informacion del buscador
            address = request.META.get('HTTP_X_FORWARDED_FOR')
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')
            
            # Si no existe un ViewCoun, porque no queremos duplicaods
            if not ViewCount.objects.filter(post=post, ip_address=ip):
                view = ViewCount(post=post, ip_address=ip)
                view.save()
                # Sumar vista
                post.views += 1
                post.save()

            # Return a list of Posts
            return Response({'post': serializer.data}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Post doesnt exist'}, status=status.HTTP_404_NOT_FOUND)


class SearchBlogView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self,request, format=None):
        search_term = request.query_params.get('s')
        matches = Post.objects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(content__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )

        #paginator = SmallSetPagination()
        #results = paginator.paginate_queryset(matches, request)

        serializer = PostListSerializer(matches, many=True)
        return Response({'filtered_posts': serializer.data}, status=status.HTTP_200_OK)