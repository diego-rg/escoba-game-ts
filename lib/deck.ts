import type { Card, Suit, Rank, Value } from '@/types/game';

const SUITS: Suit[] = ['coins', 'cups', 'swords', 'clubs'];
const RANKS: Rank[] = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12];

// Uses mapping for clean code (avoids using switch)
const rankToValueMap: Record<Rank, Value> = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    10: 8,
    11: 9,
    12: 10,
};

function getValue(rank: Rank): Value {
    return rankToValueMap[rank];
}

// flatMap: creates a multidimensional array (map: one nested array for each suit) and merges it into one dimensional array (flat)
export function createDeck(): Card[] {
    return SUITS.flatMap((suit) =>
        RANKS.map((rank) => ({
            suit,
            rank,
            value: getValue(rank),
            id: `${suit}-${rank}`,
            img: `/img/cards/${suit}${rank}.png`
        }))
    );
}

// Pure function: creates a copy of the array without altering the original to preserve inmutability
export function shuffleDeck<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}