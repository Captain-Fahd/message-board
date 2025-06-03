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

indexRouter.get("/message/:id", messageController.showDetails)
//Exports
module.exports = indexRouter;