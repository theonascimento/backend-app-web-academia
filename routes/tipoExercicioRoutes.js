import express from "express";
import { createTipoExercicio, deleteTipoExercicio, getTipoExercicio, getTiposExercicios, updateTipoExercicio } from
    "../controllers/tipoExercicioController.js";


const router = express.Router();

router.post("/", createTipoExercicio);
router.put("/:id", updateTipoExercicio);
router.delete("/:id", deleteTipoExercicio);
router.get("/:id", getTipoExercicio);
router.get("/", getTiposExercicios);

export default router;