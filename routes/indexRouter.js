const messageController = require('../controllers/messageController');


//Router Setup
const { Router } = require('express');
const indexRouter = Router();

function formRedirect() {
    console.log("Form Redirect");
}


//Main Route Paths
indexRouter.get("/", messageController.getMessages);
indexRouter.get("/new", messageController.createMessageGet);
indexRouter.post("/new", messageController.createMessagePost);
indexRouter.get("/message/:id", messageController.showDetails);
indexRouter.get("/delete/:id", messageController.deleteMessage);
//Exports
module.exports = indexRouter;