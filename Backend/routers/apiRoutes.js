import express from "express";
import { logger } from "../middleware/logger.js";


const router = express.Router();


router.get("/status", (req, res) => {
  logger.info("Status API called");
  res.json({ status: "API is running", timestamp: new Date() });
});


router.get("/error", (req, res) => {
  const err = new Error("Simulated server error");
  logger.error(err.message);
  res.status(500).json({ error: err.message });
});

export default router;
