import Card from "../Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getAcceptedInstructions } from "../../redux/slices/loginSlice";
import { getPoints, getErrors, getCards } from "../../redux/slices/gameSlice";
import "./Board.css";

const Board = (): JSX.Element => {
    const cards = useAppSelector(getCards);
    const acceptedInstructions = useAppSelector(getAcceptedInstructions);
    const points = useAppSelector(getPoints);
    const errors = useAppSelector(getErrors);

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
