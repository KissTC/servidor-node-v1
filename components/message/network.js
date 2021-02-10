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
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages) 
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

router.patch('/:id', (req, res) => {
    console.log(req.params.id);

    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })

    res.send('Ok');
});

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

module.exports = router;