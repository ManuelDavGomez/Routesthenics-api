import mongoose from "mongoose";

const materSchema = new mongoose.Schema(
  {
    materialName: {
      type: String,
      require: true,
    },
    materialDesc: {
      type: String,
      require: true,
    },
    materialURLs: [
      {
        name: { type: String },
        url: { type: String },
        image: { type: String },
      },
    ],
    progressionMaterial: [{ type: String }],
    materialImage: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Material", materSchema);
