// esta es la capa de red
// sera la encargada de recibir la peticion http, procesar la informacion  y enviarlo al controlador
const express = require('express');
//el router nos va a poder permitir separar nuestras peticiones
const router = express.Router();
const response = require('../../network/response');

//aqui le decimos al router SOLAMENTE LAS PETICIONES GET 
router.get('/', (req, res) => {
    //como leer las cabeceras. Las cabeceras van en REQUEST
    console.log(req.headers);
    res.header({
        "custom-header": "nuestro valor personalizado"
    })
    //res.send('Lista de mensajes');
    response.success(req, res, 'lista de mensajes');
});

router.post('/', (req, res) => {
    //res.status(201).send({error: '', body: 'Creado correctamente'});
    //res.send('Mensaje añadido');
    if (req.query.error == "ok") {
        response.error(req, res, 'Error insesperado', 500, 'es una simulacion de los errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});

router.delete('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje añadido');
});

module.exports = router;