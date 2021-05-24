const Usuario = require("../models/usuario");

exports.getUsuarios = (req,res) => {
  const usuarios = Usuario.find()
    .then(usuarios => {
      res.status(200).json({ usuarios });
    })
    .catch(err => console.log(err));
};

exports.getUsuario = (req,res) => {
  const usuario = Usuario.find(
      {
        username:req.body.username
      },(err, result) => {
        try {
            result[0].username
        } catch(error) {
          err = "No se encontro el usuario"
        }
        if(err) {
          return res.status(400).json({
            error: err
          });
        }
        res.status(200).json({
          usuario: result
        })
      })
}

exports.tryLogin = (req,res) => {
  const usuario = Usuario.find(
      {
        username:req.body.username,
        password:req.body.password
      },(err, result) => {
        try {
            result[0].username
        } catch(error) {
          err = "No se encontro el usuario"
        }
        if(err) {
          return res.status(400).json({
            error: err
          });
        }
        res.status(200).json({
          sucess: "Credenciales correctas"
        })
      })
};

exports.createUsuario = (req,res) => {
  console.log(req.body);
  const usuario = new Usuario(req.body);
  console.log("CREANDO USUARIO: ", req.body);
  usuario.save((err, result) => {
    if(err) {
      return res.status(400).json({
        error: err
      });
    }
    res.status(200).json({
      usuario: result
    })
  })
};
