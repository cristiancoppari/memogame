import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import type { TCard } from "../../types/types";

import { createSlice } from "@reduxjs/toolkit";

type GameState = {
    cards: TCard[];
    points: number;
    errors: number;
    firstSelection: string | null | undefined | TCard;
    secondSelection: string | null | undefined | TCard;
    isCompleted: boolean;
    isBlocked: boolean;
};

const initialState: GameState = {
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
        },
        shuffleCards: (state) => {
            // shuffle the cards
        },
        setGameCompleted: (state) => {
            // set the game as completed
        },
        setInitialState: (state) => {
            // set the initial state
        },
        setIsBlocked: (state, action) => {
            // set the isBlocked state to the action payload
            state.isBlocked = action.payload;
        },
        setCards: (state, action: PayloadAction<TCard[]>) => {
            // set the cards
            state.cards = action.payload;
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

export default gameSlice.reducer;
