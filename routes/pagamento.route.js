import express from 'express';
import PagamentoController from '../controllers/pagamento.controller.js';

const router = express.Router();

router.post("/", PagamentoController.createPagamento);
router.delete("/:id", PagamentoController.deletePagamento);
router.put("/", PagamentoController.updatePagamento);
router.get("/", PagamentoController.getPagamentos);
router.get("/:id", PagamentoController.getPagamento);


export default router;