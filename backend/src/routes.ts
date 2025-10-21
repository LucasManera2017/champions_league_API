import { Router } from "express";
import { createPlayer, deletePlayer, getPlayer, getPlayerById, updatePlayer } from "./controllers/players-controller";
import { getClubs } from "./controllers/clubs-controller";

const router = Router();

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerById);
router.post("/players", createPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);

router.get("/clubs", getClubs);
export default router;