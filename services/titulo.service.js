import TituloRepository from '../repositories/titulo.repository.js';

async function createTitulo(titulo) {
  return await TituloRepository.insertTitulo(titulo);
}

async function deleteTitulo(id) {
  await TituloRepository.deleteTitulo(id);
}

async function updateTitulo(titulo) {
  return await TituloRepository.updateTitulo(titulo);
}

async function getTitulo(id) {
  return await TituloRepository.getTitulo(id);
}

async function getTitulos() {
  return await TituloRepository.getTitulos();
}

export default {
  createTitulo,
  deleteTitulo,
  updateTitulo,
  getTitulo,
  getTitulos,
}