# Plataforma de Eventos e Inscripciones - Backend II
Base arquitectónica inicial y modular para la API REST de la plataforma de gestión de eventos e inscripciones, desarrollada en Node.js y Express con persistencia en MongoDB Atlas.
Este repositorio es un trabajo en desarrollo y posteriormente presentará una estructura con más capas y código más complejo.
---
## 🛠️ Tecnologías y dependencias
- **Node.js** (v20+)
- **Express** (Framework HTTP y ruteo modular)
- **Mongoose** (ODM para conexión y modelado en MongoDB Atlas)
---
## 📁 Estructura del proyecto
El proyecto sigue una arquitectura en capas con separación de responsabilidades:
```text
├── src/
│   ├── config/             # Configuración de variables de entorno y base de datos
│   │   ├── database.config.js
│   │   └── env.config.js
│   ├── controllers/        # Controladores (manejo de req / res)
│   │   ├── events.controller.js
│   │   └── sessions.controller.js
│   ├── dao/                # Data Access Objects (acceso directo a la base de datos)
│   ├── middlewares/        # Middlewares de aplicación y validación
│   ├── models/             # Esquemas y modelos de Mongoose
│   │   ├── event.model.js
│   │   └── user.model.js
│   ├── repositories/       # Capa de repositorios
│   ├── routes/             # Definición de rutas y routers modulares
│   │   ├── events.router.js
│   │   └── sessions.router.js
│   ├── services/           # Lógica de negocio
│   ├── app.js              # Configuración y middlewares de Express
│   └── server.js           # Punto de entrada, conexión a BD y arranque del servidor
├── .env.example            # Plantilla de variables de entorno requeridas
├── package.json
└── README.md
```
---

## ⚙️ Configuración del entorno

1. Clonar el repositorio e instalar las dependencias:
```bash
npm install
```

2. Crear un archivo `.env` en la raíz tomando como base `.env.example`:
```env
PORT=8080
MONGO_URL=mongodb+srv://<usuario>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
```

## 🚀 Ejecución

Modo desarrollo:
```bash
npm run dev
```

Modo producción:
```bash
npm start
```

## 🩺 Endpoints iniciales

- `GET /api/health` -> Chequeo de estado del servidor
- `/api/events` -> Router base de eventos
- `/api/session` -> Router base de sesiones

