"use client";

import React from "react";

import { startGame } from "@/lib/game";

export const Menu: React.FC = () => {
  return (
    <div className="p-3 text-center">
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => startGame()}
      >
        Start Game
      </button>
    </div>
  );
};
