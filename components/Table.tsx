"use client";

import React, { FC } from "react";
import { Card } from "./Card";
import { Card as CardType } from "@/types/game";

interface TableProps {
  tableRemainingCards: CardType[];
  tablePlayableCards: CardType[];
  playerHand: CardType[];
  playerWonCards: CardType[];
  AIHand: CardType[];
  AIWonCards: CardType[];
}

export const Table: FC<TableProps> = ({
  tableRemainingCards,
  tablePlayableCards,
  playerHand,
  playerWonCards,
  AIHand,
  AIWonCards,
}) => {
  const handleCardClick = (card: { id: string }) => {
    console.log("Clicked card ID:", card.id);
  };

  return (
    <div className="w-full flex flex-col gap-8 p-4">
      {/* -----------------------  AI ROW  ----------------------- */}
      <div className="flex justify-between items-start w-full">
        <div id="ai-hand" className="hand-fan w-1/2 flex justify-center">
          {AIHand.map((card, i) => (
            <Card
              key={card.id}
              card={card}
              visible={false}
              onClick={handleCardClick}
            />
          ))}
        </div>

        <div id="ai-won-cards" className="stack w-[80px] h-[120px] relative">
          {AIWonCards.map((card, i) => (
            <div key={card.id} style={{ left: `${i * 4}px` }}>
              <Card card={card} visible={false} onClick={handleCardClick} />
            </div>
          ))}
        </div>
      </div>

      {/* -----------------------  TABLE ROW  ----------------------- */}
      <div className="flex justify-between items-center w-full">
        <div
          id="table-playable-cards"
          className="flex flex-wrap gap-3 max-w-[60%]"
        >
          {tablePlayableCards.map((card) => (
            <Card
              key={card.id}
              card={card}
              visible={true}
              onClick={handleCardClick}
            />
          ))}
        </div>

        <div
          id="table-remaining-cards"
          className="stack w-[80px] h-[120px] relative"
        >
          {tableRemainingCards.map((card, i) => (
            <div key={card.id} style={{ left: `${i * 2}px` }}>
              <Card card={card} visible={false} onClick={handleCardClick} />
            </div>
          ))}
        </div>
      </div>

      {/* -----------------------  PLAYER ROW  ----------------------- */}
      <div className="flex justify-between items-end w-full">
        <div id="player-hand" className="hand-fan w-1/2 flex justify-center">
          {playerHand.map((card, i) => (
            <Card
              key={card.id}
              card={card}
              visible={true}
              onClick={handleCardClick}
            />
          ))}
        </div>

        <div
          id="player-won-cards"
          className="stack w-[80px] h-[120px] relative"
        >
          {playerWonCards.map((card, i) => (
            <div key={card.id} style={{ left: `${i * 4}px` }}>
              <Card card={card} visible={true} onClick={handleCardClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
