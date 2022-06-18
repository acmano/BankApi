import { connect } from './db.js';

async function insertSacado(sacado) {
  const conn = await connect();
  try {
    const sql = "INSERT INTO sacados (cpf, nome) VALUES ($1, $2) RETURNING *";
    const values = [sacado.cpf, sacado.nome];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteSacado(id) {
  const conn = await connect();
  try {
    const sql = "DELETE FROM sacados WHERE sacado_id=$1";
    await conn.query(sql, [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateSacado(sacado) {
  const conn = await connect();
  try {
    const sql = "UPDATE sacados SET cpf=$2, nome=$3 WHERE sacado_id=$1 RETURNING *";
    const values = [sacado.sacado_id, sacado.cpf, sacado.nome];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getSacado(id) {
  const conn = await connect();
  try {
    const sql = "SELECT sacado_id, cpf, nome FROM sacados WHERE sacado_id=$1";
    const values = [id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getSacados() {
  const conn = await connect();
  try {
    const sql = "SELECT sacado_id, cpf, nome FROM sacados";
    const res = await conn.query(sql);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
} 

export default {
  insertSacado,
  updateSacado,
  deleteSacado,
  getSacado,
  getSacados
}