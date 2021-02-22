const store = require('./store');

function getChats() {
    return store.lists();
}

function addChat(users) {
    
    if (!users || !Array.isArray(users)) {
        return Promise.reject('Invalid user list');
    }
    
    const chat = {
        users,
    };

    return store.create(chat);
}

module.exports = {
    addChat,
    getChats
}