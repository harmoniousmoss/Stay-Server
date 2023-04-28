// Initialiazed mongoose
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

// Membuat model kategori
const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    default: "Indonesia",
    required: true,
  },
  city: {
    type: String,
    requred: true,
  },
  isPopular: {
    type: Boolean,
  },
  description: {
    type: String,
  },
  imageId: [
    {
      type: ObjectId,
      ref: "Image",
    },
  ],
  featureId: [
    {
      type: ObjectId,
      ref: "Feature",
    },
  ],
  activityId: [
    {
      type: ObjectId,
      ref: "Activity",
    },
  ],
});

module.exports = mongoose.model("Item", itemSchema);
