import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
    name: string | undefined;
    acceptedInstructions: boolean;
}

const initialState: LoginState = {
    name: "",
    acceptedInstructions: false,
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setAcceptedInstructions: (state) => {
            state.acceptedInstructions = true;
        },
        resetLogin: (state) => {
            state.acceptedInstructions = false;
        },
    },
});

export const { setName, setAcceptedInstructions, resetLogin } =
    loginSlice.actions;

export const selectName = (state: RootState): string | undefined =>
    state.login.name;

export const getAcceptedInstructions = (state: RootState): boolean =>
    state.login.acceptedInstructions;

export default loginSlice.reducer;
