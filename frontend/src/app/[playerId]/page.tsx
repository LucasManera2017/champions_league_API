// app/[playerId]/page.tsx

import api from '@/api/api';
import { Player } from '@/types/player';

async function getPlayerById(id: string): Promise<Player> {
  try {
    const response = await api.get(`/players/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar jogador:', error);
    throw new Error('Jogador não encontrado.');
  }
}

export default async function PlayerPage({ params }: { params: { playerId: string } }) {
  const player = await getPlayerById(params.playerId);

  return (
    <main>
      <h1>{player.name}</h1>
      <p><strong>Clube:</strong> {player.club}</p>
      <p><strong>Nacionalidade:</strong> {player.nationality}</p>
      <p><strong>Posição:</strong> {player.position}</p>
      <h2>Estatísticas</h2>
      <ul>
        <li><strong>Overall:</strong> {player.statistics.Overall}</li>
        <li><strong>Pace:</strong> {player.statistics.Pace}</li>
        <li><strong>Shooting:</strong> {player.statistics.Shooting}</li>
        {/* Adicione mais estatísticas aqui */}
      </ul>
    </main>
  );
}