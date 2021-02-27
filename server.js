//forma que tiene node de traer modulos
// Lo primero que hacemos para tener un server en NodeJS es cargar una //librería para  montarlo. Express es una muy buena.
const express = require('express');
//para inicializar express
const app = express();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const socket = require('./socket');

const db = require('./db');
//const router = require('./components/message/network');
const router = require('./network/routes');

db('mongodb+srv://db_user_chat:PSTQ6Inm01dwjFwl@cluster0.zfxlp.mongodb.net/backendchat_db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);
socket.connect(server);
router(app);

// Para ver que funciona le  pido que me devuelva para cualquier ruta:
/*app.use('/', (req, res) => {  // --->Para cualquier ruta, cre una función, tiene dos parámentros, cualquier funcion http tiene req y res.
    res.send('Hola'); // Estaes la respuesta que tengo.
});*/

app.use('/app', express.static('public'));

//Para que lo anterior viva temos que decirle donde va a escuchar, eligimos un puerto, como el 3000 quees muy usado en las apps de Node.
//ejecutarse
server.listen(3000, function () {
    console.log('La aplicacion esta escuchando en http://localhost:3000');
});