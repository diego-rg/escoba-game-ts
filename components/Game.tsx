"use client";

import React from "react";
import { useState, useEffect } from "react";

import { Table } from "./Table";
import { Menu } from "./Menu";

import { startGame } from "@/lib/game";

import { Card } from "@/types/game";

export const Game: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [deck, setDeck] = useState<Card[]>([]);
  const [tableRemainingCards, setTableRemainingCards] = useState<Card[]>([]);
  const [tablePlayableCards, setTablePlayableCards] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [playerWonCards, setPlayerWonCards] = useState<Card[]>([]);
  const [AIHand, setAIHand] = useState<Card[]>([]);
  const [AIWonCards, setAIWonCards] = useState<Card[]>([]);

  const handleStartGame = () => {
    const game = startGame();

    setDeck(game.deck);
    setPlayerHand(game.playerHand);
    setAIHand(game.aiHand);
    setTablePlayableCards(game.tablePlayable);
    setTableRemainingCards(game.tableRemaining);

    setPlayerWonCards([]);
    setAIWonCards([]);

    setGameStarted(true);
  };

  // Give AI 5 cards from the deck
  const handleTestAIWon5 = () => {
    if (deck.length < 5) return; // safety check

    const newAIWon = [...AIWonCards, ...deck.slice(0, 5)];
    const newDeck = deck.slice(5);

    setAIWonCards(newAIWon);
    setDeck(newDeck);
  };

  const handleTestPlayerWon15 = () => {
    if (deck.length < 15) return; // safety check

    const newPlayerWon = [...playerWonCards, ...deck.slice(0, 15)];
    const newDeck = deck.slice(15);

    setPlayerWonCards(newPlayerWon);
    setDeck(newDeck);
  };

  return (
    <div>
      <Menu handleStartGame={handleStartGame} />

      {/* TEST CONTROL PANEL */}
      <div className="flex gap-4 p-3 justify-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
          onClick={handleTestAIWon5}
        >
          AI Won ×5
        </button>

        <button
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
          onClick={handleTestPlayerWon15}
        >
          Player Won ×15
        </button>
      </div>

      <Table
        tableRemainingCards={tableRemainingCards}
        tablePlayableCards={tablePlayableCards}
        playerHand={playerHand}
        playerWonCards={playerWonCards}
        AIHand={AIHand}
        AIWonCards={AIWonCards}
      />
    </div>
  );
};
