import mongoose from "mongoose";
const { Schema } = mongoose;

const packageSchema = new Schema({
    location: {
    type: String,
    required: true,
  },

  propertyType: {
    type: String,
    required: true,
  },
  addOns: {
    type: String,
    required: true,
  }
});

const Package = mongoose.model("Package", packageSchema);
export default Package;