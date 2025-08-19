const mongoose = require("mongoose");
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("students", studentSchema);
