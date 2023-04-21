import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import type { TCard } from "../../types/types";

import { createSlice } from "@reduxjs/toolkit";

type GameState = {
    cards: TCard[];
    points: number;
    errors: number;
    firstSelection: number | null;
    secondSelection: number | null;
    gameCompleted: boolean;
};

const initialState: GameState = {
    cards: [],
    points: 0,
    errors: 0,
    firstSelection: null,
    secondSelection: null,
    gameCompleted: false,
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
        flipCard: (state, action: PayloadAction<number>) => {
            // flip the cards according to the id
        },
        unflipCards: (state) => {
            // unflip the cards
        },
        checkMatch: (state) => {
            // check if the cards match
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
        setCards: (state, action: PayloadAction<TCard[]>) => {
            // set the cards
            state.cards = action.payload;
        },
    },
});

export const { addPoint, addError, setCards } = gameSlice.actions;

export const getPoints = (state: RootState): number => state.game.points;
export const getErrors = (state: RootState): number => state.game.errors;
export const getCards = (state: RootState): TCard[] => state.game.cards;

export default gameSlice.reducer;
