const store = require('./store');

function addMessage(user, message) {
    
    return new Promise((resolve, reject) => {
        
        if (!user || !message) {
            console.error('[messageController] No hay usuario o mensaje');
            return reject('Los datos son incorrectos');
        }
        
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        }
    
        console.log(store.add(fullMessage));
        resolve(fullMessage);
    });

}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            return reject('Invalid data')
        }
        const result = await store.updateText(id, message);
    });
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        
        if (!id) {
             return reject('Id invalido');
        }
        
        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}