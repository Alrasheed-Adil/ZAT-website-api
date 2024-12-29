const mongoose = require("mongoose");

const scholarSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+\@.+\..+/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },
    qualification: { 
      type: String,
      required: true,
    },
    qualificationDate: { 
      type: Date,
      required: true,
    },
    status: { 
      type: String, 
      default: "New" 
    },
  },
  { timestamps: true }
);

const Scholar = mongoose.model("Scholar", scholarSchema);

module.exports = Scholar;
