import "dotenv/config";
import express from "express";
import employeesRouter from "./routes/employees.routes.js";

const app = express();
app.use(express.json());
app.use(employeesRouter);
export default app;
