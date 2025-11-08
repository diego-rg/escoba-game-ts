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
            <div id='ai-hand'>AI: Hand</div>
            <div id='ai-won-cards'>AI: Won Cards</div>

            <div id='table-cards'>Table: Playable Cards
                {deck.map((card) => (
                    <Card
                        key={card.id}
                        card={card}
                        visible={true}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
            <div id='table-playable-cards'></div>

            <div id='player-hand'>Player: Hand</div>
            <div id='player-won-cards'>Player: Won Cards</div>
        </div>
    );
};
