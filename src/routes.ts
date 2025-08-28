import { Router } from "express";
import { createPlayer, getPlayer, getPlayerById } from "./controllers/players-controller";

const router = Router();

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerById);

router.post("/players", createPlayer);

export default router;