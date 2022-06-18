import express from 'express';
import SacadoController from '../controllers/sacado.controller.js';

const router = express.Router();

router.post("/", SacadoController.createSacado);
router.delete("/:id", SacadoController.deleteSacado);
router.put("/", SacadoController.updateSacado);
router.get("/", SacadoController.getSacados);
router.get("/:id", SacadoController.getSacado);


export default router;