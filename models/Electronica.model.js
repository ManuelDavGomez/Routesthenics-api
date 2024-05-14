import mongoose from "mongoose";

const electronicaSchema = new mongoose.Schema(
  {
    electroName: {
      type: String,
      require: true,
    },
    electroDesc: {
      type: String,
      require: true,
    },
    electroURLs: [
      {
        name: { type: String },
        url: { type: String },
        image: { type: String },
      } 
    ],
    electroChannels: [
      {
        name: { type: String },
        url: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Electronica", electronicaSchema);
