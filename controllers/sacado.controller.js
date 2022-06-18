import SacadoService from '../services/sacado.service.js';

async function createSacado(req, res, next) {
  try {
    let sacado = req.body;
    if (!sacado.cpf || !sacado.nome ) {
      throw new Error("CPF e Nome são obrigatórios!")
    }
    sacado = await SacadoService.createSacado(sacado);
    res.send(sacado);
    global.logger.info(`POST /sacado - ${JSON.stringify(sacado)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteSacado(req, res, next) {
  try {
    let id = req.params.id;
    await SacadoService.deleteSacado(id)
    res.end();
    global.logger.info(`DELETE /sacado - ${id}`);
  } catch (err) {
    next(err);
  }
}

async function updateSacado(req, res, next) {
  try {
    let sacado = req.body;
    if (!sacado.sacado_id || !sacado.cpf || !sacado.nome) {
      throw new Error("ID, CPF e Nome são obrigatórios!")
    }
    sacado = await SacadoService.updateSacado(sacado);
    res.send(sacado);
    global.logger.info(`PUT /sacado - ${JSON.stringify(sacado)}`);
  } catch (err) {
    next(err);
  }
}

async function getSacado(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await SacadoService.getSacado(id));
    global.logger.info(`GET /sacado/${id}`);
  } catch (err) {
    next(err);
  }
}

async function getSacados(req, res, next) {
  try {
    res.send(await SacadoService.getSacados());
    global.logger.info(`GET /sacados`);
  } catch (err) {
    next(err);
  }
}

export default {
  createSacado,
  deleteSacado,
  updateSacado,
  getSacado,
  getSacados
}