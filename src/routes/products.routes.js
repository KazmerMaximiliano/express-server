import { Router } from "express";
import { index, show } from "../controllers/products.controller.js";

const router = Router();

router.get("/productos", index);
router.get("/productoRandom", show);

export default router;
