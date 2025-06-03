const pool = require("./pool");

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY id DESC;");
    return rows;
}

async function insertMessage({ message, user}) {
    await pool.query("INSERT INTO messages (message, username) values ($1, $2)", [message, user]);
}

async function showDetails(id) {
    const {rows} = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);

    return rows;
}

async function deleteMessage(id) {
    await pool.query("DELETE FROM messages WHERE id = $1", [id]);
}

module.exports = {
    getMessages,
    insertMessage,
    showDetails,
    deleteMessage
}