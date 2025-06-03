const db = require('../db/queries');
const title = "Mini Message Board";

//CRUD functions
async function getMessages(req, res) {
    const messages = await db.getMessages();
    console.log(messages);
    res.render('index', {title: title, messages: messages});
}

async function createMessageGet(req, res) {
    res.render('form');
}

async function createMessagePost(req, res) {
    const {message, user} = req.body;
    await db.insertMessage({message, user});
    res.redirect('/');
}

async function showDetails(req, res) {
    const {id} = req.params;
    const message = await db.showDetails(id);
    res.render('details', {message: message[0]});
}

async function deleteMessage(req, res) {
    const {id} = req.params;
    console.log(id);
    await db.deleteMessage(id);
    res.redirect('/');
}

//export
module.exports = {
    getMessages,
    createMessageGet,
    createMessagePost,
    showDetails,
    deleteMessage
}