from django.db import models

# Create your models here.
class Category(models.Model):
    # Meta options: https://docs.djangoproject.com/en/4.1/topics/db/models/#meta-options
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
    
    # CharField: https://docs.djangoproject.com/en/4.0/ref/models/fields/#django.db.models.CharField
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    views = models.IntegerField(default=0, blank=True)

    # Allows subcategories ForeingKey
    # self category
    # children de category
    # si borramos parent se borran todas las categories
    #
    parent = models.ForeignKey('self', related_name='children', on_delete=models.CASCADE, blank=True, null=True)


    def __str__(self):
        """String for representing the Category object (in Admin site etc.)."""
        return self.name # name from class Meta

    def get_view_count(self):
        """Filtrando todos los viewcount que pertenecen a la categoria y le hacemos del count"""
        views = ViewCount.objects.filter(category=self).count()
        return views

# contador de visitas para mi
class ViewCount(models.Model):
    # la vista a que categoria pertenece
    category = models.ForeignKey(Category, related_name='category_view_count', on_delete=models.CASCADE)
    # ip de la persona que visita
    ip_address = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.ip_address}"