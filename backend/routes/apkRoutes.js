import express from "express";
import { getApk, addApk, deleteApk } from "../controllers/apkController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getApk);
router.post("/", authMiddleware, addApk);
router.delete("/:id", authMiddleware, deleteApk);

export default router;


