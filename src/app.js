import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import employeesRouter from "./routes/employees.routes.js";
import customersRouter from "./routes/customers.routes.js";

/*
var corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
*/

const app = express();
app.use(express.json(), morgan("dev"), cors());
app.use(employeesRouter, customersRouter);

export default app;
