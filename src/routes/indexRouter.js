//Dummy Variables
const messages = [
    {
        text: "Hi",
        user: "Memon",
        added: new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'numeric', day: 'numeric'})
    },
    {
        text: "Hi",
        user: "AliBali",
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
//Exports
module.exports = indexRouter;