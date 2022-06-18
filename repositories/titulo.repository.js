import { connect } from './db.js';

async function insertTitulo(titulo) {
  const conn = await connect();
  try {
    const sql = "INSERT INTO titulos (cedente_id, sacado_id, vencimento, valor) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [titulo.cedente_id, titulo.sacado_id, titulo.vencimento, titulo.valor];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deleteTitulo(id) {
  const conn = await connect();
  try {
    const sql = "DELETE FROM titulos WHERE titulo_id=$1";
    await conn.query(sql, [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updateTitulo(titulo) {
  const conn = await connect();
  try {
    const sql = "UPDATE titulos SET cedente_id=$2, sacado_id=$3, vencimento=$4, valor=$5 WHERE titulo_id=$1 RETURNING *";
    const values = [titulo.titulo_id, titulo.cedente_id, titulo.sacado_id, titulo.vencimento, titulo.valor];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getTitulo(id) {
  const conn = await connect();
  try {
    const sql = "SELECT titulo_id, cedente_id, sacado_id, vencimento, valor FROM titulos WHERE titulo_id=$1";
    const values = [id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getTitulos() {
  const conn = await connect();
  try {
    const sql = "SELECT titulo_id, cedente_id, sacado_id, vencimento, valor FROM titulos";
    const res = await conn.query(sql);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
} 

export default {
  insertTitulo,
  updateTitulo,
  deleteTitulo,
  getTitulo,
  getTitulos
}