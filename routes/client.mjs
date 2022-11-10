import express from "express";
import getHome,{getCart,getServices} from "../controllers/client.mjs";
const router = express.Router();
router.get("/", getHome);
router.get("/cart",getCart);
router.get("/services",getServices);
export default router;
