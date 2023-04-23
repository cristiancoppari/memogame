import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import type { TCard } from "../../types/types";

import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

import { shuffleCards, getRandomCards } from "../../helpers/helpers";

type GameState = {
    cachedCards: TCard[];
    cards: TCard[];

    points: number;
    errors: number;

    firstSelection: string | null | undefined | TCard;
    secondSelection: string | null | undefined | TCard;

    isCompleted: boolean;
    isBlocked: boolean;
};

const initialState: GameState = {
    cachedCards: [],
    cards: [],

    points: 0,
    errors: 0,

    firstSelection: null,
    secondSelection: null,

    isCompleted: false,
    isBlocked: false,
};

const getCard = (cards: TCard[], id: string): string | undefined => {
    return cards.find((card) => card.id === id)?.matchId;
};

export const gameSlice = createSlice({
    name: "game",

    initialState,

    reducers: {
        addPoint: (state) => {
            state.points += 1;
        },

        addError: (state) => {
            state.errors += 1;
        },

        flipCard: (state, action: PayloadAction<string>) => {
            // 1) flip the first card
            if (!state.firstSelection) {
                // set the matchId to first selection
                state.firstSelection = getCard(state.cards, action.payload);
            } else {
                // 2) flip the second card
                state.secondSelection = getCard(state.cards, action.payload);
            }

            // set isFlipped to true in the matching card
            state.cards = state.cards.map((card) => {
                if (card.id === action.payload) {
                    return { ...card, isSelected: true };
                }

                return card;
            });
        },

        cardsDoesntMatch: (state) => {
            state.cards = state.cards.map((card) => {
                if (
                    card.matchId === state.firstSelection ||
                    card.matchId === state.secondSelection
                ) {
                    return { ...card, isSelected: false };
                }

                return card;
            });

            // unflip the cards
            state.firstSelection = null;
            state.secondSelection = null;
            state.errors += 1;
        },

        cardsMatch: (state) => {
            state.cards = state.cards.map((card) => {
                if (
                    card.matchId === state.firstSelection ||
                    card.matchId === state.secondSelection
                ) {
                    return { ...card, isSelected: false, isMatched: true };
                }

                return card;
            });

            // unflip the cards
            state.firstSelection = null;
            state.secondSelection = null;
            state.points += 1;

            // check if the game is completed
            state.isCompleted = state.cards.every((card) => card.isMatched);
        },

        resetGameState: (state) => {
            // set the initial state
            state.cards = initialState.cards;
            state.points = initialState.points;
            state.errors = initialState.errors;
            state.firstSelection = initialState.firstSelection;
            state.secondSelection = initialState.secondSelection;
            state.isCompleted = initialState.isCompleted;
            state.isBlocked = initialState.isBlocked;
        },

        setIsBlocked: (state, action) => {
            // set the isBlocked state to the action payload
            state.isBlocked = action.payload;
        },

        setCards: (state, action: PayloadAction<TCard[]>) => {
            // save the cards from the api
            state.cachedCards = action.payload;
        },

        initGame: (state) => {
            // take 6 random cards from the shuffled array
            const randomCards = getRandomCards(state.cachedCards, 4);
            // duplicate them the get the matching pairs
            const duplicatedCards = [...randomCards, ...randomCards];
            // shuffle the cards
            const shuffledCards = shuffleCards(duplicatedCards);
            // add the unique id to the card
            const cards = shuffledCards.map((card) => ({
                ...card,
                id: uuidv4(),
            }));

            state.cards = cards;
        },
    },
});

export const {
    addPoint,
    addError,
    setCards,
    flipCard,
    cardsDoesntMatch,
    cardsMatch,
    setIsBlocked,
    resetGameState,
    initGame,
} = gameSlice.actions;

export const getPoints = (state: RootState): number => state.game.points;
export const getErrors = (state: RootState): number => state.game.errors;
export const getCards = (state: RootState): TCard[] => state.game.cards;
export const getFirstSelection = (
    state: RootState,
): string | null | undefined | TCard => state.game.firstSelection;
export const getSecondSelection = (
    state: RootState,
): string | null | undefined | TCard => state.game.secondSelection;
export const getIsBlocked = (state: RootState): boolean => state.game.isBlocked;
export const getIsCompleted = (state: RootState): boolean =>
    state.game.isCompleted;

export default gameSlice.reducer;
