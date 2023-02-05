# Curso Desarrollo FullStack con Django y React | Parte 1

### Project:

![](https://i.imgur.com/e4Fla3y.png)

### Resources

* Course: [Solo Python](https://youtu.be/6CUgF7cglT4)
* Learn:
    * [Git and GitHub for Beginners - Crash Course](https://youtu.be/RGOj5yH7evk)
    * [Aprende GIT ahora! curso completo GRATIS desde cero](https://youtu.be/VdGzPZ31ts8)
* More:
    * [ScriptVerse Academy](https://scriptverse.academy/)
    * [Web Icons](https://boxicons.com/)
    * [Flaticon](https://www.flaticon.es/)
    * [Headless UI](https://headlessui.com/)
    * [Web3Storage](https://web3.storage/)
    * Tailwind:
        * [Responsive Design](https://tailwindcss.com/docs/responsive-design)
        * [Tailwind UI kit](https://tailwinduikit.com/)
* Project GitHub:
    * main [project](https://github.com/apholdings/Desarrollo-Web-FullStack-con-Django-y-React)
        * ekeko [project](https://github.com/llekekoll/fullStack-Django-React/tree/main/1-Agencia_Marketing)
        * berty [project](https://github.com/fberty/Agencia_Marketing)
        * fran [project](https://github.com/l18630/full-stack)
        * tutecode [project](https://github.com/tutecode/FullStack-with-Django-and-React)
* Download from web
    * VSCode: [Download](https://code.visualstudio.com/)
    * GitHub Desktop: [Download](https://desktop.github.com/)
    * Python: [Download](https://www.python.org/downloads/)
    * NodeJS: [Download](https://nodejs.org/en/)
    * Git: [Download](https://git-scm.com/downloads)
* Download from Microsoft Store
    * Windows Terminal
    * PowerShell
    * Python
* Install Visual Studio Code and Extensions (CTRL+SHIFT+X)
    * Material Icon Them (Extensions)
    * Material Theme (Extensions)
    * ES7 React/Redux/GraphQL/React-Native snippets (Extensions)
    * React Native Tools (Extensions)
    * Tailwind CSS IntelliSense (Extensions) --> Replace Bootstrap
    * SQLite (Extensions)
    * Python (Extensions)
    * *Activate Auto save*
        * File > Auto save
    * Comment code javascript > html > `{/* */}`

#### :boom: **Import project from GitHub** :boom:

* GitHub Desktop > Clone repository from web
* Move to `Agencia_Marketing` > `cd Agencia_Marketing`
* If first time:
    * `pip install virtualenv`
* Create/Install Virtual Env > `python -m virtualenv env`
* Install libraries from `requirements.txt` >
    * `pip install -r ./requirements.txt`
* Install packages from `package.json` > `npm install`
* If you lose django **API** from `core/.env`
    * duplicate `core/settings.py` (you will use later)
    * delete `/core`
    * delete `manage.py`
    * Terminal: make project in directory `core` -> `django-admin startproject core .`
    * From `core/settings.py` copy your **API** after `SECRET_KEY = 'django-insecure-API`
    * **USE `setting.py` old**
    * Make file `core/.env`
* If you have the API
    * Make file `core/.env`

```
SECRET_KEY='API'
DEBUG=True
DATABASE_URL=''
ALLOWED_HOSTS_DEV='*'
ALLOWED_HOSTS_DEPLOY='murkiva.com', 'www.murkiva.com'
CORS_ORIGIN_WHITELIST_DEV='http://localhost:3000'
CORS_ORIGIN_WHITELIST_DEPLOY='https://boomslag.com'
CSRF_TRUSTED_ORIGINS_DEV='http://localhost:3000'
CSRF_TRUSTED_ORIGINS_DEPLOY='https://boomslag.com'
```

* Makemigrations > `python ./manage.py makemigrations`
* Migración de base de datos 
   * On **Windows** > `python .\manage.py migrate`
   * On **Linux** > `python ./manage.py migrate`
* Run Server DJango > `python ./manage.py runserver`

![](https://i.imgur.com/hGs1bvo.png)

* Run React project > `npm run start`
* *Congrats you have imported your project!* :fire: :fire: :fire:

#### :star: **Activate `.env` on Terminal (for later)** :star:
* cd `Agencia_Marketing`
> * If first time:
>     * `pip install virtualenv`
* Activate `.env` Virtual Environment
     * on **Linux/Mac** -> `source env/bin/activate`
     * on **Windows** -> `./env/Scripts/activate`

# Introducción

## Que es una Pagina Web

![](https://i.imgur.com/vwwOP0d.png)

## Que es Django

![](https://i.imgur.com/7Y9Ldib.png)

## Bases de Datos

![](https://i.imgur.com/ZDnbdNC.png)

## Que es un API y Django Rest Framework

![](https://i.imgur.com/qpl4CIj.png)



### Commands in Terminal (PowerShell)

* `clear` or `CTRL+L`: clean terminal
* `ls`: list directory
* `pwd`: print working directory (path)
* `cd`: change directory
* `cd ..`: change to previous directory
* `mkdir`: make directory


# Agencia de Marketing Directory

* Create folder `Agencia_Marketing` -> `mkdir Agencia_Marketing`
* Move to `Agencia_Marketing` -> `cd Agencia_Marketing`
* Create/Install Virtual Env -> `python -m virtualenv env`
    * **Error**: *"No module..."* > `pip install virtualenv`
    * And try again
* Activate "env" on **Linux/Mac** -> `source env/bin/activate`
* Activate "env" on **Windows** -> `./env/Scripts/activate`
* Install Django -> `pip install django==3.2.16`
    * Chech version LTS: https://www.djangoproject.com/download/

![](https://i.imgur.com/svHr0j6.png)

* Create all project in directory "core" -> `django-admin startproject core .`



#  WSGI vs ASGI

![](https://i.imgur.com/d6myTOt.png)

WSGI hace request y response
primero tiene q terminar el request y despues el response

ASGI hace lo mismo pero si tarda mucho pasa al otro request

Workers: hacer varios request por segundo 3 -> 13 -> 26

nCPU X 2 + 1

GUnicorn

WSGI para paginas web

urls.py: contiene urls del sitio

## Install libraries

settings.py: configurarlo instalando paquetes

* Create `requirements.txt` on folder "env"

```
django==3.2.16
django-environ==0.9.0
django-cors-headers==3.13.0
djangorestframework==3.14.0
Pillow==9.3.0
django-storages==1.13.1
django-ckeditor==6.3.2
psycopg2==2.9.5
```

* Install "requirements.txt" -> `pip install -r ./requirements.txt`
    * If you cant install it `cd env`
* Install [psycopg2 on Linux](https://stackoverflow.com/questions/5420789/how-to-install-psycopg2-with-pip-on-python)
    * Option 1:`pip install psycopg2-binary`
    * Option 2: `sudo apt install libpq-dev python3-dev`
* Create core/**.env** -> for passwords
* Create Agencia_Marketing/**.gitignore** -> ignore this files
* Go to gitignore.io

![](https://i.imgur.com/kZLGtPU.png)

* Copy code and paste in "Agencia_Marketing/**.gitignore**"
* Comment `# build/`

![](https://i.imgur.com/XUeeQiN.png)

* Create new branch from
    * "staging"

* **SECURE SECRET_KEY from SETTINGS.PY in .ENV!!!!** [YOTUBE](https://youtu.be/6CUgF7cglT4?t=5015)



## Settings

* CKEditor -> https://django-ckeditor.readthedocs.io/en/latest/


**DATABASE**
* Migración de base de datos **WINDOWS**-> `python .\manage.py migrate`
* Migración de base de datos **LINUX**-> `python ./manage.py migrate`

**Open Database**
CTRL+SHIFT+P -> sqlite -> Open Database

![](https://i.imgur.com/bNyxJ2U.png)

```
DEBUG=True
DATABASE_URL=''
ALLOWED_HOSTS_DEV='*'
ALLOWED_HOSTS_DEPLOY='murkiva.com', 'www.murkiva.com'
CORS_ORIGIN_WHITELIST_DEV='http://localhost:3000'
CORS_ORIGIN_WHITELIST_DEPLOY='https://boomslag.com'
CSRF_TRUSTED_ORIGINS_DEV='http://localhost:3000'
CSRF_TRUSTED_ORIGINS_DEPLOY='https://boomslag.com'
```

## Proyecto React

![](https://i.imgur.com/OgtdaGb.png)

* Other Terminal
    * Move to Desktop -> `cd Desktop`
    * Create new React App -> `npx create-react-app agencia_marketing`
    * `cd agencia_marketing`
    * Run App React -> `npm run start`

* Another Terminal
    * (ENV) Python Server **Windows** -> `python .\manage.py runserver`
    * (ENV) Python Server **LINUX**-> `python ./manage.py runserver`

* Copy '`public`', '`src`', '`package`' from React and paste into Agencia_Marketing DJango

**Another Terminal**
* Go to `Agencia_Marketing` DJango -> `cd Agencia_Marketing`
* Install ENV -> `npm i` -> new File '`package-lock.json`' and Folder '`node_modules`'


### Build (directory)

**Terminal**

* Despliegue en DJango Server `npm run build` --> build de react que va a llamar al index.html

App create on Server DJango

* Nuestra carpeta REACT  --> `[os.path.join(BASE_DIR, 'build')],`

public > index.hmtl is the Web Page

**Terminal (env)**

* (ENV) --> `python ./manage.py collectstatic` archivos css, javascript, media para poder ejecutar el codigo python (directory static)

nuestros templates se ubican en `./build`
A donde a punta el ./build

**core/url.py**
```
# r = read
# TemplateView --> renderizado

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
```

* Run Server DJango -> `python ./manage.py runserver`


> Objetivo meter la app de react en el server DJANGO

#### Regex

* regex101.com
* deepl.com

## Estructura React

Directory `src` se encuentra todo sobre REACT

**Terminal**
* Change directory -> `cd .../Agencia_Marketing`
* Run React App (localhost/...) -> `npm run start`
* VSCode `Agencia_Marketing`
    * Modify `src/App.js`
        * Delete `imports`
    * Delete files 
        * `src/App.css`,
        * `src/App.test.js`,
        * `src/logo.svg`,
        * `src/setupTests.js`,
        * `src/reportWebVitals.js`
    * Comment or delete from `src/index.js` --> `// reportWebVitals();`
    * Create folders
        * `src/assets`,
            * `src/assets/img`,
            * `src/assets/video`
        * `src/styles`
    * Create folders 

    * Move `src/index.css` to `src/styles`
    * Add import to `index.js` -> `import './styles/index.css';`
    * Create folders
        * `src/containers`
            * `src/containers/errors`
            * `src/containers/pages`
        * `src/components`
        * `src/hocs`
        * `src/redux`
            * `src/redux/actions`
            * `src/redux/reducers`

#### Tailwind CSS ([web](https://tailwindcss.com/docs/guides/create-react-app))

- [Tailwind UI](https://tailwindui.com/)

### 2. Install Tailwind CSS ([Create React App](https://tailwindcss.com/docs/guides/create-react-app))

![](https://i.imgur.com/v1Q3IKx.png)

* Move to `cd .\Agencia_Marketing>`
* Install -> `npm install -D tailwindcss postcss autoprefixer`
* Installed

```
up to date, audited 1466 packages in 5s

226 packages are looking for funding   
  run `npm fund` for details

6 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

* Dependencies from `tailwindcss` on `package.json`

![](https://i.imgur.com/Z72AUIN.png)


* Install `npx tailwindcss init -p`

![](https://i.imgur.com/GPYULgW.png)

### 3. Configure your template paths

```
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
```

![](https://i.imgur.com/1U8vw9r.png)

![](https://i.imgur.com/9FpLGVO.png)

### 4. Add the Tailwind directives to your CSS

![](https://i.imgur.com/pjrjfBe.png)

![](https://i.imgur.com/goR0Rbn.png)

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

* Create `"styles"` folder for fonts, etc
    * `"./src/styles/index.css"`
    * Change import `"index.js"`

![](https://i.imgur.com/4J7siJo.png)

### 5. Start your build process

![](https://i.imgur.com/PkAYzSQ.png)

* Run React App -> `npm run start`



```
function App() {
  return (
    <div className="text-gray-500 underline">
      Hola mundo
    </div>
  );
}

export default App;
```

**Error Linux**

```
 opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
```

* [Solution](https://roytuts.com/how-to-fix-err_ossl_evp_unsupported-in-react-js-application/)
* [Solution Tailwind CSS](https://stackoverflow.com/questions/64557697/tailwindcss-not-working-in-create-react-app) --> `npm i react-scripts@latest`

**Routes**

* Install Routes -> `npm i react-router-dom`
* Install Redux -> `npm i redux redux-thunk react-redux redux-devtools-extension react-router-dom axios` 
    * nos permite hacer llamadas a la API con Axios
    * Redux guarda estados de las variables
* Intall Google Extension -> [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)
* Install TypeScript -> `npm i typescript`
* Create file `Agencia_Marketing/tsconfig.json` -> configuracion de typescript de nuestro proyecto -> [video](https://youtu.be/6CUgF7cglT4?t=8096)
* Run React App to check if works -> `npm run start`


## Rutas y Redux

* What is Redux? -> [video](https://youtu.be/6CUgF7cglT4?t=8201)
* Create file `src/reducers/index.js`
    * Insert code
* Crete file `containers/pages/Home.jsx`
    * Insert code
* Create file `containers/errors/Error404.jsx`
* `src/App.js` manejamos las rutas
* Create file `src/store.js`

## Layout ([video](https://youtu.be/6CUgF7cglT4?t=9010))

![](https://i.imgur.com/ex6xO0x.png)

![](https://i.imgur.com/DUMiIcj.png)

* Create folder
    * `src/hocs/layouts`
        * Create file `Layout.js`
    * `src/hocs/routes`
    * `src/components/navigation`
        * Create file `Navbar.js`
        * Create file `Footer.js`
    * `agencia_marketing/tailwind_components`
        * `Footer.jsx`
        * `CardHeadingLeftRight.jsx`

* Install Color Picker (Google Extension)

logo letras blancas y fondo negro
![](https://i.imgur.com/vDQUvaY.png)


logo letras negras y fondo transparente
![](https://i.imgur.com/7juEJkr.png)


*Codigo del amarillo de la F del logo #FFC000

* Download [Gif](https://media.tenor.com/7FfwRkct_tIAAAAi/charging-loading.gif) and save it "`/src/assets/img/loading-dots.gif`"
* [How can I change the underline color in tailwind css
](https://stackoverflow.com/questions/61303798/how-can-i-change-the-underline-color-in-tailwind-css)

![](https://i.imgur.com/pfn7ww6.png)


![](https://i.imgur.com/i2nGkW4.png)

![](https://i.imgur.com/C6VZ2gP.gif)

![](https://i.imgur.com/FghIcxW.gif)


# Vistas

*

# Mejorando Frontend

* Install [react-spinners](https://www.npmjs.com/package/react-spinners) -> `npm i react-spinners`
* Create files
    * `tailwind_components/ButtonWithLogo.jsx`
    * `tailwind_components/HomeHeader.jsx`

* Create folder and file
    * `src/components/home/Header.js`

* Install [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter) -> `npm i react-simple-typewriter`
    * `import { Typewriter } from 'react-simple-typewriter'` into `Header.js`

### Webkit Scrollbar ([video](https://youtu.be/6CUgF7cglT4?t=12973))
*  Webkit scrollbar ([Link](https://elcssar.com/css/webkit-scrollbar))


* Install -> `npm i @heroicons/react @headlessui/react @tailwindcss/forms  @tailwindcss/typography @tailwindcss/forms @tailwindcss/line-clamp @tailwindcss/aspect-ratio`

# Reto

Intentar hacer las paginas solos

## Pagina de Casos

* [Video](https://youtu.be/6CUgF7cglT4?t=15109) Information: [ScriptVerse Academy](https://scriptverse.academy/)
    * [Add, Remove & Toggle CSS Classes in JavaScript (without jQuery)](https://scriptverse.academy/tutorials/js-add-remove-class.html)
* Tailwind web:
    * [Line Height](https://tailwindcss.com/docs/line-height)
    * [Object Fit](https://tailwindcss.com/docs/object-fit)
* Install [@itseasy21/react-elastic-carousel
](https://www.npmjs.com/package/react-elastic-carousel) -> `npm i @itseasy21/react-elastic-carousel`




## Refinando el Sitio

* Install [Headless UI](https://headlessui.com/react/popover) > `npm install @headlessui/react`


## SEO

* FAVICON FORKDAO (web3storage) > [link](https://bafkreibng3qacykfu3fuztzrov3czfzr566vqoqu7meaki2qexcgpkjtyi.ipfs.w3s.link/?filename=fork-favicon.png)
* Install [react-helmet](https://www.npmjs.com/package/react-helmet) > `npm i react-helmet`
* Install [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) > `npm i react-helmet-async`

## Framer Motion

Animate transition page

* Install [framer-motion](https://www.npmjs.com/package/framer-motion) > npm i framer-motion
