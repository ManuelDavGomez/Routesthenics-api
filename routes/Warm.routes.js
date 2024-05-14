import { Router } from "express";
import UserWarm from "../models/Warm.model.js";
const router = Router();

router.get("/warmup", async (req, res) => {
  try {
    const datosWarm = await UserWarm.find({});
    res.json(datosWarm);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

router.get("/warmup/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const datosWarm = await UserWarm.findById(id);
    res.json(datosWarm);
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

export default router;
