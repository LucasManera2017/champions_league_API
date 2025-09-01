// src/interfaces/player.ts

export interface Player {
  id: number;
  name: string;
  club: string;
  nationality: string;
  position: string;
  image: string;
  statistics: {
    Overall: number;
    Pace: number;
    Shooting: number;
    Passing: number;
    Dribbling: number;
    Defending: number;
    Physical: number;
  };
}