import mongoose from "mongoose";

const exercBasicsSchema = new mongoose.Schema(
  {
    basicsName: {
      type: String,
      require: true,
    },
    basicsDesc: {
      type: String,
      require: true,
    },
    basicsURLs: [
      {
        name: { type: String },
        urls: { type: String },
        route: { type: String },
      },
    ],
    basicsDifficulty: {
      type: String,
    },
    basicsMuscles: [{ type: String }],
    basicsMaterials: [{ type: String }],
    basicsVariations: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("ExerciseBasic", exercBasicsSchema);
