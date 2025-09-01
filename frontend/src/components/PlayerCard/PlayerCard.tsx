import React from 'react';
import { Player } from '@/types/player'; // Importa a interface do jogador
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


// Define as propriedades (props) que o componente vai receber
interface PlayerCardProps {
  player: Player;
}

// Componente funcional PlayerCard
const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <Link href={`/${player.id}`} className="
      border-2 border-fuchsia-500 rounded-3xl shadow-lg
      w-64 bg-black/80 text-lime-400 cursor-pointer
      p-4 relative overflow-hidden
      neon-border-glow neon-text-glow
      hover:scale-105 transition-transform duration-300 ease-in-out
    ">
      {/* Elemento para o brilho de fundo, se quiser um efeito mais intenso */}
      <div className="absolute inset-0 bg-fuchsia-800 opacity-20 blur-md -z-10"></div>

      <div className='flex items-center justify-between'><h3 className='text-xl font-mono mb-2 text-fuchsia-400'>
        {player.name}
      </h3>
        <Avatar>
          <AvatarImage src={player.image} alt={player.name} />
          <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <p className='text-sm mb-1'>
        <strong className='text-lime-300 font-mono'>Clube:</strong> {player.club}
      </p>
      <p className='text-sm mb-1'>
        <strong className='text-lime-300 font-mono'>Posição:</strong> {player.position}
      </p>
      <p className='text-sm mb-3'>
        <strong className='text-lime-300 font-mono'>Nacionalidade:</strong> {player.nationality}
      </p>
      <hr className='border-fuchsia-600 my-3' />
      <h4 className='text-lg font-mono mb-2 text-fuchsia-400'>Estatísticas</h4>
      <ul>
        <li className='text-sm mb-1'>
          <strong className='text-lime-300 font-mono'>Overall:</strong> {player.statistics.Overall}
        </li>
        <li className='text-sm mb-1'>
          <strong className='text-lime-300 font-mono'>Pace:</strong> {player.statistics.Pace}
        </li>
        <li className='text-sm mb-1'>
          <strong className='text-lime-300 font-mono'>Shooting:</strong> {player.statistics.Shooting}
        </li>
        {/* Adicione mais estatísticas aqui se desejar */}
      </ul>
    </Link>
  );
};

export default PlayerCard;