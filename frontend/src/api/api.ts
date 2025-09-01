// src/lib/api.ts

import axios from 'axios';
import { Player } from '@/types/player';
import { StatisticsModel } from '@/types/statistics'; 

const API_BASE_URL = 'http://localhost:3333/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// POST: Cria um novo jogador
export const createPlayer = async (player: Omit<Player, 'id'>): Promise<void> => {
  try {
    // A requisição POST envia o objeto do jogador para o endpoint /players
    await api.post('/players', player);
    console.log("Jogador criado com sucesso!");
  } catch (error) {
    console.error("Erro ao criar jogador:", error);
    // Você pode lançar o erro novamente ou retornar um valor específico para lidar com ele no front-end
    throw new Error("Não foi possível criar o jogador.");
  }
};

// DELETE: Deleta um jogador por ID
export const deletePlayer = async (id: number): Promise<void> => {
  try {
    await api.delete(`/players/${id}`);
  } catch (error) {
    console.error(`Erro ao deletar jogador com ID ${id}:`, error);
  }
};

// PUT/PATCH: Atualiza as estatísticas de um jogador
export const updatePlayerStatistics = async (id: number, statistics: StatisticsModel): Promise<void> => {
  try {
    await api.put(`/players/${id}`, { statistics }); // Assumindo que sua API aceita a atualização de estatísticas assim
  } catch (error) {
    console.error(`Erro ao atualizar jogador com ID ${id}:`, error);
  }
};

export default api;