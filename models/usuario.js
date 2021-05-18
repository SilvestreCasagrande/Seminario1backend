const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String
});


module.exports = mongoose.model("Usuario", usuarioSchema);
