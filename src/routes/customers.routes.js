import { Router } from "express";
import { getCustomers } from "../controllers/customers_controllers.js";

const router = Router();

router.get("/customers", getCustomers);
router.get("/customers/id:", (req, res) => {});
router.post("/customers", (req, res) => {});
router.put("/customers/id:", (req, res) => {});
router.delete("/customers/id:", (req, res) => {});

export default router;
