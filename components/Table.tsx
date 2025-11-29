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
    <div className="flex flex-col">
      <div className="flex justify-between flex-row p-5">
        <div id="ai-hand" className="flex">
          {(AIHand ?? []).map((card) => (
            <Card
              key={card.id}
              card={card}
              visible={false}
              onClick={handleCardClick}
            />
          ))}
        </div>
        <div
          id="ai-won-cards"
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 relative"
        >
          {(AIWonCards ?? []).map((card) => (
            <Card
              key={card.id}
              card={card}
              visible={false}
              onClick={handleCardClick}
              className="absolute top-0 left-0"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between flex-row p-5">
        <div id="table-playable-cards" className="flex flex-row flex-wrap">
          {(tablePlayableCards ?? []).map((card) => (
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
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 relative min-w-20 sm:min-w-24 md:min-w-28 lg:min-w-32 xl:min-w-36"
        >
          {(tableRemainingCards ?? []).map((card) => (
            <Card
              key={card.id}
              card={card}
              visible={false}
              onClick={handleCardClick}
              className="absolute top-0 left-0"
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between flex-row p-5">
        <div id="player-hand" className="flex">
          {(playerHand ?? []).map((card) => (
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
          className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 relative"
        >
          {(playerWonCards ?? []).map((card) => (
            <Card
              key={card.id}
              card={card}
              visible={false}
              onClick={handleCardClick}
              className="absolute top-0 left-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
