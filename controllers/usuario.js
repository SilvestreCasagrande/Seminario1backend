const Usuario = require("../models/usuario");

exports.getUsuarios = (req,res) => {
  const usuarios = Usuario.find()
    .then(usuarios => {
      res.status(200).json({ usuarios });
    })
    .catch(err => console.log(err));
};

exports.createUsuario = (req,res) => {
  console.log(req.body);
  const usuario = new Usuario(req.body);
  console.log("CREANDO USUARIO: ", req.body);
  usuario.save((err, result) => {
    if(err) {
      return res.status(499).json({
        error: err
      });
    }
    res.status(200).json({
      usuario: result
    })
  })
};
