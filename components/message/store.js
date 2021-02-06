const db = require('mongoose');
const Model = require('./model');

//hacemos la conexion con la BD
//uri de conexion mongodb+srv://db_user_chat:PSTQ6Inm01dwjFwl@cluster0.zfxlp.mongodb.net/backendchat_db
db.Promise = global.Promise; //
db.connect('mongodb+srv://db_user_chat:PSTQ6Inm01dwjFwl@cluster0.zfxlp.mongodb.net/backendchat_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
console.log('db conectada con exito');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages
    //get
    //update
    //delete
}