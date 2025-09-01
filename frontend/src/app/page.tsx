import api from '@/api/api';
import { Player } from '@/types/player';
import PlayerList from '@/components/PlayerList/PlayerList';
import Image from 'next/image';
import backgroundImage from '@/assets/img/background.png';
import CreatePlayerForm from '@/components/CreatePlayer/CreatePlayerForm';
import AddPlayerButton from '@/components/AddPlayerButton/AddPlayerButton';


async function getPlayers(): Promise<Player[]> {
  try {
    const response = await api.get('/players');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar jogadores:', error);
    return [];
  }
}

export default async function Page() {
  const players = await getPlayers();

  return (
    <main className='p-4  mx-auto bg-black/70 min-h-screen relative'>
      <div className='max-w-[1280px] mx-auto'><Image className='absolute inset-0 object-cover w-full h-full -z-10' src={backgroundImage} alt="Fundo do site" />
        <PlayerList players={players} /></div>
        <div className="flex justify-center my-10">
        <AddPlayerButton />
      </div>
   
    </main>
  );
}