'use client';

import React from 'react';
import { createDeck } from '@/lib/deck';
import { Card } from './Card';

export const Table: React.FC = () => {
    const deck = createDeck();

    const handleCardClick = (card: { id: string; }) => {
        console.log('Clicked card ID:', card.id);
    };

    return (
        <div>
            {deck.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    visible={true}
                    onClick={handleCardClick}
                />
            ))}
        </div>
    );
};
