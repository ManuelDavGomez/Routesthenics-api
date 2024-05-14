import mongoose from "mongoose";

const warmSchema = new mongoose.Schema(
  {
    warmName: {
      type: String,
      require: true,
    },
    warmDesc: {
      type: String,
      require: true,
    },
    warmURLs: [
      {
        name: { type: String },
        url: { type: String },
        image: { type: String },
      }
    ],
    warmMaterials: [{ type: String }],
    warmChannels: [
      {
        name: { type: String },
        url: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Warm", warmSchema);
