import { Router } from "express";
import User from "../models/Exercise.model.js";
const router = Router();

router.get("/", async (req, res) => {
  res.send("Hola Api");
});

router.get("/exercise", async (req, res) => {
  try {
    const datos = await User.find({});
    res.json(datos);  
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

router.get("/exercise/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const datos = await User.findById(id);
      res.json(datos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error al obtener datos" });
    }
  });
  
  export default router;
  
