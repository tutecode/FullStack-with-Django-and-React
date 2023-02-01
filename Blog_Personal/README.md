# Curso Desarrollo FullStack con DJango y React | Parte 2

### Resources:

* Course: [Solo Python](https://youtu.be/6XYsYfy7svM)
* Learn:
    * [Git and GitHub for Beginners - Crash Course](https://youtu.be/RGOj5yH7evk)
    * [Aprende GIT ahora! curso completo GRATIS desde cero](https://youtu.be/VdGzPZ31ts8)
* More:
    * [Writing your first Django app, part 1](https://docs.djangoproject.com/en/4.1/intro/tutorial01/)
    * [Python Tutorial](https://j2logo.com/python/tutorial/)
    * [ScriptVerse Academy](https://scriptverse.academy/)
    * [Web Icons](https://boxicons.com/)
    * [Flaticon](https://www.flaticon.es/)
    * [Headless UI](https://headlessui.com/)
    * [Web3Storage](https://web3.storage/)
    * Tailwind:
        * [Responsive Design](https://tailwindcss.com/docs/responsive-design)
        * [Tailwind UI kit](https://tailwinduikit.com/)
* Projects from **GitHub**:
    * main [project](https://github.com/apholdings/Desarrollo-Web-FullStack-con-Django-y-React)
        * ekeko [project](https://github.com/llekekoll/fullStack-Django-React/tree/main/1-Agencia_Marketing)
        * berty [project](https://github.com/fberty/Agencia_Marketing)
        * fran [project](https://github.com/l18630/full-stack)
        * tutecode [project](https://github.com/tutecode/FullStack-with-Django-and-React)

## Blog Project

![](https://i.imgur.com/LAcXgSG.png)

### Migrate project ([link](https://youtu.be/6XYsYfy7svM?t=304))

* Copy all files and folders from `Agencia_Marketing` except `env`, `node_modules`, `package-lock` and paste in a new folder `Blog_Personal`

**Terminal:** 
* Change directory to `Blog_Personal` > `cd Blog_Personal`
    * `C:\Users\Matías\Documents\GitHub\FullStack-with-Django-and-React\Blog_Personal`
* Make virtualenv > `python -m virtualenv env`
* Activate `.env` Virtual Environment
    * on **Linux/Mac** -> `source env/bin/activate`
    * on **Windows** -> `./env/Scripts/activate`
* Install `requirements.txt` > `pip install -r ./requirements.txt`
* Install `npm` > `npm i`
* Run Server DJango > `python ./manage.py runserver`
    * Stop `(CTRL + C)`
* Push to GitHub
* Create new branch `Blog_Personal`
* Change directory > `cd apps`
* Create App `blog` into `apps` directory > `python ../manage.py startapp blog`
* Create App `category` into `apps` directory > `python ../manage.py startapp category`

> Remember to go to `blog/apps.py` and change `name="apps.blog"`
> 
> Remember to go to `category/apps.py` and change `name="apps.category"`

* Make file `blog/urls.py` and `category/urls.py` ([info](https://docs.djangoproject.com/en/4.1/topics/http/urls/))
* Modify `core/settings.py`

```
PROJECT_APPS = [
    'apps.blog',
    'apps.category',
]
```

* Modify `core/urls.py`

```
path('api/blog/', include('apps.blog.urls')),
path('api/category/', include('apps.category.urls')),
```

### Models

**Info:**
* [DJango Slug Tutorial](https://learndjango.com/tutorials/django-slug-tutorial)
* [Migrations](https://docs.djangoproject.com/en/4.1/topics/migrations/)

### Project: Models ([info](https://docs.djangoproject.com/en/4.1/topics/db/models/#module-django.db.models))
* Code `category/models.py` 

### Project: Migrations ([info](https://docs.djangoproject.com/en/4.1/topics/migrations/))

#### :point_right: **REMEMBER!!!** :point_left:
> **ALWAYS YOU CHANGE class `models.py` you have to make migrations**
> 1. Makemigrations > `python ./manage.py makemigrations`
> 2. Migrate > `python ./manage.py migrate`


* Makemigrations > `python ./manage.py makemigrations`

```
Migrations for 'category':
  apps\category\migrations\0001_initial.py
    - Create model Category
    - Create model ViewCount
```

* Migrate > `python ./manage.py migrate`

```
Operations to perform:
  Apply all migrations: 
  , auth, category, contenttypes, sessions
Running migrations:
  Applying category.0001_initial... OK
```

### Project: Serializers ([info](https://www.django-rest-framework.org/api-guide/serializers/)) ([video](https://youtu.be/6XYsYfy7svM?t=1276))

* Make file `category/serializers.py`

### Project: Views ([video](https://youtu.be/6XYsYfy7svM?t=1465)) ([info](https://www.django-rest-framework.org/api-guide/views/))


**Postman:**
* Install [postman](https://www.postman.com/downloads/)
* Create collection `Blog` and `Category`
* New request "List Categories"

![](https://i.imgur.com/JECB9je.png)


![](https://i.imgur.com/cPuZx1Z.png)


* Code `category/views.py`
* Code `category/urls.py`

**Terminal:**
* Create a super user to give acces > `python ./manage.py createsuperuser`
    * Username: `forkdao`
    * Email: `mail@forkdao.com`
    * Password (you can't see it): `forkdao123`
    * Password (again): `forkdao123`
    * Bypass pasworrd validation and create User anyway? Y/N > `Y`
* Run Server DJango > `python ./manage.py runserver` > `CTRL + right click` > `http://127.0.0.1:8000/`
* Run Admin DJango > `http://127.0.0.1:8000/admin/login/?next=/admin/`
    * If you have Error time zone utc-3> `TIME_ZONE = 'America/Buenos_Aires'`


---


![](https://i.imgur.com/8olMyME.png)
![](https://i.imgur.com/XaTp7HQ.png)


* Code `category/admin.py` ([video](https://youtu.be/6XYsYfy7svM?t=1957))

![](https://i.imgur.com/Q6uKWG1.png)

* Add Category `Software` and child `Desarrollo Web`

![](https://i.imgur.com/JRMStje.png)
![](https://i.imgur.com/tAXSkcj.png)
![](https://i.imgur.com/bKVYb16.png)

* Add Category `Marketing` and child `Branding`

![](https://i.imgur.com/NqkYHT7.png)

* Send Postman

![](https://i.imgur.com/HTjLq4v.png)

* Code from main `category/views.py`
* Send Postman

![](https://i.imgur.com/7o5k5vG.png)

* Code `blog/models.py`, `blog/serializers.py`, `blog/views.py`, `blog/urls.py`

![](https://i.imgur.com/uGxc8KU.png)

* Copy `List Categories` from **Postman** and paste it in `Blog`
    * "List Posts" > GET: `http://127.0.0.1:8000/api/blog/list`

![](https://i.imgur.com/L8gNGfe.png)

**Terminal:**

* Run Server DJango > `python ./manage.py runserver`
    * Stop `(CTRL + C)`
* Makemigrations > `python ./manage.py makemigrations`

```
Migrations for 'blog':
  apps\blog\migrations\0001_initial.py
    - Create model Post
    - Create model ViewCount
```

* Migrate > `python ./manage.py migrate`

```
Operations to perform:
  Apply all migrations: admin, auth, blog, category, contenttypes, sessions
Running migrations:
  Applying blog.0001_initial... OK
```

![](https://i.imgur.com/X1HI17r.png)

* Code `blog/admin.py`

* Run Admin DJango (web) > `http://127.0.0.1:8000/admin/login/?next=/admin/`

![](https://i.imgur.com/th2MJnM.png)

* Code `core/settings.py` 

```
CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'full',
        'autoParagraph': False
    }
```

![](https://i.imgur.com/qfe7LQY.png)

* Lorem ipsum [web](https://loremipsum.io/es/)

* Create post (add)

![](https://i.imgur.com/ZpdbEnw.png)



* Django CKEditor ([video](https://youtu.be/6XYsYfy7svM?t=4297)) ([web](https://django-ckeditor.readthedocs.io/en/latest/#django-ckeditor))

* Code `core/urls.py`
    * Add

```
    path('ckeditor/', include('ckeditor_uploader.urls')),
```



---


* ~~Code `blog/models.py`~~ (**SKIP FROM HERE**)

```
from ckeditor_uploader.fields import RichTextUploadingField


    content =       RichTextUploadingField()
```


* Makemigrations > `python ./manage.py makemigrations`

```
Migrations for 'blog':
  apps\blog\migrations\0002_alter_post_content.py
    - Alter field content on post
```

* Migrate > `python ./manage.py migrate`

```
Operations to perform:
  Apply all migrations: admin, auth, blog, category, contenttypes, sessions
Running migrations:
  Applying blog.0002_alter_post_content... OK
```

* Run Server Django > `python ./manage.py runserver`
    * Stop `(CTRL + C)`


* Delete `Blog_Personal/build` and  `Blog_Personal/static`
    * *Commit* "delete build and static" but not *sync*
* Run > `npm run build`
* Run > `python .\manage.py collectstatic`

**(SKIP TO HERE)**

---

* Code `core/settings.py`
    * `CKEDITOR_UPLOAD_PATH = "uploads/"`
* Code > `blog/models.py`

```
from ckeditor.fields import RichTextField
    content =       RichTextField()
```

* Makemigrations > `python ./manage.py makemigrations`
* Migrate > `python ./manage.py migrate`
* Run Server Django > `python ./manage.py runserver`
    * Stop `(CTRL + C)`
* Run Admin Django > `http://127.0.0.1:8000/admin/login/?next=/admin/`
* Upload [image](https://bafybeihccf24bg3cg2b4iab2qmgvxfsxdhpcb7ts4a4fjevy5rlwkaimn4.ipfs.w3s.link/forkdao.png) to web3storage
* If you have this error.

    * ![](https://i.imgur.com/AaMjf9q.png)

```
    thumbnail =     models.ImageField(upload_to=blog_thumbnail_directory, max_length=500)
```

* Code `blog/views.py`
* Send Postman (you have to visualize posts)

![](https://i.imgur.com/yBQcwgP.png)

* Code `blog/serializer.py`
* Code `blog/views.py`

![](https://i.imgur.com/HRoSfqn.png)

* Create `pagination.py`
* Code `blog/views.py`

![](https://i.imgur.com/1OPHLXj.png)
![](https://i.imgur.com/8pbmgTz.png)

* Code `blog/urls.py` (**min 1:40:32**)

```
from django.urls import path

from .views import *

urlpatterns = [
    path('list', BlogListView.as_view()),
    path('by_category', ListPostsByCategoryView.as_view()),
]
```

* Code `blog/views.py`

```
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

            
            #slug = request.query_params.get('slug')
            #category = Category.objects.get(slug=slug)
#           
            print(slug)
            posts = Post.objects.order_by('-published').all()
            print(posts)
            
            return Response({'success':'success'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)

```

* Send Postman

![](https://i.imgur.com/bIo4GMR.png)
![](https://i.imgur.com/Rc4AZLM.png)

* Code `blog/views.py` that return the `categories` (**time: 1:48:07**)

```
class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.objects.all().exists():
            
            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)
            posts = Post.objects.order_by('-published').all()
            
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
            else:
                categories = Category.objects.filter(parent=category)
                print(categories)
            return Response({'success':'success'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)
```

![](https://i.imgur.com/imLdI3D.png)
![](https://i.imgur.com/rUy0qQl.png)

* Code `blog/views.py` that return the `categories` and `subcategories` (**time: 1:50:43**)

```
class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.objects.all().exists():
            
            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)
            posts = Post.objects.order_by('-published').all()
            
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
            else:
                sub_categories = Category.objects.filter(parent=category)
                filtered_categories = [category]
                
                print('Category: ', filtered_categories)
                print('Sub Category: ', sub_categories)

            return Response({'success':'success'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)

```

* Send Postman

![](https://i.imgur.com/imLdI3D.png)

* Terminal

![](https://i.imgur.com/hJnTBsU.png)

* Code 

```
class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if Post.objects.all().exists():
            
            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)
            posts = Post.objects.order_by('-published').all()
            
            if not Category.objects.filter(parent=category).exists():
                posts = posts.filter(category=category)
            else:
                sub_categories = Category.objects.filter(parent=category)
                filtered_categories = [category]
                
                for cat in sub_categories:
                    filtered_categories.append(cat)

                print(filtered_categories)


            return Response({'success':'success'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No posts found'}, status=status.HTTP_404_NOT_FOUND)
```

* Send Postman (slug=software) **(time: 1:50:30)**

![](https://i.imgur.com/tCkow1p.png)

* Code `blog/views.py` **(time: 1:51:34)**

```
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
```

* Send Postman

![](https://i.imgur.com/90zELfk.png)



* Code `blog/views.py` **(time: 2:01:33)**

```
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
```

* Information

> This code snippet is checking for the IP address of the client making the request. The first line attempts to get the IP address from the 'HTTP_X_FORWARDED_FOR' key in the request's META dictionary. If this key is present and has a value, it takes the last value in the list that is obtained after splitting the string by ',' and stripping any whitespaces. This is because the 'HTTP_X_FORWARDED_FOR' key can contain a comma separated list of IP addresses representing the chain of proxy servers that the request has passed through. The last address in this list is considered to be the address of the client. If the 'HTTP_X_FORWARDED_FOR' key is not present in the META dictionary, it falls back to using the 'REMOTE_ADDR' key, which should contain the IP address of the client.

```
            address = request.META.get('HTTP_X_FORWARDED_FOR')
            if address:
                ip = address.split(',')[-1].strip()
            else:
                ip = request.META.get('REMOTE_ADDR')
```

* Code `blog/urls.py` 

```
from django.urls import path

from .views import *

urlpatterns = [
    path('list', BlogListView.as_view()),
    path('by_category', ListPostsByCategoryView.as_view()),
    path('detail/<slug>', PostDetailView.as_view())
]
```

* Code `blog/admin.py`

```
from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Post)
admin.site.register(ViewCount)
```

* Create `Detail Post` in Postman > GET: `http://127.0.0.1:8000/api/blog/detail/<slug>`

![](https://i.imgur.com/48y92G2.png)
![](https://i.imgur.com/SVR2wYm.png)
![](https://i.imgur.com/z82FmS2.png)

* Code `blog/views.py` **(time: 2:06:56)**

```
class SearchBlogView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        search_term = request.query_params.get('s')
        matches = Post.objects.filter(
            Q(title__icontains=search_term) |
            Q(description__icontains=search_term) |
            Q(content__icontains=search_term) |
            Q(category__name__icontains=search_term)
        )

        serializer = PostListSerializer(matches, many=True)
        return Response({'filtered_posts': serializer.data}, status=status.HTTP_200_OK)
```

* Code `blog/urls.py`

```
from django.urls import path

from .views import *

urlpatterns = [
    path('list', BlogListView.as_view()),
    path('by_category', ListPostsByCategoryView.as_view()),
    path('detail/<slug>', PostDetailView.as_view())
    path('search', SearchBlogView.as_view())
]
```

* Create `Search Blog Posts` in Postman > GET `http://127.0.0.1:8000/api/blog/search?s=`

![](https://i.imgur.com/PKaMZfR.png)


* Code `blog/models.py` > `postbojects` (**time: 2:12:19**)
* Change to `Published` Posts
* Send Postman

![](https://i.imgur.com/GPI2PJZ.png)

* Create `.env`
* Run React App > `npm run start`
* Make `src/redux/actions/...`
    * `categories/categories.js`
    * `categories/types.js`
    * `blog/types.js`
    * `blog/blog.js`
* Make `src/redux/reducers/...`
    * `categories.js`
    * `blog.js`
* Code `Blog.jsx` (**time: 2:27:31**)
* Check Redux DevTool (**time: 2:47:17**)

![](https://i.imgur.com/N463MQo.png)

* Show information
* Code Navbar
* Make `components/blog/CategoriesHeader.js`
* Code Blog.jsx

```
//If categories exists return categories
<CategoriesHeader categories={categories&&categories}/> 
```

* Make file `tailwind_components/OverScrollX.jsx`
* Make file `containers/pages/Category.jsx`
* Code `src/Routes.js` (**time: 3:13:19**)

```
import Category...

<Route path="/category/:slug" element={<Category />} />
```

* [HeroIcons](https://heroicons.com/) (**3:17:08**)
* [BoxIcons](https://boxicons.com/)

* Code `src/Routes.js` 3:25:42 
* Make file `components/blog/BlogCardHorizontal.js`
* Make file `components/blog/BlogList.js`
* Code tailwind.config.js (**3:41:19**)

```
    boxShadow: {
      navbar: '0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)',
      card: "0px 14px 20px 0px rgba(0, 0, 0, 0.05)",
      "2xl": "0 0px 40px 0px rgba(0, 0, 0, 0.1)"
    },
```



* Download [moment.js](https://momentjs.com/) **(3:55:39)** > `npm i moment`

### Pagination (4:04:53)

* Make folder/file > `components/pagination/SmallSetPagination.js`
* Code `pagination.py` **(4:16:24)**
* Make 8 posts

### Responsive Blog Cards (4:18:40)

* Code `tailwind.config.js` **(4:23:29)**
* Make file `src/components/blog/BlogCardSearch.js`
* Make folder/file **(4:39:56)** > `src/components/blog/BlogList.js`


### View Post ([4:43:54](https://youtu.be/6XYsYfy7svM?t=17034))

* Make file `containers/pages/PostList.jsx`
* Code `src/Routes.js` > `<Route path="/blog/:slug" element={<PostDetail />} />`
* Make file  >`tailwind_components/ContentSection.jsx`
* Make file  >`tailwind_components/GetInTouch.jsx`
* Install [dompurify](https://www.npmjs.com/package/dompurify) > `npm i dompurify`
* **HACER [BUILD](https://youtu.be/6XYsYfy7svM?t=18178)** (SOLO SI ES NECESARIO)
    * Delete folder `build` and `static`

* Code `Blog_Personal/.env`

```
REACT_APP_API_URL='http://localhost:8000'
```

* Creates a build directory with a production build of your app > `npm run build`
* Activate env > 
    * Create > `python ./manage.py collectstatic`
* Run Server DJango > `python ./manage.py runserver`

![](https://i.imgur.com/vQYeTnZ.png)

## ~~Project 3: Blog_Avanzado~~ (SKIP THIS)

### Prepare env

* Make new folder `Blog_Avanzado`
* Copy all files and folders from `Blog_Personal` except `env`, `node_modules` and paste in the new folder `Blog_Avanzado`
* Make `virtualenv` in `Blog_Avanzado` > `python -m virtualenv env`
* Activate `.env` Virtual Environment
    * on **Linux/Mac** -> `source env/bin/activate`
    * on **Windows** -> `./env/Scripts/activate`
* Install `requirements.txt` > `pip install -r ./requirements.txt`
* Install `npm` > `npm i`

### Start project

* Install [djoser](https://djoser.readthedocs.io/en/latest/getting_started.html) > `pip install -U djoser`
    * Install > `pip install djangorestframework_simplejwt==4.8.0`
    * Install > `pip install social-auth-app-django==4.0.0`

* Code `core/settings.py`

```
THIRD_PARTY_APPS = [
    'corsheaders',
    'rest_framework',
    'djoser',
    'ckeditor',
    'ckeditor_uploader'
]
```

* Code `core/urls.py`

```
path('auth/', include('djoser.urls')),
path('auth/', include('djoser.urls.jwt')),
```


* Code `core/settings.py`

```
DJOSER = {
    'PASSWORD_RESET_CONFIRM_URL': '#/password/reset/confirm/{uid}/{token}',
    'USERNAME_RESET_CONFIRM_URL': '#/username/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL': '#/activate/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL': True,
    'SERIALIZERS': {},
}
```

* Install > `pip install djangorestframework-simplejwt`

```
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',
```

## Project 3: Blog_Avanzado
### Autentication JWT

![](https://i.imgur.com/EzYjR0U.png)

### Prepare env

* Make new folder `Blog_Avanzado`
* Copy all files and folders from `Blog_Personal` except `env`, `node_modules`, `package-lock` and `db.sqlite3` and paste in the new folder `Blog_Avanzado`
* Make `virtualenv` in `Blog_Avanzado` > `python -m virtualenv env`
* Activate `.env` Virtual Environment
    * on **Linux/Mac** -> `source env/bin/activate`
    * on **Windows** -> `./env/Scripts/activate`
* Code `requirements.txt`

```
django==3.2.16
django-environ==0.9.0
django-cors-headers==3.13.0
djangorestframework==3.14.0

argon2-cffi==21.3.0
djoser==2.1.0
djangorestframework-simplejwt==4.8.0
PyJWT==2.5.0
social-auth-app-django==4.0.0
social-auth-core==4.3.0

Pillow==9.3.0
django-storages==1.13.1
django-ckeditor==6.3.2
psycopg2==2.9.5
python-slugify==6.1.2
```

* Install `requirements.txt` > `pip install -r ./requirements.txt`
* Install `npm` > `npm i`
* Code `core/urls.py`

```
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/', include('djoser.social.urls')),
```

* Code `settings.py`

```
PASSWORD_HASHERS = []
SIMPLE_JWT = {...}
DJOSER = {...}
#AUTH_USER_MODEL = 'user.UserAccount'
```

* Create user model (5:36:47)
    * cd apps 
        * `python ..\manage.py startapp user`
        * cd ..
        * Code `apps.py` 

```
from django.apps import AppConfig


class UserConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.user'
```
* Code `user/models.py`
* Code `core/settings.py`> `AUTH_USER_MODEL = 'user.UserAccount'`
* Always you make a model you have to make Serializer (5:45:15) > `serializers.py`
* Code `admin.py` (5:48:11)
* Code `core/settings.py` (register `'apps.user'`)

```
PROJECT_APPS = [
    'apps.blog',
    'apps.category',
    'apps.user',
]
```

* Makemigrations > `python ./manage.py makemigrations`

```
Migrations for 'social_django':
  env\lib\site-packages\social_django\migrations\0011_auto_20230131_1928.py
    - Alter field id on association
    - Alter field id on code
    - Alter field id on nonce
    - Alter field id on partial
    - Alter field id on usersocialauth
Migrations for 'user':
  apps\user\migrations\0001_initial.py
    - Create model UserAccount
```

* Migrate > `python ./manage.py migrate`
    * Error [InconsistentMigrationHistory](https://stackoverflow.com/questions/44651760/django-db-migrations-exceptions-inconsistentmigrationhistory)     
* Create superuser > `python .\manage.py createsuperuser`

```
Email: admin@forkdao.com
First name: Fork
Last name: Dao
Password: ForkDao123
Password (again): ForkDao123
La contraseña es demasiado similar a la de email.
Bypass password validation and create user anyway? [y/N]: y
Superuser created successfully.
```

* Run Server DJango > `python ./manage.py runserver`
* Learn to register user using djoser (5:50:11)
* Run Admin DJango > `http://127.0.0.1:8000/admin/login/?next=/admin/`

**Postman**
* Post Register > `http://127.0.0.1:8000/auth/users/`

![](https://i.imgur.com/T79k74K.png)

```
{
    "email":"test@gmail.com",
    "first_name":"Test",
    "last_name":"test",
    "password":"123!qwer",
    "re_password":"123!qwer"
}
```

![](https://i.imgur.com/s6zk79Z.png)

* Code `core/setting.py` > `DOMAIN=os.environ.get('DOMAIN')`
* Code `core/.env` > `DOMAIN='localhots:3000'`

**Postman**

* Post Resend Activation > `http://127.0.0.1:8000/auth/users/resend_activation/`
* Body (raw):

```
{
    "email":"test@gmail.com"
}
```

Postman

* Post Activation > 
* Body (raw):

```
{
    "uid": [
        "Este campo es requerido."
    ],
    "token": [
        "Este campo es requerido."
    ]
}
```

![](https://i.imgur.com/TaJ1qxJ.png)

**Postman**

* Post Create JWT Token > `http://127.0.0.1:8000/auth/jwt/create/`
* Body (raw):

```
{
    "email":"test@gmail.com",
    "password":"123!qwer"
}
```

![](https://i.imgur.com/W4UqVv3.png)

Postman

* POST: JWT Refresh > `http://127.0.0.1:8000/auth/jwt/refresh/`
* Body (raw):

```
{
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3NzgwMDg1OSwianRpIjoiZWQ4MDIxOTRhZWFmNDAyMmE0MTNhNTEzYmI1YjNmNmEiLCJ1c2VyX2lkIjoyfQ.gj56V75lB9ObswiANAy3TNRQsg9co2rTcRSlMvYnvc8"
}
```

* SEND: New accest token

![](https://i.imgur.com/5Hi1WHz.png)

Postman

* POST: JWT Verify > `http://127.0.0.1:8000/auth/jwt/verify`
* Body (raw):

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1ODEzOTY0LCJqdGkiOiJkOGIwYzg0MjRlZWY0MGViOWU3ZGJlNmZhNTJkYjBiZiIsInVzZXJfaWQiOjJ9.NuoLmc1LVCN-nO1lQnAQLtt1IgWlD9Xky9VXrPM-5HQ"
}
```

![](https://i.imgur.com/KqofZAm.png)

* POST: Change Password > `http://127.0.0.1:8000/auth/users/set_password/`

![](https://i.imgur.com/7JmSOBB.png)

* POST: Reset Password > `http://127.0.0.1:8000/auth/users/reset_password/`
* Body (raw):

```
{
    "email":"test@gmail.com"
}
```

![](https://i.imgur.com/gtLvoMw.png)

* POST: Reset Password Confirm > `http://127.0.0.1:8000/auth/users/reset_password_confirm/`
* Body (raw):

```
{
    "uid":"Mg",
    "token":"biwtlo-d978debd63debb8e1ad21a7238c4cf98",
    "new_password":"qwer!123",
    "re_new_password":"qwer!123" 
}
```


**Next [class](https://www.youtube.com/watch?v=KO0VTwKuJo4)**
