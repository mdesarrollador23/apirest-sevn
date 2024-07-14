import { getConn } from "../database/conn.js";

export const getCustomers = async (req, res) => {
  const pool = await getConn();
  const result = await pool.request().query("SELECT * FROM DBO.CUSTOMERS");
  res.json(result.recordset);
};
