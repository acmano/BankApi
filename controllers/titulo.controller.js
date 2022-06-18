import TituloService from '../services/titulo.service.js';

async function createTitulo(req, res, next) {
  try {
    let titulo = req.body;
    if (!titulo.cedente_id || !titulo.sacado_id || !titulo.vencimento || !titulo.valor) {
      throw new Error("Cedente_ID, Sacado_ID, Vencimento e Valor são obrigatórios!")
    }
    titulo = await TituloService.createTitulo(titulo);
    res.send(titulo);
    global.logger.info(`POST /titulo - ${JSON.stringify(titulo)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteTitulo(req, res, next) {
  try {
    let id = req.params.id;
    await TituloService.deleteTitulo(id)
    res.end();
    global.logger.info(`DELETE /titulo - ${id}`);
  } catch (err) {
    next(err);
  }
}

async function updateTitulo(req, res, next) {
  try {
    let titulo = req.body;
    if (!titulo.titulo_id || !titulo.cedente_id || !titulo.sacado_id || !titulo.vencimento || !titulo.valor) {
      throw new Error("ID, Cedente_ID, Sacado_ID, Vencimento e Valor são obrigatórios!")
    }
    titulo = await TituloService.updateTitulo(titulo);
    res.send(titulo);
    global.logger.info(`PUT /titulo - ${JSON.stringify(titulo)}`);
  } catch (err) {
    next(err);
  }
}

async function getTitulo(req, res, next) {
  try {
    let id = req.params.id;
    res.send(await TituloService.getTitulo(id));
    global.logger.info(`GET /titulo/${id}`);
  } catch (err) {
    next(err);
  }
}

async function getTitulos(req, res, next) {
  try {
    res.send(await TituloService.getTitulos());
    global.logger.info(`GET /titulos`);
  } catch (err) {
    next(err);
  }
}

export default {
  createTitulo,
  deleteTitulo,
  updateTitulo,
  getTitulo,
  getTitulos
}