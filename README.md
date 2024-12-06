# 🎬 **Movies-Plataforma**  
Simulación de una plataforma de streaming de películas.

---

## 🚀 **Características Principales**

- **Catálogo de Películas**: Los usuarios pueden navegar por un catálogo de películas disponibles para ver en la plataforma.
- **Gestión de Usuarios**: Los administradores pueden gestionar las cuentas de usuario y su acceso a contenido exclusivo.
- **Interfaz de Usuario**: Diseño atractivo y accesible que permite a los usuarios disfrutar de una experiencia de navegación fluida.
- **Búsqueda y Filtros**: Los usuarios pueden buscar películas por género, título o año.
- **Autenticación de Usuarios**: Sistema de registro, inicio de sesión y control de acceso.

---

## 🛠 **Tecnologías Utilizadas**

| **Tecnología** | **Descripción** |
|----------------|-----------------|
| **JavaScript** | Lenguaje de programación principal para la lógica del frontend y backend. |
| **HTML**       | Lenguaje de marcado para estructurar la interfaz de usuario. |
| **CSS**        | Estilos básicos y diseño visual de la plataforma. |
| **Bootstrap**  | Framework de CSS para crear una interfaz rápida, moderna y responsiva. |
| **Mongoose**   | Librería de ODM (Object Data Modeling) para MongoDB en Node.js. |
| **MongoDB**    | Base de datos NoSQL, utilizada para almacenar los datos de películas y usuarios. |
| **Express**    | Framework  para Node.js para construir la API del backend. |

---

## 📦 **Cómo Ejecutar el Proyecto**

Asegúrate de tener instalados los siguientes programas:  
- [Node.js](https://nodejs.org/) (v16 o superior)  
- [MongoDB](https://www.mongodb.com/)  
- [Git](https://git-scm.com/)  

 1️⃣ Clona el Repositorio
```bash
git clone https://github.com/tu_usuario/movies-plataforma
```
2️⃣ Configura las Variables de Entorno
Crea un archivo .env en la raíz del directorio y agrega las siguientes variables de configuración:
```bash
DB_USER=tu_nombre
DB_PASSWORD=tu_contraseña
DB_CLUSTER=elcluster
DB_NAME=movies

MONGO_URI=mongodb+srv://tu_usuario:tu_pasword@tu_cluster.l29xq.mongodb.net/movies
```
3️⃣ Instala las Dependencias
Navega al directorio del proyecto e instala las dependencias necesarias:
```bash
npm install
```
4️⃣ Inicia el Servidor
Inicia el servidor backend:
```bash
npm start
```

5️⃣ Accede a la Plataforma
Abre tu navegador y ve a http://localhost:3000 para acceder a la plataforma de streaming.

---

### 🛠 Comandos Útiles
```bash
npm run start      Inicia el servidor en modo desarrollo.
npm run build      Compila el proyecto para producción.
npm run dev        Inicia el servidor en modo desarrollo.
```
---
### 📧 Contacto
Para preguntas o sugerencias, puedes contactarme:
📩 tu_email@dominio.com
