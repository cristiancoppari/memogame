import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

import { createSlice } from "@reduxjs/toolkit";

type Card = {
    id: string;
    name: string;
    image: string;
    flipped: boolean;
    matched: boolean;
};

type GameState = {
    cards: Card[];
    points: number;
    errors: number;
    firstSelection: number | null;
    secondSelection: number | null;
};

const initialState: GameState = {
    cards: [],
    points: 0,
    errors: 0,
    firstSelection: null,
    secondSelection: null,
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {},
});

// export const {} = gameSlice.actions;

export default gameSlice.reducer;
