import { Router } from "express";
import UserElectro from "../models/Electronica.model.js";
const router = Router();

router.get("/electronica", async (req, res) => {
  try {
    const datosElectro = await UserElectro.find({});
    res.json(datosElectro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

router.get("/electronica/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const datosElectro = await UserElectro.findById(id);
    res.json(datosElectro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

export default router;
