import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import exerciseRouter from "./routes/Exercise.routes.js";
import exercBasicRouter from "./routes/ExercBasic.routes.js";
import rockRouter from "./routes/Rock.routes.js";
import electroRouter from "./routes/Electronica.routes.js";
import warmRouter from "./routes/Warm.routes.js";
import materialRouter from "./routes/Material.routes.js";

const app = express();

dotenv.config();

async function connectdb() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to database");
  } catch (error) {
    console.error("Error connecting to database: ", error);
  }
}

connectdb();

app.use(cors());

app.use(exerciseRouter);
app.use(exercBasicRouter);
app.use(rockRouter);
app.use(warmRouter);
app.use(electroRouter);
app.use(materialRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("server running");
});
