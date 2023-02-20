from rest_framework import serializers
from .models import *
from apps.category.serializers import CategorySerializer

class PostSerializer(serializers.ModelSerializer):
    """Convert JSON format"""
    
    get_status=serializers.CharField(source='status')
    category=CategorySerializer()
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'content',
            'time_read',
            'published',
            'views',
            'category',
            'status',
            'get_status'
        ]

class PostListSerializer(serializers.ModelSerializer):
    """Convert JSON format"""

    category=CategorySerializer()
    class Meta: 
        model=Post
        fields=[
            'id',
            'title',
            'slug',
            'thumbnail',
            'description',
            'time_read',
            'published',
            'views',
            'category',
            'status'
        ]