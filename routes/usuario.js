const express = require("express");
const usuarioController = require("../controllers/usuario");

const router = express.Router();

router.get("/", usuarioController.getUsuarios)
router.post("/usuario", usuarioController.createUsuario)
module.exports = router;
