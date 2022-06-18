import { connect } from './db.js';

async function insertCedente(cedente) {
  const conn = await connect();
  try {
    const sql = "INSERT INTO cedentes (cnpj, nome) VALUES ($1, $2) RETURNING *";
    const values = [cedente.cnpj, cedente.nome];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteCedente(id) {
  const conn = await connect();
  try {
    const sql = "DELETE FROM cedentes WHERE cedente_id=$1";
    await conn.query(sql, [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateCedente(cedente) {
  const conn = await connect();
  try {
    const sql = "UPDATE cedentes SET cnpj=$2, nome=$3 WHERE cedente_id=$1 RETURNING *";
    const values = [cedente.cedente_id, cedente.cnpj, cedente.nome];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getCedente(id) {
  const conn = await connect();
  try {
    const sql = "SELECT cedente_id, cnpj, nome FROM cedentes WHERE cedente_id=$1";
    const values = [id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getCedentes() {
  const conn = await connect();
  try {
    const sql = "SELECT cedente_id, cnpj, nome FROM cedentes";
    const res = await conn.query(sql);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
} 

export default {
  insertCedente,
  updateCedente,
  deleteCedente,
  getCedente,
  getCedentes
}