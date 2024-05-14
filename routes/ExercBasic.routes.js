import { Router } from "express";
import UserBasic from "../models/ExerBasics.model.js";
const router = Router();

router.get("/exercisebasic", async (req, res) => {
  try {
    const datosBasic = await UserBasic.find({});
    res.json(datosBasic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

router.get("/exercisebasic/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const datosBasic = await UserBasic.findById(id);
    res.json(datosBasic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener datos" });
  }
});

export default router;
