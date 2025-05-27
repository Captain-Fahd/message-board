//App setup -- constants
const express = require('express');
const app = express();
const PORT = 3001;
const path = require('node:path');

//App setup -- funcs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get('/', (req, res) => {
    res.render('index');
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
