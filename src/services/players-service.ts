import * as PlayerRepository from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helper";


export const getPlayerService = async () => {

  const playerData = await PlayerRepository.findAllPlayers();
  let response = null;
  if(playerData){
    response = await ok(playerData);
  } else {
    response = await noContent();
  }
  
  return response;
}