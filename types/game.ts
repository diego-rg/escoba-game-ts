export type Suit = 'coins' | 'cups' | 'swords' | 'clubs';
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 10 | 11 | 12;
export type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Card {
    suit: Suit;
    rank: Rank;
    value: Value,
    id: string,
    img: string;
}

export interface DealResult {
  hands: Card[][];
  remaining: Card[];
}