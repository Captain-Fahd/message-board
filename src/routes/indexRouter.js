//Dummy Variables
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



//Main Route Paths
indexRouter.get("/", (req, res) => {
    res.render('index', {title: title, messages: messages});
});

indexRouter.get("/new", (req, res) => {
    res.render('form');
});

indexRouter.post("/new", (req, res) => {
   const {message, user} = req.body;
   messages.push({
       text: message,
       user: user,
       added: new Date()
   });
   res.redirect('/');
})
//Exports
module.exports = indexRouter;