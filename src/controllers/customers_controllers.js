import { getConn } from "../database/conn.js";
import sql from "mssql";
import { hash } from "bcrypt";

//GET
export const getCustomers = async (req, res) => {
  try {
    let pool = await getConn();
    let result = await pool.request().query("SELECT * FROM DBO.CUSTOMERS");
    pool.close();
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET ONE
export const getCustomer = async (req, res) => {
  try {
    let pool = await getConn();
    let result = await pool.request().query("SELECT * FROM DBO.CUSTOMERS");
    pool.close();
    res.status(200).json(result.recordset);
  } catch (err) {
    res.status(500).json(err);
  }
};

//POST
export const createCustomers = async (req, res) => {
  try {
    let pool = await getConn();
    let result = await pool
      .request()
      .input("FISCAL_IDENTITY", sql.VarChar, req.body.FISCAL_IDENTITY)
      .input("FIRST_NAME", sql.VarChar, req.body.FIRST_NAME)
      .input("LAST_NAME", sql.VarChar, req.body.LAST_NAME)
      .input("OFFICE_PHONE", sql.VarChar, req.body.OFFICE_PHONE)
      .input("MOBILE_PHONE", sql.VarChar, req.body.MOBILE_PHONE)
      .input("EMAIL", sql.VarChar, req.body.EMAIL)
      .input("ADDRESS", sql.VarChar, req.body.ADDRESS)
      .input("USERNAME", sql.VarChar, req.body.FISCAL_IDENTITY)
      .input("HAS_PASSWORD", sql.VarChar, await hash(req.body.HAS_PASSWORD, 10))
      .output("CUSTOMERS_ID", sql.Int)
      .execute("SP_CREATE_CUSTOMERS");
    pool.close();
    res.status(201).json({
      id: result.output.CUSTOMERS_ID,
      FISCAL_IDENTITY: req.body.FISCAL_IDENTITY,
      LAST_NAME: req.body.FIRST_NAME,
      OFFICE_PHONE: req.body.OFFICE_PHONE,
      MOBILE_PHONE: req.body.MOBILE_PHONE,
      EMAIL: req.body.EMAIL,
      ADDRESS: req.body.ADDRESS,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//PUT
export const putCustomers = async (req, res) => {
  try {
    let pool = await getConn();
    await pool
      .request()
      .input("ID", sql.Int, req.params.id)
      .input("FIRST_NAME", sql.VarChar, req.body.FIRST_NAME)
      .input("LAST_NAME", sql.VarChar, req.body.LAST_NAME)
      .input("OFFICE_PHONE", sql.VarChar, req.body.OFFICE_PHONE)
      .input("MOBILE_PHONE", sql.VarChar, req.body.MOBILE_PHONE)
      .input("EMAIL", sql.VarChar, req.body.EMAIL)
      .input("ADDRESS", sql.VarChar, req.body.ADDRESS)
      .execute("SP_UPDATE_CUSTOMERS_BY_ID");
    pool.close();
    res.status(200).json("El cliente fue actualizado.");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

//DELETE
export const deleteCustomers = async (req, res) => {
  res.status(200).json("En estos momentos no podemos borrar clientes.");
};
