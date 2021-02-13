const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', (req, res) => {
    controller.getUsers()
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        })
});

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        });
});


module.exports = router;