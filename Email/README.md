# Curso Desarrollo FullStack con Django y React | Parte 3

### Resources:

* Course: [Solo Python](https://youtu.be/KO0VTwKuJo4)
* Learn:
    * [Git and GitHub for Beginners - Crash Course](https://youtu.be/RGOj5yH7evk)
    * [Aprende GIT ahora! curso completo GRATIS desde cero](https://youtu.be/VdGzPZ31ts8)
    * [JWT en 10 minutos - ¿Qué es JWT? ¿Para que sirve? ¿Cuando usarlo? ¿Cómo se usa?](https://www.youtube.com/watch?v=tWQobKFQLG0)
* More:
    * Install [Page Ruler](https://chrome.google.com/webstore/detail/page-ruler/jcbmcnpepaddcedmjdcmhbekjhbfnlff/related?hl=es)
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

#### Terminal 1°:
> 1. `cd C:\Users\Matías\Documents\GitHub\FullStack-with-Django-and-React\Blog_Avanzado\`
> 2. `./env/Scripts/activate`
> 3. `python ./manage.py runserver`

## Blog_Avanzado_Dashboard

* Make folder `Blog_Avanzado_Dashboard` **(sin uso)**
* Create React App > `npx create-react-app dashboard`

```
# 👇️ delete node_modules and package-lock.json (macOS/Linux)
rm -rf node_modules
rm -f package-lock.json
rm -f yarn.lock

# 👇️ delete node_modules and package-lock.json (Windows)
rd "node_modules" /s /q
del package-lock.json
del -f yarn.lock

# 👇️ clean npm cache
npm cache clean --force
```

* Copy `package.json` from `Blog_Avanzado`
* Install Node > `npm i`
* Install (12:14) > `npm i react-router-dom react-redux`
* Make `dashboard/.env` (15:00)

```
PORT=3001
REACT_APP_API_URL='http://localhost:8000'
```

* Make `components/tailwind/SidebarLayout.jsx`
* Code `Layout.js`
* Code `Sidebar.js` (25:00)
* Make `pages/blog/Blog.jsx` (26:24)
* Code `Routes.js` > Blog
* Code `Sidebar.js` (28:43) > `uselocation()`
* Make  `pages/blog/Dashboard.jsx`
* Code `Routes.js` > Dashboard

## Login (30:43)

* Make `components/tailwind/Login.jsx`
* Code `Home.jsx`
* Make redux/actions/auth/
    * types.js
    * auth.js
* Make redux/reducers/auth.js

### Reset Password (53:42)

```
        if (res.status === 204) {
            dispatch({
                type: RESET_PASSWORD_SUCCESS
            });
```

![](https://i.imgur.com/KLN95gD.png)



### Reset Password Confirm (55:18)


### Load User (57:58)



* Name Header: `JWT` is from `core/settings.py` > `SIMPLE_JWT = {'AUTH_HEADER_TYPES: ('JWT', )'...}`

![](https://i.imgur.com/lnnEWF7.png)

![](https://i.imgur.com/2e5FHCB.png)

* 'Authorization': `JWT ${localStorage.getItem('access')}`

![](https://i.imgur.com/eMz42G5.png)

![](https://i.imgur.com/DirL0i3.png)

* Code `index.js`
* Code `core/settings.py` from `Blog_Avanzado`

```
# De donde pueden venir los llamados quien puede acceder a nuestra informacion
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'http://localhost:3001'
]

CSRF_TRUSTED_ORIGINS = [
    'http://localhost:3000',
    'http://localhost:3001'
]
```


```
# https://www.django-rest-framework.org/api-guide/permissions/
# https://django-rest-framework-simplejwt.readthedocs.io/en/latest/getting_started.html
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication'
    ],
}
```

* Code `Layout.js`
* Code `public/index.html` (1:10:00)
* Code `Home.js`
* Code `Layout.js` (1:17:00) > `Logout`


### Reset Password (1:18:00)

* Make `containers/auth/ResetPassword.jsx`
* Code `Home.jsx` > `Link /forgot_password`
* Code `Routes.js`
* Make `ResetPasswordConfirm.jsx` (1:22:00)
* Code `Routes.js`

NO FUNCIONO EL RESET PASSWORD

### Blog (1:28:00)

* Code `Blog_Avanzado/apps/blog/models.py` > Add `author` to blogs

#### :point_right: **REMEMBER!!!** :point_left:
> **ALWAYS YOU CHANGE class `models.py` you have to make migrations**
> 1. Makemigrations > `python ./manage.py makemigrations`
> 2. Migrate > `python ./manage.py migrate`

![](https://i.imgur.com/hpDyBAX.png)

* Run Server DJango > `python ./manage.py runserver`
* Run Admin DJango > `http://127.0.0.1:8000/admin/login/?next=/admin/`
    * If you have Error time zone utc-3> `TIME_ZONE = 'America/Buenos_Aires'`
* Code `Blog_Avanzado/apps/blog/views.py` (1:30:46) > Add `AuthorBlogListView` to blogs
* Code `Blog_Avanzado/apps/blog/urls.py`
* Code `Blog_Avanzado/src/redux/actions/blog/types.py`
* Code `Blog_Avanzado/src/redux/actions/blog/blog.py`
* Code `dashboard/src/redux/actions/blog/types.py`
* Code `dashboard/src/redux/actions/blog/blog.py`
* Code `dashboard/src/redux/reducers/blog.py`
* Code `dashboard\src\containers\pages\blog\Blog.jsx`
* Make `components/tailwind/StackedLists.jsx`
* Copy from Blog_Avanzado:
    * `src/components/blog/BlogList.js`
    * components/pagination
* 

### Edit post ([video](https://youtu.be/KO0VTwKuJo4?t=6531))

* useParams() > [info](https://reactrouter.com/en/main/hooks/use-params)

* formData - setFormData (2:11:39)

```
    // Process data from form
    const [formData, setFormData] = useState({
        title: '',
        new_slug: '',
        description: '',
        category: '',
        time_read: '',
    })

    const {
        title,
        new_slug,
        description,
        category,
        time_read,
    } = formData
    
    // Set data on "formData"
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
```

* `[e.target.name]`

![](https://i.imgur.com/QkS9Tu9.png)

* `e.target.value`

![](https://i.imgur.com/F7dJkO4.png)

* Code `EditPostBlogView` on `Blog_Avanzado/apps/blog/views.py` ([video](https://youtu.be/KO0VTwKuJo4?t=8009))
* Make `Blog_Avanzado/apps/blog/permissions.py`
[video](https://youtu.be/KO0VTwKuJo4?t=8030)
* Edit images with Django ([video](https://youtu.be/KO0VTwKuJo4?t=8158)) > `from rest_framework.parsers import FormParser, MultiPartParser`
* Code `Blog_Avanzado/apps/blog/urls.py` > `path('edit', EditBlogPostView.as_view()),`
* Code `EditPost.jsx` ([video](https://youtu.be/KO0VTwKuJo4?t=8311))

```
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };
```

![](https://i.imgur.com/hBoMQ9K.png)

* FetchData - request ([video](https://youtu.be/KO0VTwKuJo4?t=8375))

```

```

#### Slug


* Code `EditPost.jsx`

![](https://i.imgur.com/SnAWmtR.png)
![](https://i.imgur.com/qW2RSjh.png)

* Code `views.py`

![](https://i.imgur.com/jxBAchD.png)


* Install [slugify](https://pypi.org/project/python-slugify/) ([video](https://youtu.be/KO0VTwKuJo4?t=9146)) > `pip install python-slugify`
    * And import into `views.py` > `from slugify import slugify`
> Slugify is the process of converting a string or text into a URL-friendly format that can be used as a part of a URL. The resulting string is typically all lowercase and contains only letters, numbers, and hyphens, with spaces and special characters replaced by hyphens or removed entirely.

> Slugify is commonly used in web development to create clean, readable URLs that are easy for users to remember and share, and that are more search engine friendly. For example, if you have a blog post titled "10 Tips for Writing Better Code", slugifying the title might result in a URL like "/10-tips-for-writing-better-code", which is easier to read and remember than a URL that contains special characters or random strings of letters and numbers.

* Add to `requirements.txt`

![](https://i.imgur.com/ZfFTFVC.png)

* Code EditPost.jsx > `si new_slug !== '' -> fue actualizado`

![](https://i.imgur.com/Ubcl0hy.png)


* To refresh webpage and go back

```
const navigate = useNavigate()
```

![](https://i.imgur.com/Tn8CKRa.png)

* Code EditBlog.jsx ([video](https://youtu.be/KO0VTwKuJo4?t=9449))> isAuthenticated

![](https://i.imgur.com/6jXCTce.png)

#### Description ([video](https://youtu.be/KO0VTwKuJo4?t=9564))

...

#### Content


* Code ([video](https://youtu.be/KO0VTwKuJo4?t=9815))> 

```
<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
```

> In a React component, the code <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} /> is used to render the contents of the post.content property as HTML in a paragraph element.
> 
> The dangerouslySetInnerHTML prop is used to indicate that the content being passed should be treated as HTML and rendered as such. It is called "dangerous" because it can potentially allow a cross-site scripting (XSS) attack if the content is not properly sanitized before rendering.
> 
> In this particular code, the DOMPurify library is used to sanitize the post.content before rendering it in the component. The __html key is used to specify the HTML content that needs to be rendered.
> 
> Overall, this code allows for rendering HTML content that is stored in a variable, while ensuring that any potentially malicious content is sanitized and not executed as JavaScript code.

* Preview

![](https://i.imgur.com/oznzhHf.png)

* [CKEditor](https://ckeditor.com/docs/ckeditor5/latest/installation/frameworks/react.html) ([video](https://youtu.be/KO0VTwKuJo4?t=9939))
    * Install > `npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic`

![](https://i.imgur.com/kGajjIu.png)

![](https://i.imgur.com/WrZpWnM.png)

* CHEQUEAR ESTO SI QUIERES MEJORAR EL CKEDITOR ([video](https://youtu.be/KO0VTwKuJo4?t=10329))

![](https://i.imgur.com/ryKRvCW.png)


#### Category



#### Thumbnail ([video](https://youtu.be/KO0VTwKuJo4?t=12612))

#### Publish/Draft


* Code `Blog_Avanzado/apps/blog/views.py` ([video](https://youtu.be/KO0VTwKuJo4?t=14388))

![](https://i.imgur.com/oaRdjDa.png)

![](https://i.imgur.com/5hrRRZA.png)

![](https://i.imgur.com/RlgGgoL.png)


* Code `Blog_Avanzado/apps/blog/urls.py` ([video](https://youtu.be/KO0VTwKuJo4?t=14404))

![](https://i.imgur.com/xISWkSx.png)

* Code `dashboard/src/components/blog/BlogCardHorizontal.js` ([video](https://youtu.be/KO0VTwKuJo4?t=14553))


* Code `Blog_Avanzado/apps/blog/serializers.py`

* Code `Blog_Avanzado/apps/blog/models.py`

![](https://i.imgur.com/IjNKwjZ.png)

* Code `dashboard/.env`

```
PORT=3001
REACT_APP_API_URL='http://localhost:8000'
REACT_APP_URL='http://localhost:3000'
```

* from `dashboard/.../EditPost.jsx`
    * `target="_blank"` ([info](https://www.masterseosem.com/diccionario-seo-glosario-de-terminos-de-marketing-digital/target_blank))

![](https://i.imgur.com/4FSTdgz.png)

#### Delete post ([video](https://youtu.be/KO0VTwKuJo4?t=15398))

* Code `Blog_Avanzado/apps/blog/views.py`

![](https://i.imgur.com/UkoABWJ.png)

* Code `Blog_Avanzado/apps/blog/urls.py`

![](https://i.imgur.com/kVVZH9T.png)

#### Create post ([video](https://youtu.be/KO0VTwKuJo4?t=15824))

* Code `Blog_Avanzado/apps/blog/models.py`

![](https://i.imgur.com/r0PiAff.png)

#### :point_right: **REMEMBER!!!** :point_left:
> **ALWAYS YOU CHANGE class `models.py` you have to make migrations**
> 1. Makemigrations > `python ./manage.py makemigrations`
> 2. Migrate > `python ./manage.py migrate`

* Code `Blog_Avanzado/apps/blog/views.py`

![](https://i.imgur.com/FPq93ze.png)

* Code `Blog_Avanzado/apps/blog/urls.py`

![](https://i.imgur.com/cWNZK05.png)


* Code `Blog_Avanzado/apps/blog/permissions.py`

![](https://i.imgur.com/r5XCWJi.png)

* Code `dashboard/Blog.jsx`

![](https://i.imgur.com/yEDUYSL.png)

* Make `dashboard/tailwind/Avatar.jsx`
* Code dashboard/Layour.js
    * public/index.html
    * Blog.jsx

---

# Email Marketing ([video](https://youtu.be/KO0VTwKuJo4?t=18087))

* Make new folder `Email`
    * Copy `Blog_Avanzado` except `.env`, `node_modules` and `package-lock.json`.
    * Copy `dashboard` except `node_modules` and `package-lock.json`.

#### Terminal dashboard:

* Change directory > `cd Email/dashboard`
* Install **NPM** > `npm i`
* Run React App > `npm run start`

#### Terminal agencia:

* Change directory > `cd Email/agencia`
* Make virtualenv > `python -m virtualenv env`
* Activate `.env` Virtual Environment
    * on **Linux/Mac** -> `source env/bin/activate`
    * on **Windows** -> `./env/Scripts/activate`
* Install `requirements.txt` > `pip install -r ./requirements.txt`
* Deactivate `.env` > `deactivate`
    * Install `npm` > `npm i`

##### Terminal 1° agencia: Django (localhost:8000)

* Activate `.env` Virtual Environment
    * on **Linux/Mac** -> `source env/bin/activate`
    * on **Windows** -> `./env/Scripts/activate`
* Run Server Django > `python ./manage.py runserver`

##### Terminal 2° agencia: React (localhost:3000)

* Run React App > `npm run start`

##### Terminal 3° dashboard: React (localhost:3001)

* Run React App > `npm run start`

---

* Code `container/pages/Contact.jsx` ([video](https://youtu.be/KO0VTwKuJo4?t=18457))
* Headless UI ([switch](https://headlessui.com/react/switch))
* Code `formData`

![](https://i.imgur.com/lCvTOUP.png)

##### Terminal 1° agencia: Django (localhost:8000)

* Activate `.env` Virtual Environment
    * on **Linux/Mac** -> `source env/bin/activate`
    * on **Windows** -> `./env/Scripts/activate`
* Change directory > `cd Email/agencia/apps`
* Create app conctact > `python ..\manage.py startapp contact`
* Change directory > `cd ..`

---

![](https://i.imgur.com/A5dbMTv.png)


* Code `agencia\apps\contacts.py` > `name = 'apps.contacts'`

![](https://i.imgur.com/HYx8hWG.png)

* Code `agencia\core\settings.py`

![](https://i.imgur.com/gMeq7f7.png)

* Code `agencia\core\urls.py`

![](https://i.imgur.com/w0j1Kge.png)

* Make new `agencia\apps\contacts\urls.py`

![](https://i.imgur.com/NMLMdkV.png)

> Save info in database so we have to create a `model.py`

* Code `agencia\apps\contacts\models.py`

![](https://i.imgur.com/JLm7muG.png)

#### :point_right: **REMEMBER!!!** :point_left:
> **ALWAYS YOU CHANGE class `models.py` you have to make migrations**
> 1. Makemigrations > `python ./manage.py makemigrations`
> 2. Migrate > `python ./manage.py migrate`

* Make new `agencia\apps\serializers.py`

![](https://i.imgur.com/s5ptDXb.png)

* Install [requests](https://pypi.org/project/requests/) > `pip install requests`
    * Add to `requirements.txt`

![](https://i.imgur.com/Xu6xZG5.png)

* Code `agencia\apps\contacts\views.py` > `class ContactCreateView(APIView):`

![](https://i.imgur.com/2uor3Lf.png)

* Code `agencia\apps\contacts\urls.py`

![](https://i.imgur.com/oSeNHmN.png)


### Email marketing ([video](https://youtu.be/KO0VTwKuJo4?t=21141))

* Log in [ActiveCampaing](https://www.activecampaign.com/es)
    * Get API

![](https://i.imgur.com/0Yv8wBr.png)

* [Documentation](https://developers.activecampaign.com/reference/overview)

![](https://i.imgur.com/6hbSG9L.png)
![](https://i.imgur.com/fMIBKvU.png)
![](https://i.imgur.com/jUbMvLc.png)
![](https://i.imgur.com/MUjMqAB.png)
![](https://i.imgur.com/GXYkDM2.png)


* Code `core\.env`

![](https://i.imgur.com/XYdXgxP.png)

* Code `agencia\apps\contacts\views.py` ([video](https://youtu.be/KO0VTwKuJo4?t=21681)) > `class OptInView(APIView):`

```
                       _____________
                      |             |
                      |  OptInView  |
                      |_____________|
                            |
                            |
                            V
                  _________________
                 |                 |
                 |  post() method  |
                 |_________________|
                            |
                            V
              _________________________
             |                         |
             | Fetch data from request |
             |_________________________|
                            |
                            V
                   ___________________
                  |                   |
                  |  Create/Update    |
                  |   Contact API     |
                  |___________________|
                            |
                            V
                 _______________________
                |                       |
                |  Check response status|
                |_______________________|
                            |
                            V
                 _______________________
                |                       |
                |   Retrieve Contact ID |
                |_______________________|
                            |
                            V
                 _______________________
                |                       |
                |   Add Tag to Contact  |
                |_______________________|
                            |
                            V
                 _______________________
                |                       |
                |  Add Contact to Lists |
                |_______________________|
                            |
                            V
                 _______________________
                |                       |
                | Return success message|
                |_______________________|

```

The OptInView class is an APIView subclass that processes POST requests. It has a post() method that does the following:

1. Fetches data from the request.
2. Uses the ActiveCampaign API to create or update a contact with the given email address.
3. Checks the response status to make sure the contact was created or updated successfully.
4. Retrieves the contact ID from the response.
5. Uses the ActiveCampaign API to add a tag to the contact.
6. Uses the ActiveCampaign API to add the contact to a master email list and a demo email list.
7. Returns a success message if all of the above steps were successful. If any step fails, it returns an error message with a 500 HTTP status code.

* Code `agencia\apps\contacts\urls.py`

![](https://i.imgur.com/NWPy99c.png)

* Make new `components/tailwind/OptIn.jsx`
* Make new `containers/pages/OptIn.jsx`
* Code `src/Routes.js`

![](https://i.imgur.com/AUZMKC7.png)

* Code `core/settings.py`

![](https://i.imgur.com/Kn1fe7w.png)

* Make new `containers/pages/OptInCTA.jsx`
* Code `src/Routes.js`

![](https://i.imgur.com/GfkoUnM.png)

* Code `navigation\NavBar.js` > Add `Container`



![](https://i.imgur.com/dLwmpV3.png)

* Code `tailwind.config.js`

![](https://i.imgur.com/MYE9Cdv.png)

* Code `src/Routes.js` 
* Make new `src/containers/pages/cases/Ecommerce.jsx`
* Code `components/CasesList.js`
* Make new  `components/cases/ecommerce/Header.js`


## Servicios ([video](https://youtu.be/KO0VTwKuJo4?t=25173))

* Make `Email\agencia\src\containers\pages\services\development\JavascriptDev.jsx` 
* Code `Routes.js` > `<Route path="/servicios/javascript" element={<JavascriptDev />} />`
* Make `Email\agencia\src\components\services\javascriptdev\`
    * `Features.js`
    * `Header.js`
    * `TechStack.js`
    * `OurClients.js`
* Make `Email\agencia\src\components\Contact.js`

---

## Deploy ([video](https://youtu.be/KO0VTwKuJo4?t=26741))

![](https://i.imgur.com/m0wu0p9.png)

* Code `requirements.txt`

```
gunicorn==20.1.0
whitenoise==6.2.0

boto3==1.24.92
django-storages==1.13.1
```

* Install `requirements.txt` > `pip install -r ./requirements.txt`

### Whitenoise (images)

* Code `core\settings.py`

![](https://i.imgur.com/oI8ek5j.png)

### Gunicorn

* Gunicorn [info](https://flask-es.readthedocs.io/deploying/gunicorn/#:~:text=Gunicorn%20es%20un%20servidor%20WSGI,con%20las%20plataformas%20de%20alojamiento.)

### PostgreSQL

* Make an account in [Render](https://render.com/)

![](https://i.imgur.com/Hc7LsIQ.png)

![](https://i.imgur.com/5sAb08R.png)

#### :point_right: **REMEMBER!!!** :point_left:
> **ALWAYS YOU CHANGE class `models.py` you have to make migrations**
> 1. Makemigrations > `python ./manage.py makemigrations`
> 2. Migrate > `python ./manage.py migrate`

### AWS S3 ([video](https://youtu.be/KO0VTwKuJo4?t=27104))

* Create account
* Copy API


---


#  :fire: :fire:

**HASTA [ACA](https://youtu.be/KO0VTwKuJo4?t=8865) LLEGAMOS PERROOOOOOO:**

