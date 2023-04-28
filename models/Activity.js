// Initialiazed mongoose
const mongoose = require("mongoose");

// Membuat model Activity
const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
