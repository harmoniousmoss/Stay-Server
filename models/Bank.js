// Initialiazed mongoose
const mongoose = require("mongoose");

// Membuat model Bank
const bankSchema = new mongoose.Schema({
  nameBank: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bank", bankSchema);
