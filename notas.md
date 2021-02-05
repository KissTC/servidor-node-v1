## Introducción

**Protocolo HTTP:** es el protocolo de comunicación que nos permite transferir información entre cualquier elemento que esta en la web, IOT, web, mobiles etc.
**Porque es importante:** es un idioma común
**Como es una petición?:** un CLIENTE -> INTERNET -> SERVIDOR
GET /index.html HTTP/1.1
host, refer, user-agent, connection
el servidor manda una respuesta: código 200, 404 etc
**Puntos clave:** METODOS: ¿que quieres hacer?
ESTADO: Como ha ido la operacion
CUERPO: Todo lo que nos devuelva

### Metodos, cabeceras y estados

**Metodos:** es el verbo que dice "que es lo que queremos hacer" los principales son GET, PUT, DELETE, POST, PATCH, OPTIONS
GET: siempre que queramos recoger info del servidor
POST: Añadir info al servidor
PUT: Reemplaza informacion en el servidor
PATCH: Modificar parte de la información
DELETE: Eliminar información del sevidor
**Cabeceras:** da informacion contextual de la petición. Es el cómo quiero hacer lo que quiero hacer.
En requests como POST PUT y PATCH se puede usar, indicar que condiciónes ejecutar, indicaciones, cors, cookies para compartir informacion entre peticiones, cache, auth...
CORS: compartir recursos entre diferentes origenes desde fuera de nuestro servidor
ACCEPT: definir el tipo de contenido, como xml, json, con charset utf-8 etc.
Authorization: para asegurarme de pedir cosas al servidor
Caché: almacenimiento temporal. Cache-Control | Expires
**Estados:** es un numero que nos dice que pasó con la petición
200: todo ok
201: creado..
301: moved permanently
304: not modified
errores...
400: bad request
401: Unauthorized no estas autorizado
403: prohibido, si se quien eres pero no tienes permisos
404: not found
Errores de servidor
5xx: internal server error

### Cuerpo y Query de las peticiones

El cuerpo es la infomacion que queremos añadir o queremos que el servidor nos de
ej. añadir un usuario, seria con POST y todo el cuerpo seria nombre de usuario, correo etc...
¿Qué tiene y cómo viene? esto lo define las _cabeceras_

- Content-Type: tipo de contenido que tengo
  - text/html
  - text/css
  - application/javascript
  - image/jpeg
  - application/json
  - application/xml
- Content-lenght: que tan largo es este contenido

En la **request** ej. esto que mando es un json y quiero que sea asi
[POST]
http://api.com/user
-> content-type: application/json
{
"name": "Carlos",
"username": "CodingCarlos"
}

El **Query** nos permite añadir informacion extra, por ejemplo, un dato en especifico, el orden que queremos etc.
Se puede utilizar para compartir datos con el frontend. NUNCA MANDAR INFORMACION SENSIBLE, CONFIDENCIAL, TOKENS DE USUARIO NUNCA NUNCA

## Crear un servidor HTTP desde NodeJs

Utilizaremos Express
Si hacemos cualquier peticion nos devuelve lo mismo(primer servidor)
Como hacemos para gestionar que hacer con los metodos? con el Router de Express

**Recibir info desde cliente: Body y Query**
Para trabajar con el Body debemos instalar Body Parser
es una extension que nos permite trabajar con el body de manera sencilla

**Que implica construir un backend**
Debemos ser cuidadosos con la informacion que le entregamos al cliente
ej. un login
mandamos usuario y contraseña
Tenemos los logs

## Arquitectura

**Rutas**
separando el archivo

**mock**
falsear la base de datos o un servicio para validar que todo funciona correctamente
nos va a servir en este caso de aprender a saber cual es la responsabilidad unica de la capa de almacenamiento
es basicamente una simulacion de base de datos
