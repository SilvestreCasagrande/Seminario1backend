const Usuario = require("../models/usuario");

exports.getUsuarios = (req,res) => {
  res.json({
    usuario: [{
                nombre:"Silvestre",
                apellido:"casagrande"
              },
              {
                nombre: "Toca",
                apellido: "Anos"
              }
            ]
  });
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
