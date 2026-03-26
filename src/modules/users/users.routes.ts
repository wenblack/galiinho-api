import { Router } from "express";
import { listUsers } from "./users.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";

const router = Router();

router.get("/", authMiddleware, listUsers);

export default router;
