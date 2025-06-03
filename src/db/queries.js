const pool = require("./pool");

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage({ message, user}) {
    await pool.query("INSERT INTO messages (message, usernames) values ($1, $2)", [message, user]);
}

async function showDetails() {}

async function deleteMessage() {}

module.exports = {
    getMessages,
    insertMessage,
    showDetails,
    deleteMessage
}