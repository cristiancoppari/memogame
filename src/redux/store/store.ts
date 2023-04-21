import { configureStore } from "@reduxjs/toolkit";

import { api } from "../api/api";
import loginReducer from "../slices/loginSlice";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        login: loginReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
