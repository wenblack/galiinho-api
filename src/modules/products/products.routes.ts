import { Router } from "express";
import { createProduct, listProducts } from "./products.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.post("/", authMiddleware, createProduct);
router.get("/", listProducts);

export default router;
