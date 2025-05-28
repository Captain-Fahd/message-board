const messages = [
    {
        text: "Hola",
        user: "Memon",
        added: new Date()
    },
    {
        text: "I love F1",
        user: "AliBali",
        added: new Date()
    }
];
const title = "Mini Message Board";

//Router Setup
const { Router } = require('express');
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.render('index', {title: title, messages: messages});
});

module.exports = indexRouter;