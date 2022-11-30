import express from "express";
import { createGrupoMuscular, deleteGrupoMuscular, getGrupoMuscular, getGruposMusculares, updateGrupoMuscular } from
    "../controllers/grupoMuscularController.js";


const router = express.Router();

router.post("/", createGrupoMuscular);
router.put("/:id", updateGrupoMuscular);
router.delete("/:id", deleteGrupoMuscular);
router.get("/:id", getGrupoMuscular);
router.get("/", getGruposMusculares);

export default router;