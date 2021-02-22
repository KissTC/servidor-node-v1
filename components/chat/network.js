// esta es la capa de red
// sera la encargada de recibir la peticion http, procesar la informacion  y enviarlo al controlador
const express = require('express');
//el router nos va a poder permitir separar nuestras peticiones
const router = express.Router();
const response = require('../../network/response');
//controlador de message
const controller = require('./controller');

//aqui le decimos al router SOLAMENTE LAS PETICIONES GET 
router.get('/:userId', (req, res) => {
    controller.getChats(req.params.userId) 
        .then((chats) => {
            response.success(req, res, chats, 200)
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});

router.post('/', (req, res) => {
    //se manda usuario y el mensaje. dos propiedades candidatas a que vengan en el body de la peticion
    controller.addChat(req.body.users)
        .then((chatList) => {
            response.success(req, res, chatList, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion Invalida ', 400, 'Error en el contenido');
        })

});


module.exports = router;