'use client';

import React from 'react';
import type { Card as CardType } from '@/types/game';

interface CardProps {
    card: CardType;
    visible: boolean;
    onClick?: (card: CardType) => void;
}

export const Card: React.FC<CardProps> = ({ card, visible = true, onClick }) => {
    const handleClick = () => {
        if (onClick) onClick(card);
    };

    return (
        <div onClick={handleClick} >
            {visible ? (
                <img src={card.img} alt={`${card.rank} of ${card.suit}`} />
            ) : (
                <img src="/img/cards/back.png" alt="Back of a card" />
            )}
        </div>
    );
};
