const Model = require('./model');

async function getNames() {
    return await Model.find();
}

function addUser(user) {
    const myUser = new Model(user);

    return myUser.save();
}

module.exports = {
    add: addUser,
    lists: getNames,
}