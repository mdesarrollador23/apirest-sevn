API PRESTAMOS PERSONALES
===

Este proyecto esta pensado para esas personas que necesitan una aplicacion donde puedan administrar los prestamos que realizan.

## Prerequisites

Tener instalado MS SQL, crear un archivo para administrar las variables de entorno en el inicio del proyecto ".env" y configur ese archivo con estos parametros.

```
#Configuracion MSSQL
DB_USER=usuario
DB_PWD=password
DB_NAME=dbname
DB_SERVER=name

#Puerto del listener express
SERVER_PORT=3000

#Clave secreta
JWT_SECRET=

```

## Setup

```
npm install
```

### Iniciar el proyecto en modo Desarrollo

```
npm run dev
```
