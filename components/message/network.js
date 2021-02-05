// esta es la capa de red
// sera la encargada de recibir la peticion http, procesar la informacion  y enviarlo al controlador
const express = require('express');
//el router nos va a poder permitir separar nuestras peticiones
const router = express.Router();
const response = require('../../network/response');
//controlador de message
const controller = require('./controller');

//aqui le decimos al router SOLAMENTE LAS PETICIONES GET 
router.get('/', (req, res) => {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});

router.post('/', (req, res) => {
    //se manda usuario y el mensaje. dos propiedades candidatas a que vengan en el body de la peticion
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion Invalida ', 400, 'Error en el contenido');
        })

});

router.delete('/', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje añadido');
});

module.exports = router;