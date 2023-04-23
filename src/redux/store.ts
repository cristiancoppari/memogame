import { configureStore } from "@reduxjs/toolkit";

import { api } from "./slices/api";
import userReducer from "./slices/userSlice";
import gameReducer from "./slices/gameSlice";
import { localStorageMiddleware } from "./middlewares/localStorage";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
        game: gameReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware, localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
