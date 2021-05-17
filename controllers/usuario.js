const Usuario = require("../models/usuario");

exports.getUsuarios = (req,res) => {
  res.send("Que onda con los usuarios que no andan");
};

exports.createUsuario = (req,res) => {
  const usuario = new Usuario(req.body);
  console.log("CREANDO USUARIO: ", req.body)
};
