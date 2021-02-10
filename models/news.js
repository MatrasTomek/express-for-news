const mongoose = require("mongoose");
const { Schema } = mongoose;

const newsSchema = new Schema({
  title: { type: String, required: [true, "Tytył jest wymagany"] },
  description: { type: String, required: [true, "Opis jest wymagany"] },
  date: { type: Date, default: Date.now },
  path: { type: String, required: [true, "Ścieżka jest wymagana"] },
});

module.exports = mongoose.model("News", newsSchema);
