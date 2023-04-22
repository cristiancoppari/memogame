import type { Middleware } from "@reduxjs/toolkit";
import { unflipCards } from "../slices/gameSlice";

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
    console.log("check the cards");
    const state = store.getState();

    const firstSelection = state.game.firstSelection;
    const secondSelection = state.game.secondSelection;

    console.log(firstSelection);
    console.log(secondSelection);

    if (firstSelection && secondSelection) {
        // check if they match
        if (firstSelection === secondSelection) {
            console.log("they match");
        } else {
            console.log("they don't match");
        }
    }
    return next(action);
};

export default loggerMiddleware;
