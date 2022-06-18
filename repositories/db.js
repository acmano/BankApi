import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString: "postgres://sqrnbszt:sNwI8rY_Ji19s27_GKcJFMJHPZWDsOef@kesavan.db.elephantsql.com/sqrnbszt"
  });
  global.connection = pool;
  return pool.connect();
}

export {
  connect
}