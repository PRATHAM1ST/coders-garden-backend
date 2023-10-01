import express from "express";
import controllers from "../controllers/whoami";
import errorHandler from "../components/errorHandler";

const router = express.Router();

router.get("/", errorHandler(controllers.GET));

export default router;
