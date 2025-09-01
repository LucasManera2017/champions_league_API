// src/components/AddPlayerButton.tsx
"use client";

import { useState } from 'react';
import CreatePlayerForm from '@/components/CreatePlayer/CreatePlayerForm';

export default function AddPlayerButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Botão para abrir o modal */}
      <button 
        type="button" 
        onClick={handleOpenModal} 
        className="
          px-6 py-3 border-2 border-lime-400 rounded-lg 
          bg-black/80 text-lime-400 
          shadow-md transition-all duration-300 
          hover:bg-lime-400 cursor-pointer hover:text-black hover:shadow-lime-glow
          "
      >
        Adicionar Novo Jogador
      </button>

      {/* O Modal, que será exibido apenas se isModalOpen for verdadeiro */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative p-8 rounded-lg max-w-lg w-full">
            {/* Botão de fechar o modal */}
            <button
              onClick={handleCloseModal}
              className="absolute top-2 cursor-pointer right-2 text-white text-3xl font-bold p-2"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold mb-4 text-lime-400 neon-text-glow">
              Adicionar Novo Jogador
            </h2>
            {/* O formulário de criação do jogador */}
            <CreatePlayerForm onPlayerCreated={handleCloseModal} />
          </div>
        </div>
      )}
    </>
  );
}