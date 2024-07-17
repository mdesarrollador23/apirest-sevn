import { Router } from "express";
import { getCustomers, getCustomer, createCustomers, putCustomers, deleteCustomers } from "../controllers/customers_controllers.js";

const router = Router();

router.get("/customers", getCustomers);
router.get("/customer/:id", getCustomer);
router.post("/customers", createCustomers);
router.put("/customers/:id", putCustomers);
router.delete("/customers/:id", deleteCustomers);

export default router;
