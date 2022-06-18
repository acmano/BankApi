import CedenteService from '../services/cedente.service.js';

async function createCedente(req, res, next) {
  try {
    let cedente = req.body;
    if (!cedente.cnpj || !cedente.nome ) {
      throw new Error("CNPJ e Nome são obrigatórios!")
    }
    cedente = await CedenteService.createCedente(cedente);
    res.send(cedente);
    global.logger.info(`POST /cedente - ${JSON.stringify(cedente)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteCedente(req, res, next) {
  try {
    let id = req.params.id;
    await CedenteService.deleteCedente(id)
    res.end();
    global.logger.info(`DELETE /cedente - ${id}`);
  } catch (err) {
    next(err);
  }
}

async function updateCedente(req, res, next) {
  try {
    let cedente = req.body;
    if (!cedente.cedente_id || !cedente.cnpj || !cedente.nome) {
      throw new Error("ID, CNPJ e Nome são obrigatórios!")
    }
    cedente = await CedenteService.updateCedente(cedente);
    res.send(cedente);
    global.logger.info(`PUT /cedente - ${JSON.stringify(cedente)}`);
  } catch (err) {
    next(err);
  }
}

async function getCedente(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await CedenteService.getCedente(id));
    global.logger.info(`GET /cedente/${id}`);
  } catch (err) {
    next(err);
  }
}

async function getCedentes(req, res, next) {
  try {
    res.send(await CedenteService.getCedentes());
    global.logger.info(`GET /cedentes`);
  } catch (err) {
    next(err);
  }
}

export default {
  createCedente,
  deleteCedente,
  updateCedente,
  getCedente,
  getCedentes
}