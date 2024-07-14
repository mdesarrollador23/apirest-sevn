import "dotenv/config";
import express from "express";
import employeesRouter from "./routes/employees.routes.js";
import customersRouter from "./routes/customers.routes.js";

const app = express();
app.use(express.json());
app.use(employeesRouter, customersRouter);
export default app;
