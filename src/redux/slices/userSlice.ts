import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string | undefined;
    acceptedInstructions: boolean;
}

const storedUserData = localStorage.getItem("userData");
const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;

const initialState: UserState = {
    name: parsedUserData?.name || "",
    acceptedInstructions: parsedUserData?.acceptedInstructions || false,
};

export const userSlice = createSlice({
    name: "user",
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
    userSlice.actions;

export const selectName = (state: RootState): string | undefined =>
    state.user.name;

export const getAcceptedInstructions = (state: RootState): boolean =>
    state.user.acceptedInstructions;

export default userSlice.reducer;
