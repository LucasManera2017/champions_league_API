import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";
import { StatisticsModel } from "../models/statistics-model";


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

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (player && Object.keys(player).length !== 0) {
    response = await PlayerRepository.insertPlayer(player);

    response = HttpResponse.created();
  } else {
    response = HttpResponse.badRequest();
  }
  return response;
}

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