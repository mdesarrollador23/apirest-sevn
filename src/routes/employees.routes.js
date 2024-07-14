import { Router } from "express";
import { getEmployees } from "../controllers/employees_controllers.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/id:", (req, res) => {});
router.post("/employees", (req, res) => {});
router.put("/employees/id:", (req, res) => {});
router.delete("/employees/id:", (req, res) => {});

export default router;
