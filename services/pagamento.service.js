import PagamentoRepository from '../repositories/pagamento.repository.js';

async function createPagamento(pagamento) {
  return await PagamentoRepository.insertPagamento(pagamento);
}

async function deletePagamento(id) {
  await PagamentoRepository.deletePagamento(id);
}

async function updatePagamento(pagamento) {
  return await PagamentoRepository.updatePagamento(pagamento);
}

async function getPagamento(id) {
  return await PagamentoRepository.getPagamento(id);
}

async function getPagamentos() {
  return await PagamentoRepository.getPagamentos();
}

export default {
  createPagamento,
  deletePagamento,
  updatePagamento,
  getPagamento,
  getPagamentos,
}