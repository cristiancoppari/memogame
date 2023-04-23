import type { TCard } from "../types/types";

export const shuffleCards = (cards: TCard[]): TCard[] => {
    return [...cards].sort(() => Math.random() - 0.5);
};

export const getRandomCards = (cards: TCard[], amount: number): TCard[] => {
    const randomCards: TCard[] = [];

    while (randomCards.length < amount) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        const randomCard = cards[randomIndex];

        if (!randomCards.includes(randomCard)) {
            randomCards.push(randomCard);
        }
    }

    return randomCards;
};
