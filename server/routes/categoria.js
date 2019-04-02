const express = require('express');
let { verificaToken } = require('../middlewares/authentication');


let app = express();

let Categoria = require('../models/categoria');

// ============================
// Mostrar todas las categorias
// ============================
app.get('/categoria', (req, res) => {

});


// ============================
// Mostrar una categoria por ID
// ============================
app.get('/categoria/:id', (req, res) => {

});


// ============================
// Crear nueva categoria
// ============================
app.post('/categoria', verificaToken, (req, res) => {
    //regresa la nueva categoria
});

// ============================
// Mostrar todas las categorias
// ============================
app.put('/categoria/:id', (req, res) => {

});

// ============================
// Mostrar todas las categorias
// ============================
app.delete('/categoria/:id', (req, res) => {

});

module.exports = app;