import Card from "../Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getAcceptedInstructions } from "../../redux/slices/loginSlice";
import { getPoints, getErrors } from "../../redux/slices/gameSlice";
import "./Board.css";

const dummyCards = [
    {
        id: 1,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 2,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 3,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 4,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 5,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 6,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 7,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 8,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 9,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 10,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 11,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 12,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 13,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 14,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 15,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
    {
        id: 16,
        image: "https://picsum.photos/200/300",
        isSelected: false,
        isMatched: false,
    },
];

const Board = (): JSX.Element => {
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
                {dummyCards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </section>
        </main>
    );
};

export default Board;
