module.exports = (app) => {
    const persona = require('../controllers/persona.controller');
    const producto = require('../controllers/producto.controller');
    var router = require('express').Router();

    //Rutas para la clase persona
    router.post("/persona/create",persona.create);

    //Rutas para la clase procudto
    router.get("/producto/",producto.findAll);
    router.get("/producto/lista", producto.list);
    router.get("/producto/busquedapornombre", producto.findByName);
    router.get("/producto/delete", producto.delete);
}