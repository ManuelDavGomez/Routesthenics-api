import { Router } from "express";
import UserRock from "../models/Rock.model.js";
const router = Router();

router.get("/rock", async (req, res) => {
  try {
    const datosElectro = await UserRock.find({});
    res.json(datosElectro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

router.get("/rock/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const datosElectro = await UserRock.findById(id);
    res.json(datosElectro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

export default router;
