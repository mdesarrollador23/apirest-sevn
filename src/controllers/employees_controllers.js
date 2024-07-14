import { getConn } from "../database/conn.js";

export const getEmployees = async (req, res) => {
  const pool = await getConn();
  const result = await pool.request().query("SELECT * FROM DBO.EMPLOYEES");
  res.json(result.recordset);
};
