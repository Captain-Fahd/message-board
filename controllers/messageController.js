const db = require('../db/queries');
const title = "Mini Message Board";

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

module.exports = {
    getMessages,
    createMessageGet,
    createMessagePost,
    showDetails
}