import { connect } from './db.js';

async function insertPagamento(pagamento) {
  const conn = await connect();
  try {
    const sql = "INSERT INTO pagamentos (titulo_id, data, valor) VALUES ($1, $2, $3) RETURNING *";
    const values = [pagamento.titulo_id, pagamento.data, pagamento.valor];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function deletePagamento(id) {
  const conn = await connect();
  try {
    const sql = "DELETE FROM pagamentos WHERE pagamento_id=$1";
    await conn.query(sql, [id]);
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function updatePagamento(pagamento) {
  const conn = await connect();
  try {
    const sql = "UPDATE pagamentos SET titulo_id=$2, data=$3, valor=$4 WHERE pagamento_id=$1 RETURNING *";
    const values = [pagamento.pagamento_id, pagamento.titulo_id, pagamento.data, pagamento.valor];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getPagamento(id) {
  const conn = await connect();
  try {
    const sql = "SELECT pagamento_id, titulo_id, data, valor FROM pagamentos WHERE pagamento_id=$1";
    const values = [id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
}

async function getPagamentos() {
  const conn = await connect();
  try {
    const sql = "SELECT pagamento_id, titulo_id, data, valor FROM pagamentos";
    const res = await conn.query(sql);
    return res.rows;
  } catch (err) {
    throw err;
  } finally {
    conn.release();
  }
} 

export default {
  insertPagamento,
  updatePagamento,
  deletePagamento,
  getPagamento,
  getPagamentos
}