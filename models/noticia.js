const mongoose = require('mongoose');

const noticiaSchema = new mongoose.Schema({
  title: String,
  body: String,
});

module.exports = mongoose.model("noticia", noticiaSchema);
