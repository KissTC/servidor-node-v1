const Model = require('./model');

function getChats(userId) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (userId) {
            filter = {
                users: userId,
            }
        }

        Model.find(filter)
            .populate('users')
            .exec((err, populated) => {
                if (err) {
                    reject(err);
                    return false;
                }

                resolve(populated);
                
            })
    });
}

function createNewChat(users) {
    const myChat = new Model(users);
    return myChat.save();
}

module.exports = {
    create: createNewChat,
    lists: getChats,
}