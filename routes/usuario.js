const express = require("express");
const usuarioController = require("../controllers/usuario");

const router = express.Router();

router.get("/usuario", usuarioController.getUsuarios)

module.exports = router;
