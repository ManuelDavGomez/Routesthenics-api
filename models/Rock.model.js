import mongoose from "mongoose";

const rockSchema = new mongoose.Schema(
  {
    rockName: {
      type: String,
      require: true,
    },
    rockDesc: {
      type: String,
      require: true,
    },
    rockURLs: [
      {
        name: { type: String },
        url: { type: String },
        image: { type: String },
      } 
    ],
    rockChannels: [
      {
        name: { type: String },
        url: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Rock", rockSchema);
