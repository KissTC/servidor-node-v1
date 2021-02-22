const Model = require('./model');

function getNames() {
    return Model.find();
}

function addUser(user) {
    const myUser = new Model(user);

    return myUser.save();
}

module.exports = {
    add: addUser,
    lists: getNames,
}