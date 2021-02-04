//forma que tiene node de traer modulos
// Lo primero que hacemos para tener un server en NodeJS es cargar una //librería para  montarlo. Express es una muy buena.
const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
//el router nos va a poder permitir separar nuestras peticiones
const router = express.Router();

//para inicializar express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

//aqui le decimos al router SOLAMENTE LAS PETICIONES GET 
router.get('/message', (req, res) => {
    //como leer las cabeceras. Las cabeceras van en REQUEST
    console.log(req.headers);
    res.header({
        "custom-header": "nuestro valor personalizado"
    })
    //res.send('Lista de mensajes');
    response.success(req, res, 'lista de mensajes');
});

router.post('/message', (req, res) => {
    //res.status(201).send({error: '', body: 'Creado correctamente'});
    //res.send('Mensaje añadido');
    if (req.query.error == "ok") {
        response.error(req, res, 'Error simulado', 400);
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});

router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje añadido');
});
// Para ver que funciona le  pido que me devuelva para cualquier ruta:
/*app.use('/', (req, res) => {  // --->Para cualquier ruta, cre una función, tiene dos parámentros, cualquier funcion http tiene req y res.
    res.send('Hola'); // Estaes la respuesta que tengo.
});*/

//Para que lo anterior viva temos que decirle donde va a escuchar, eligimos un puerto, como el 3000 quees muy usado en las apps de Node.
//ejecutarse
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');