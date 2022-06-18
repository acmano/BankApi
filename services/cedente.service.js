import CedenteRepository from '../repositories/cedente.repository.js';

async function createCedente(cedente) {
  return await CedenteRepository.insertCedente(cedente);
}

async function deleteCedente(id) {
  await CedenteRepository.deleteCedente(id);
}

async function updateCedente(cedente) {
  return await CedenteRepository.updateCedente(cedente);
}

async function getCedente(id) {
  return await CedenteRepository.getCedente(id);
}

async function getCedentes() {
  return await CedenteRepository.getCedentes();
}

export default {
  createCedente,
  deleteCedente,
  updateCedente,
  getCedente,
  getCedentes,
}