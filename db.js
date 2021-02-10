const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
    //hacemos la conexion con la BD
    // ** conexion ya no disponible, usuario eliminado ** 
     //
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('db conectada con exito');
}

module.exports = connect;