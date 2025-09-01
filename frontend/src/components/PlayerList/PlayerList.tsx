"use client";

import { useState } from 'react';
import { Player } from '@/types/player';
import PlayerCard from '@/components/PlayerCard/PlayerCard';
import Pagination from '@/components/Pagination/Pagination';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function PlayerList({ players }: { players: Player[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = players.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      {currentPosts.length > 0 ? (
        <>
          <div className='flex flex-wrap gap-20 justify-center items-center p-10'>
            {currentPosts.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
          <div className='flex items-center justify-center'>
            <Pagination
              totalPosts={players.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </>
      ) : (
        <p>Nenhum jogador encontrado.</p>
      )}
    </>
  );
}