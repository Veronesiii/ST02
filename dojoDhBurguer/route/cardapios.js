const express = require('express');
const router = express.Router();

const controller = require('../controller/cardapioController');

const controllerPedidos = require("../controller/pedidos");

router.get('/', controller.index);
router.get('/buscar/:nome', controller.buscar);
router.get('/pedidos/:nome');

module.exports = router;
