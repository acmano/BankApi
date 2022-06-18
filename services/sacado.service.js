import SacadoRepository from '../repositories/sacado.repository.js';

async function createSacado(sacado) {
  return await SacadoRepository.insertSacado(sacado);
}

async function deleteSacado(id) {
  await SacadoRepository.deleteSacado(id);
}

async function updateSacado(sacado) {
  return await SacadoRepository.updateSacado(sacado);
}

async function getSacado(id) {
  return await SacadoRepository.getSacado(id);
}

async function getSacados() {
  return await SacadoRepository.getSacados();
}

export default {
  createSacado,
  deleteSacado,
  updateSacado,
  getSacado,
  getSacados,
}