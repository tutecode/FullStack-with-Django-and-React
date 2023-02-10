import uuid

from apps.category.models import Category
from ckeditor.fields import RichTextField
from django.conf import settings
from django.db import models
from django.utils import timezone

User = settings.AUTH_USER_MODEL

def blog_thumbnail_directory(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

# Create your models here.


class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    thumbnail = models.ImageField(
        upload_to=blog_thumbnail_directory, max_length=500)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(max_length=255)
    content = RichTextField()
    time_read = models.IntegerField()
    published = models.DateTimeField(default=timezone.now)
    views = models.IntegerField(default=0, blank=True)
    status = models.CharField(max_length=10, choices=options, default='draft')
    # Si borramos la categoria, no borrar Post y vicevsersa
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        ordering = ('-published',)  # agarra el mas nuevo que se ha creado

    def __str__(self):
        return self.title

    def get_view_count(self):
        views = ViewCount.objects.filter(post=self).count()
        return views


class ViewCount(models.Model):
    post = models.ForeignKey(
        Post, related_name='blogpost_view_count', on_delete=models.CASCADE)
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"
