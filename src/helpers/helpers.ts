import type { TCard } from "../types/types";

export const shuffleCards = (cards: TCard[]): TCard[] => {
    return cards.sort(() => Math.random() - 0.5);
};
