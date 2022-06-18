import PagamentoService from '../services/pagamento.service.js';

async function createPagamento(req, res, next) {
  try {
    let pagamento = req.body;
    if (!pagamento.titulo_id || !pagamento.data || !pagamento.valor) {
      throw new Error("Titulo_ID, Data e Valor são obrigatórios!")
    }
    pagamento = await PagamentoService.createPagamento(pagamento);
    res.send(pagamento);
    global.logger.info(`POST /pagamento - ${JSON.stringify(pagamento)}`);
  } catch (err) {
    next(err);
  }
}

async function deletePagamento(req, res, next) {
  try {
    let id = req.params.id;
    await PagamentoService.deletePagamento(id)
    res.end();
    global.logger.info(`DELETE /pagamento - ${id}`);
  } catch (err) {
    next(err);
  }
}

async function updatePagamento(req, res, next) {
  try {
    let pagamento = req.body;
    if (!pagamento.pagamento_id || !pagamento.titulo_id || !pagamento.data || !pagamento.valor) {
      throw new Error("ID, Titulo_ID, Data e Valor são obrigatórios!")
    }
    pagamento = await PagamentoService.updatePagamento(pagamento);
    res.send(pagamento);
    global.logger.info(`PUT /pagamento - ${JSON.stringify(pagamento)}`);
  } catch (err) {
    next(err);
  }
}

async function getPagamento(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await PagamentoService.getPagamento(id));
    global.logger.info(`GET /pagamento/${id}`);
  } catch (err) {
    next(err);
  }
}

async function getPagamentos(req, res, next) {
  try {
    res.send(await PagamentoService.getPagamentos());
    global.logger.info(`GET /pagamentos`);
  } catch (err) {
    next(err);
  }
}

export default {
  createPagamento,
  deletePagamento,
  updatePagamento,
  getPagamento,
  getPagamentos
}