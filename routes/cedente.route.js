import express from 'express';
import CedenteController from '../controllers/cedente.controller.js';

const router = express.Router();

router.post("/", CedenteController.createCedente);
router.delete("/:id", CedenteController.deleteCedente);
router.put("/", CedenteController.updateCedente);
router.get("/", CedenteController.getCedentes);
router.get("/:id", CedenteController.getCedente);


export default router;