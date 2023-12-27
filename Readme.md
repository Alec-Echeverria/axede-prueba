# APLICACIÓN AXEDE

Este repositorio contiene el código de una aplicación Django que define tres modelos: `Hotel`, `Habitación`, y `AsignacionHabitacion`. Estos modelos representan Hotel, Habitación y la relación entre ellos.

- El modelo `Hotel` incluye el campo de ciudad.

- El modelo `Habitación` incluye campos como tipo, disponibilidad, capacidad maxima y hotel asociado (FK). También tiene una relación Many-to-One con el modelo `Hotel`.

- El modelo `AsignacionHabitacion` representa la relación entre hotel y habitaciones, donde se generan la cantida de habiatciones de ciertas caracteristicas pertenecientes a unh hotel.

Adicionalmente, el código proporciona serializadores para convertir los objetos de los modelos en formato JSON y vistas basadas en clases para realizar operaciones CRUD (En el momento solo READ) en los modelos a través de una REST API implementada con Django Rest Framework. Esta REST API es consumida por una aplicación desarrollada en Vite.js empleando React.

## Índice

1. [¿Cómo instalar el entorno?](#sesión-1)
2. [Gestión de la aplicación](#sesión-2)
3. [Notas adicionales](#sesión-3)

## ¿Cómo instalar la API y los recursos necesarios?

**Pasos para el backend:**

1. **Clonar el repositorio:** Abre la terminal y utiliza el siguiente comando para clonar el repositorio en tu máquina local: `git clone URL_del_repositorio`

2. **Instalar dependencias de Python:** Asegúrate de tener un entorno virtual configurado (puede ser Venv o Conda). Activa el entorno virtual y luego instala las dependencias requeridas para el proyecto ejecutando el siguiente comando en la terminal, estando ubicado en la carpeta base (raiz) del proyecto: `pip install -r requirements.txt`

3. **Configurar la base de datos:** Por defecto, el proyecto está configurado para utilizar la base de datos SQLite 3 de desarrollo de Django. Si deseas utilizar PostgreSQL, modifica las líneas relacionadas en **settings.py**. Proporciona los datos necesarios para la conexión. (No es necesario instalar SQLite 3, Django la instala apenas se hagan las migraciones)

4. **Generar migraciones:** Asegúrate de que la base de datos esté correctamente configurada, desplzate a la carpeta reservas_hotel, con el comando `cd reservas_hotel` y ejecuta python `manage.py makemigrations` &`python manage.py migrate` para generar las migraciones necesariasy crear la BD.

5. **Crear superusuario (opcional):** Si deseas gestionar los modelos de forma más rápida, crea un superusuario con `python manage.py createsuperuser`. y despues de ejecutar el servidor accede a `http://127.0.0.1:8000/admin/` para generar datos en la BD

6. **Ejecutar el servidor:** Estamos casi listos. Ahora, para poner en marcha la API, ejecuta el servidor mediante el siguiente comando: `python manage.py runserver`. Una vez que el servidor esté en funcionamiento, podrás realizar peticiones HTTP a las siguientes URLs usando la API:

- `/hotel/api/v1/hotel/`


**Pasos para el frontend:**

1. **Instalar React:** Verifica la instalación de Node con `node --version`. Si es necesario, instala Node, una versión mayor a la 16. Luego dirígete a la carpeta /client con el comando `cd client`.

2. **Instalar paquetes:** Dirígete a la carpeta del cliente con `cd client` y ejecuta `npm install` para instalar las dependencias necesarias para el proyecto.

3. **Correr el servidor frontend:** Utiliza el comando de Vite.js para ejecutar el servidor frontend usando `npm run dev` e ingresa a `http://localhost:5173/` en caso de que ese se configure dicha ruta. En /axede_prueba/settings.py la sección de CORS_ALLOWED_ORIGINS[] viene con la autorización de permitir peticiones a `http://localhost:5173/`, en caso de que cambie la dirección deberás actualizarla en la lista de CORS_ALLOWED_ORIGINS[].

4. **Acceder a la aplicación:** Una vez que ambos servidores estén en ejecución, abre tu navegador y accede a la aplicación en la dirección proporcionada por Vite.js (por defecto, `http://localhost:5173/`).

La aplicación ahora estará enlazada al backend y lista para su uso.

## ¿Cómo instalar la API y los recursos necesarios?
Leer el pdf adjunto