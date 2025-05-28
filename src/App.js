//App setup -- path/environment constants
const express = require('express');
const app = express();
const PORT = 3001;
const path = require('node:path');

//App Routers
const indexRouter= require('./routes/indexRouter');

//App setup -- funcs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use('/', indexRouter);


//App Listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
