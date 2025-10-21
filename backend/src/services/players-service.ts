import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";
import fs from 'fs';
import path from 'path';

export const getPlayerService = async () => {

  const playerData = await PlayerRepository.findAllPlayers();
  let response = null;
  if (playerData) {
    response = await HttpResponse.ok(playerData);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
}

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }
  return response;
}


const playersFilePath = path.join(__dirname, '../data/players.json');

// Função para ler o arquivo JSON e retornar os dados
const getPlayers = () => {
  const data = fs.readFileSync(playersFilePath, 'utf8');
  return JSON.parse(data);
};

// Função para escrever os dados no arquivo JSON
const savePlayers = (players: any[]) => {
  fs.writeFileSync(playersFilePath, JSON.stringify(players, null, 2), 'utf8');
};

export const createPlayerService = async (playerData: any) => {
  try {
    const players = getPlayers();

    // 1. Encontrar o próximo ID sequencial
    const lastPlayer = players.length > 0 ? players[players.length - 1] : null;
    const nextId = lastPlayer ? lastPlayer.id + 1 : 1;

    // 2. Adicionar o novo jogador com o ID
    const newPlayer = { ...playerData, id: nextId };
    players.push(newPlayer);

    // 3. Salvar o array atualizado no arquivo JSON
    savePlayers(players);

    return { message: "Jogador criado com sucesso!", player: newPlayer };
  } catch (error) {
    console.error("Erro ao criar jogador:", error);
    throw new Error("Erro ao salvar jogador no arquivo.");
  }
};


// export const createPlayerService = async (player: PlayerModel) => {
//   let response = null;

//   if (player && Object.keys(player).length !== 0) {
//     response = await PlayerRepository.insertPlayer(player);

//     response = HttpResponse.created();
//   } else {
//     response = HttpResponse.badRequest();
//   }
//   return response;
// }

export const deletePlayerService = async (id: number) => {
  let response = null;
  let player = await PlayerRepository.findPlayerById(id);

  await PlayerRepository.deleteOnePlayer(id);

  if (!player) {
    response = HttpResponse.badRequest();
  } else {
    response = HttpResponse.ok({ message: "deleted" });
  }

  return response;
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
  const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
  let response = null;
  let player = await PlayerRepository.findPlayerById(id);

  if (!player) {
    response = HttpResponse.badRequest();
  } else {
    response = HttpResponse.ok(data);
  }
  return response;
}