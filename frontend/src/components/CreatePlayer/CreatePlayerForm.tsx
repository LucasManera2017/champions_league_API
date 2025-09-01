// src/components/CreatePlayerForm/CreatePlayerForm.tsx
"use client";

import { useState } from 'react';
import { createPlayer } from '@/api/api';
import { Player } from '@/types/player';

interface CreatePlayerFormProps {
  onPlayerCreated: () => void; // Adicione esta nova prop
}

export default function CreatePlayerForm({ onPlayerCreated }: CreatePlayerFormProps) {
  const [formData, setFormData] = useState<Omit<Player, 'id'>>({
    name: '',
    club: '',
    nationality: '',
    position: '',
    image: '',
    statistics: {
      Overall: 0,
      Pace: 0,
      Shooting: 0,
      Passing: 0,
      Dribbling: 0,
      Defending: 0,
      Physical: 0,
    },
  });

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPlayer(formData);
      alert('Jogador criado com sucesso!');
      onPlayerCreated();
    } catch (error: any) {
      alert(error.message);
    }
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStatisticsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      statistics: {
        ...prevData.statistics,
        [name]: Number(value),
      },
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-lg bg-black/70 shadow-2xl border-2 border-fuchsia-500 neon-border-glow">
      {/* Campos de Informações Básicas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <label className="flex flex-col text-lime-400">
          Nome:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="mt-1 p-2 rounded bg-gray-800 text-white border border-lime-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
        </label>
        <label className="flex flex-col text-lime-400">
          Clube:
          <input type="text" name="club" value={formData.club} onChange={handleChange} required className="mt-1 p-2 rounded bg-gray-800 text-white border border-lime-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
        </label>
        <label className="flex flex-col text-lime-400">
          Nacionalidade:
          <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required className="mt-1 p-2 rounded bg-gray-800 text-white border border-lime-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
        </label>
        <label className="flex flex-col text-lime-400">
          Posição:
          <input type="text" name="position" value={formData.position} onChange={handleChange} required className="mt-1 p-2 rounded bg-gray-800 text-white border border-lime-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
        </label>
        <label className="flex flex-col text-lime-400 md:col-span-2">
          URL da Imagem:
          <input type="url" name="image" value={formData.image} onChange={handleChange} required className="mt-1 p-2 rounded bg-gray-800 text-white border border-lime-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
        </label>
      </div>

      {/* Título das Estatísticas */}
      <h3 className="text-xl font-bold mb-4 text-fuchsia-400 neon-text-glow">Estatísticas</h3>

      {/* Campos de Estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {Object.keys(formData.statistics).map(key => (
          <label key={key} className="flex flex-col text-lime-400">
            {key}:
            <input
              type="number"
              name={key}
              value={formData.statistics[key as keyof typeof formData.statistics]}
              onChange={handleStatisticsChange}
              required
              className="mt-1 p-2 rounded bg-gray-800 text-white border border-lime-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </label>
        ))}
      </div>

      {/* Botão de Envio */}
      <button
        type="submit"
        className="mt-4 w-full px-6 py-3 bg-lime-400 text-black font-bold rounded-lg neon-button-glow cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        Criar Jogador
      </button>
    </form>
  );
}