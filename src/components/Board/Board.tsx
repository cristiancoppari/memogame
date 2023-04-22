import { useEffect } from "react";

import Card from "../Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getAcceptedInstructions } from "../../redux/slices/loginSlice";
import {
    getPoints,
    getErrors,
    getCards,
    getFirstSelection,
    getSecondSelection,
    cardsDoesntMatch,
    cardsMatch,
    setIsBlocked,
} from "../../redux/slices/gameSlice";
import "./Board.css";

const Board = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const cards = useAppSelector(getCards);
    const acceptedInstructions = useAppSelector(getAcceptedInstructions);
    const points = useAppSelector(getPoints);
    const errors = useAppSelector(getErrors);
    const firstSelection = useAppSelector(getFirstSelection);
    const secondSelection = useAppSelector(getSecondSelection);

    useEffect(() => {
        let timeOutId: NodeJS.Timeout | null = null;

        // check if we have both cards selected
        if (firstSelection && secondSelection) {
            // block the game so the other cards can't be clickable
            dispatch(setIsBlocked(true));

            // check if they match
            if (firstSelection === secondSelection) {
                // dispatch cardsMatch action
                dispatch(cardsMatch());

                // unblock the game, so the cards will be clickable again
                dispatch(setIsBlocked(false));
            } else {
                // set a timer to flip the cards back
                timeOutId = setTimeout(() => {
                    // dispatch cardsDoesntMatch action
                    dispatch(cardsDoesntMatch());

                    // unblock the game, so the cards will be clickable again
                    dispatch(setIsBlocked(false));
                }, 1000);
            }
        }

        // cleanup the timer
        return () => {
            if (timeOutId) {
                clearTimeout(timeOutId);
            }
        };
    }, [dispatch, firstSelection, secondSelection]);

    return (
        <main className={`board ${!acceptedInstructions ? "hidden" : ""}`}>
            <section className="board__score">
                <div className="board__score--points">
                    <h4>Points:</h4>
                    <span>{points}</span>
                </div>

                <div className="board__score--errors">
                    <h4>Errors:</h4>
                    <span>{errors}</span>
                </div>
            </section>

            <section className="board__cards">
                {cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </section>
        </main>
    );
};

export default Board;
