import express from 'express';
import TituloController from '../controllers/titulo.controller.js';

const router = express.Router();

router.post("/", TituloController.createTitulo);
router.delete("/:id", TituloController.deleteTitulo);
router.put("/", TituloController.updateTitulo);
router.get("/", TituloController.getTitulos);
router.get("/:id", TituloController.getTitulo);


export default router;