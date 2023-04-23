import type { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware =
    (store) => (next) => (action) => {
        const result = next(action);

        const userState = store.getState().user;
        const gameState = store.getState().game;

        localStorage.setItem("userData", JSON.stringify(userState));
        localStorage.setItem("gameData", JSON.stringify(gameState));

        return result;
    };
