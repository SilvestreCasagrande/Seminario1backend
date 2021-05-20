const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  dni: Number,
  username: String,
  password: String,
  legajo: Number,
  mail: String,
  foto: {data: Buffer, contentType: String},
  estado: String,
  telefono: {fijo: Number,celular: Number},
  domicilio: {
    calle: String,
    altura: Number,
    depto: String,
    ciudad: String,
    provincia: String,
    codpostal: String,
    pais: String
  }

});


module.exports = mongoose.model("Usuario", usuarioSchema);
