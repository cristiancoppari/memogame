import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
    name: string | undefined;
}

const initialState: LoginState = {
    name: "",
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
    },
});

export const { setName } = loginSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectName = (state: RootState): string | undefined =>
    state.login.name;

export default loginSlice.reducer;
