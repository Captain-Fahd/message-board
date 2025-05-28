//App setup -- path/environment constants
const express = require('express');
const app = express();
const PORT = 8080;
const path = require('node:path');
const assetsPath = path.join(__dirname, 'public');
//Middleware parser
app.use(express.urlencoded({ extended: true }));

//App Routers
const indexRouter= require('./routes/indexRouter');

//App setup -- funcs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/', indexRouter);
app.use('/new', indexRouter);
app.use(express.static(assetsPath));


//App Listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
