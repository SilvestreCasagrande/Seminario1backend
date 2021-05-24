const mongoose = require('mongoose');

const vuelosYguardiasSchema = new mongoose.Schema({
  numerodevuelo: String,
  modeloavion: String,
  origen: {
    fecha: Date,
    pais: String,
    ciudad: String,
    aeropuerto: String,
    foto: String
  },
  destino: {
    fecha: Date,
    pais: String,
    ciudad: String,
    aeropuerto: String,
    foto: String
  },
  escala: [{
      pais: String,
      ciudad: String,
      aeropuerto: String
    }],
  tripulante: {
    piloto: [{legajo:Number}],
    tripulantecabina: [{legajo:Number}],
  },
  backup: {
    piloto: [{legajo:Number}],
    tripulantecabina: [{legajo:Number}],
  },
  pasajeros: {
    firstclass: Number,
    business: Number,
    Economy: Number
  }
});

module.exports = mongoose.model("vuelosYguardias", vuelosYguardiasSchema);
