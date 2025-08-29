import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import fs from 'fs/promises';

const loadDatabase = async (): Promise<PlayerModel[]> => {
  const data = await fs.readFile("src/data/players.json", "utf-8");
  return JSON.parse(data) as PlayerModel[];
};

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  return loadDatabase();
}

export const findPlayerById = async (id: number): Promise<PlayerModel | null> => {
  const players = await loadDatabase();
  const player = players.find(player => player.id === id);
  return player || null;
}

export const insertPlayer = async (player: PlayerModel): Promise<void> => {
  const database = await loadDatabase();
  database.push(player);
}

export const deleteOnePlayer = async (id: number) => {
  const database = await loadDatabase();
  const index = database.findIndex(player => player.id === id);
  if (index !== -1) {
    database.splice(index, 1);
  }
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel | null> => {
  const database = await loadDatabase();
  const playerIndex = database.findIndex(player => player.id === id);
  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
    return database[playerIndex];
  }
  return null;
}