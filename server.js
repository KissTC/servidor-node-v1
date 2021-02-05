//forma que tiene node de traer modulos
// Lo primero que hacemos para tener un server en NodeJS es cargar una //librería para  montarlo. Express es una muy buena.
const express = require('express');
const bodyParser = require('body-parser');

//const router = require('./components/message/network');
const router = require('./network/routes');

//para inicializar express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(router);

router(app);

// Para ver que funciona le  pido que me devuelva para cualquier ruta:
/*app.use('/', (req, res) => {  // --->Para cualquier ruta, cre una función, tiene dos parámentros, cualquier funcion http tiene req y res.
    res.send('Hola'); // Estaes la respuesta que tengo.
});*/

app.use('/app', express.static('public'));

//Para que lo anterior viva temos que decirle donde va a escuchar, eligimos un puerto, como el 3000 quees muy usado en las apps de Node.
//ejecutarse
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');