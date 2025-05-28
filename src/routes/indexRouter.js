//Dummy Variables
const messages = [
    {
        text: "Hi, I am John",
        user: "John Doe",
        added: new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'numeric', day: 'numeric'})
    },
    {
        text: "Hi, I am Jane",
        user: "Jane Doe",
        added: new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'numeric', day: 'numeric'})
    }
];
const title = "Mini Message Board";

//Router Setup
const { Router } = require('express');
const indexRouter = Router();

function formRedirect() {
    console.log("Form Redirect");
}


//Main Route Paths
indexRouter.get("/", (req, res) => {
    res.render('index', {title: title, messages: messages, formRedirect: formRedirect});
});

indexRouter.get("/new", (req, res) => {
    res.render('form');
});


indexRouter.post("/new", (req, res) => {
   const {message, user} = req.body;
   messages.unshift({
       text: message,
       user: user,
       added: new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'numeric', day: 'numeric'})
   });
   res.redirect('/');
})

indexRouter.get("/message/:id", (req, res) => {
    res.render("details", {message: messages[req.params.id]});
})
//Exports
module.exports = indexRouter;