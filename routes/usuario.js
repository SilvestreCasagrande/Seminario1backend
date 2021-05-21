const express = require("express");
const usuarioController = require("../controllers/usuario");

const router = express.Router();

router.get("/usuarios", usuarioController.getUsuarios)
router.post("/crearusuario", usuarioController.createUsuario)
module.exports = router;
