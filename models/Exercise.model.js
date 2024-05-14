import mongoose from "mongoose";

const exerSchema = new mongoose.Schema(
  {
    exerciseName: {
      type: String,
      require: true,
    },
    exerciseDesc: {
      type: String,
      require: true,
    },
    youtubeURLs: [
      {
        name: { type: String },
        urls: { type: String },
        route: { type: String },
      },
    ],
    skillDifficulty: {
      type: String,
    },
    skillMuscles: [{ type: String }],
    skillMaterials: [{ type: String }],
    skillAthletes: [{ type: String }],
    skillVariations: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model("Exercise", exerSchema);