# 🎸 GuitarLa Backend

Backend API para la aplicación GuitarLa, construido con **Express**, **TypeScript** y **Sequelize**.

## 📋 Tabla de Contenidos

- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)
- [Licencia](#licencia)

---

## Requisitos Previos

- [Bun](https://bun.sh) v1.3.3 o superior
- Base de datos PostgreSQL

---

## Instalación

```bash
bun install
```

---

## Configuración

1. Copia el archivo `.env.template` y renómbralo a `.env`:

```bash
cp .env.template .env
```

2. Completa las variables de entorno en el archivo `.env`:

```env
PORT=4000
FRONTEND_URL=http://localhost:3000
DATABASE_URL=postgres://usuario:contraseña@localhost:5432/guitarla_db
NODE_ENV=development
```

| Variable       | Descripción                                      | Requerido |
| -------------- | ------------------------------------------------ | --------- |
| `PORT`         | Puerto en el que se ejecutará el servidor        | ✅        |
| `FRONTEND_URL` | URL del frontend (para configuración de CORS)    | ✅        |
| `DATABASE_URL` | Cadena de conexión a la base de datos PostgreSQL | ✅        |
| `NODE_ENV`     | Entorno de ejecución (`development`/`production`)| ❌ (default: `development`) |

---

## Scripts Disponibles

| Script       | Comando          | Descripción                                                              |
| ------------ | ---------------- | ------------------------------------------------------------------------ |
| `dev`        | `bun run dev`    | Inicia el servidor con CORS restringido (solo frontend)                  |
| `dev:api`    | `bun run dev:api`| Inicia el servidor con CORS permisivo (permite Postman, Thunder Client)  |
| `build`      | `bun run build`  | Compila el proyecto TypeScript a JavaScript (output en `/dist`)          |

### 🔒 Diferencia entre `dev` y `dev:api` (CORS)

La principal diferencia entre estos dos scripts radica en la **configuración de CORS**:

| Script    | CORS                          | Uso recomendado                                    |
| --------- | ----------------------------- | -------------------------------------------------- |
| `dev`     | Solo permite `FRONTEND_URL`   | Desarrollo con el frontend conectado               |
| `dev:api` | Permite cualquier origen      | Testing con **Postman**, **Thunder Client**, etc.  |

#### ¿Por qué existe esta diferencia?

- **`bun run dev`**: Configura CORS para aceptar únicamente peticiones desde la URL del frontend (`FRONTEND_URL`). Esto simula un entorno de producción donde solo tu aplicación frontend puede comunicarse con la API. Las peticiones desde herramientas como Postman serán **bloqueadas**.

- **`bun run dev:api`**: Añade `undefined` a la whitelist de orígenes permitidos. Esto permite peticiones sin cabecera `Origin` (como las que envían Postman, Thunder Client, curl, etc.), facilitando el **testing manual de endpoints**.

> [!TIP]
> Usa `bun run dev:api` cuando estés probando endpoints con herramientas de API testing.
> Usa `bun run dev` cuando estés desarrollando junto con el frontend.

### Ejecutar en desarrollo

```bash
# Para testing con Postman/Thunder Client y/o Frontend
bun dev:api

# Para desarrollo con frontend
bun dev
```

### Compilar para producción

```bash
bun run build
```

---

## Estructura del Proyecto

El proyecto sigue una arquitectura basada en **Clean Architecture** y está organizado por **Features**:

```
src/
├── app/                          # Capa de aplicación
│   ├── guitars/                  # Feature: Guitarras
│   │   ├── domain/               # Capa de dominio
│   │   │   ├── datasource/       # Interfaces de fuentes de datos
│   │   │   ├── dtos/             # Data Transfer Objects
│   │   │   ├── entities/         # Entidades del dominio
│   │   │   ├── repositories/     # Interfaces de repositorios
│   │   │   └── index.ts          # Barrel file
│   │   ├── infrastructure/       # Capa de infraestructura
│   │   │   ├── datasources/      # Implementaciones de datasources
│   │   │   ├── mappers/          # Mapeadores de datos
│   │   │   ├── repositories/     # Implementaciones de repositorios
│   │   │   └── index.ts          # Barrel file
│   │   └── presentation/         # Capa de presentación
│   │       ├── controllers/      # Controladores HTTP
│   │       ├── middlewares/      # Middlewares específicos
│   │       ├── routes.ts         # Definición de rutas
│   │       └── index.ts          # Barrel file
│   ├── sales/                    # Feature: Ventas (misma estructura)
│   ├── routes.ts                 # Router principal de la aplicación
│   └── server.ts                 # Configuración del servidor Express
├── config/                       # Configuración de la aplicación
│   ├── cors.ts                   # Configuración de CORS
│   └── envs.ts                   # Variables de entorno
├── data/                         # Capa de datos
│   └── db.ts                     # Configuración de la base de datos
├── errors/                       # Manejo de errores personalizados
├── utils/                        # Utilidades generales
└── app.ts                        # Punto de entrada de la aplicación
```

### Capas de la Arquitectura

| Capa              | Responsabilidad                                                    |
| ----------------- | ------------------------------------------------------------------ |
| **Domain**        | Entidades, DTOs, interfaces de repositorios y datasources         |
| **Infrastructure**| Implementaciones concretas de repositorios, datasources y mappers |
| **Presentation**  | Controladores, middlewares y definición de rutas HTTP              |

---

## Contribución

¡Las contribuciones son bienvenidas! Este proyecto está bajo la licencia MIT, lo que significa que puedes:

- ✅ Usar el código para cualquier propósito
- ✅ Modificar el código
- ✅ Distribuir copias
- ✅ Sublicenciar
- ✅ Uso comercial

### Cómo contribuir

1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`)
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## Licencia

Este proyecto está licenciado bajo la **MIT License** - consulta el archivo [LICENSE](LICENSE) para más detalles.

---

> **Note**: 
> Este proyecto fue creado usando `bun init` en bun v1.3.3. [Bun](https://bun.sh) es un runtime de JavaScript rápido todo-en-uno.
