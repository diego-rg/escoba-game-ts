"use client";

import React from "react";
import type { Card as CardType } from "@/types/game";

interface CardProps {
  card: CardType;
  visible: boolean;
  onClick?: (card: CardType) => void;
}

export const Card: React.FC<CardProps> = ({
  card,
  visible = true,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick(card);
  };

  return (
    <div onClick={handleClick}>
      <img
        src={visible && card?.img ? card.img : "/img/cards/back.png"}
        alt={
          visible && card ? `${card.rank} of ${card.suit}` : "Back of a card"
        }
        className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 rounded-lg shadow-md"
      />
    </div>
  );
};
