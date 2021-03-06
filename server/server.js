require('./config/config');

const express = require('express');
const mongoose = require('mongoose');


const app = express();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Configuración global de rutas
app.use(require('./routes/index'))

mongoose.connect('mongodb://localhost:27017/cafe', {
    useCreateIndex: true,
    useNewUrlParser: true
});


app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto:", process.env.PORT);
});