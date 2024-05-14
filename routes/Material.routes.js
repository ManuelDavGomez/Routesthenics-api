import { Router } from "express";
import Material from "../models/Material.model.js";
const router = Router();

router.get("/material", async (req, res) => {
  try {
    const datosMaterial = await Material.find({});
    res.json(datosMaterial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

router.get("/material/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const datosMaterial = await Material.findById(id);
    res.json(datosMaterial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

export default router;