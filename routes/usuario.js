const express = require("express");
const usuarioController = require("../controllers/usuario");

const router = express.Router();

router.get("/getUsuarios", usuarioController.getUsuarios)
router.post("/crearUsuario", usuarioController.createUsuario)
router.get("/tryLogin", usuarioController.tryLogin)
router.get("/getUsuario", usuarioController.getUsuario)
module.exports = router;
