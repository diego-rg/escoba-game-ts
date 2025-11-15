"use client";

import React, { FC } from "react";

interface MenuProps {
  handleStartGame: () => void;
}

export const Menu: FC<MenuProps> = ({ handleStartGame }) => {
  return (
    <div className="p-3 text-center">
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleStartGame}
      >
        New Game
      </button>
    </div>
  );
};
