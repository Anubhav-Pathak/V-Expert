import express from "express";
import getHome from "../controllers/client.mjs";
const router = express.Router();
router.get("/", getHome);
export default router;