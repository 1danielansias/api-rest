# 📰 Blog API – Express & MySQL

**Blog API** es una aplicación backend desarrollada con **Node.js** y **Express.js**, que implementa una arquitectura RESTful para la gestión de un blog.  
El proyecto incluye un sistema relacional con **MySQL**, donde se gestionan las entidades de **Posts** y **Autores**, asegurando integridad y consistencia a través de claves foráneas.  

La API expone endpoints para realizar operaciones **CRUD completas** tanto de posts como de autores, incluyendo consultas relacionales que permiten obtener los posts asociados a un autor específico.

---

## ✨ Características principales

- **Modelo relacional**:  
  Tablas diseñadas en MySQL para `posts` y `authors`, con relaciones **1:N** (un autor puede tener múltiples posts).

- **API RESTful estructurada**:  
  Rutas bajo el prefijo `/api`, siguiendo convenciones de diseño limpio y mantenible.

- **CRUD completo**:  
  - Posts: creación, lectura, actualización y eliminación.  
  - Autores: creación, lectura, actualización y eliminación.  

- **Consultas relacionales avanzadas**:  
  Cada post devuelve los datos completos del autor correspondiente.  
  Endpoint dedicado para recuperar todos los posts de un autor en concreto.

- **Buenas prácticas aplicadas**:  
  Separación entre lógica de negocio y configuración de la base de datos.  
  Uso de control de errores y respuestas JSON estandarizadas.

---

## 🛠️ Tecnologías utilizadas

- **[Node.js](https://nodejs.org/)**: entorno de ejecución.  
- **[Express.js](https://expressjs.com/)**: framework backend para la creación de la API.  
- **[MySQL](https://www.mysql.com/)**: sistema de gestión de base de datos relacional.  
- **[JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)**: lenguaje de programación principal.  
- **[Git](https://git-scm.com/)**: control de versiones.  

---

## 🚀 Endpoints principales

- **Posts**
  - `GET /api/posts` → Lista todos los posts con su autor.  
  - `GET /api/posts/:id` → Recupera un post específico.  
  - `POST /api/posts` → Crea un nuevo post.  
  - `PUT /api/posts/:id` → Actualiza un post existente.  
  - `DELETE /api/posts/:id` → Elimina un post.  

- **Autores**
  - `GET /api/authors` → Lista todos los autores.  
  - `GET /api/authors/:id` → Recupera un autor específico.  
  - `POST /api/authors` → Crea un nuevo autor.  
  - `PUT /api/authors/:id` → Actualiza un autor existente.  
  - `DELETE /api/authors/:id` → Elimina un autor.  

- **Relacional**
  - `GET /api/authors/:id/posts` → Lista todos los posts escritos por un autor concreto.  

---

## 📦 Instalación y ejecución

1. Clonar este repositorio:  
   ```bash
   git clone https://github.com/usuario/api-rest.git
   npm install
   npm start
