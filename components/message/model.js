const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//este es un schema de mongoose y lo que hace es que 
//a traves de un objeto podremos definir todas las propiedades y tipos que queramos en este caso usuario, mensaje y fecha
const mySchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true,
    },
    date: Date,
    file: String
});

// el modelo lo que dirá es, este es el esquema y todo lo que se cree tenga este esquema y lo que se guarda en la base de datos tenga este nombre
const model = mongoose.model('Message', mySchema);

module.exports = model;