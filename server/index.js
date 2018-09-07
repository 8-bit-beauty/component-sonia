const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

app.use(express.static(__dirname + '/../client/dist'));


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`)
})