// Initialiazed mongoose
const mongoose = require("mongoose");

// Membuat model kategori
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
