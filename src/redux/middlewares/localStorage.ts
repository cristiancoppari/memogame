import type { Middleware } from "@reduxjs/toolkit";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);

    // Get the updated state after the action is processed
    const login = store.getState().login;
    const game = store.getState().game;

    // Write the state to localStorage
    localStorage.setItem("loginData", JSON.stringify(login));
    localStorage.setItem("gameData", JSON.stringify(game));

    return result;
};

export default localStorageMiddleware;
