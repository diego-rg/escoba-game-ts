import { Card } from '@/types/game';
import { DealResult } from '@/types/game';

import { createDeck } from '@/lib/deck';
import { shuffleDeck } from '@/lib/deck';

// Deals cards to multiple recipients immutably
export function dealCards(deck: Card[], amounts: number[]): DealResult {
  let cursor = 0;
  const hands = amounts.map((count) => {
    const hand = deck.slice(cursor, cursor + count);
    cursor += count;
    return hand;
  });

  const remaining = deck.slice(cursor);

  return { hands, remaining };
}


export function startGame() {
  const shuffled = shuffleDeck(createDeck());

  const { hands, remaining } = dealCards(shuffled, [
    3,
    3, 
    4
  ]);

  return {
    deck: shuffled,
    playerHand: hands[0],
    aiHand: hands[1],
    tablePlayable: hands[2],
    tableRemaining: remaining,
  };
}