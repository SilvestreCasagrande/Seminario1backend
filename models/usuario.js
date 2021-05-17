const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre:{type:String},
  apellido:{type:String}
});

module.exports = mongoose.model("Usuario", usuarioSchema);
