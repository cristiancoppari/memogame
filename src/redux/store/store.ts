import { configureStore } from "@reduxjs/toolkit";

import { api } from "../api/api";
import userReducer from "../slices/userSlice";
import gameReducer from "../slices/gameSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        login: userReducer,
        game: gameReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
