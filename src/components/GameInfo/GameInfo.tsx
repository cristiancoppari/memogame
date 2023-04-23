import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
    getAcceptedInstructions,
    setAcceptedInstructions,
    selectName,
} from "../../redux/slices/loginSlice";
import { initGame } from "../../redux/slices/gameSlice";
import "./GameInfo.css";

const instructions: string[] = [
    "Set up the game: Select a set of cards with matching pairs and shuffle them. Place them face down on a flat surface, in a grid pattern.",
    "Begin the game: Flip over two cards at a time, trying to find a match. If the two cards match, remove them from the grid. If the cards do not match, flip them back over and try again.",
    "Continue playing: Keep flipping over two cards at a time, trying to match as many pairs as possible.",
    "Keep score: Keep track of the number of pairs you find. Try to beat your own score by finding more pairs each time you play.",
];

const GameInfo = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const name = useAppSelector(selectName);
    const acceptedInstructions = useAppSelector(getAcceptedInstructions);

    return (
        <section
            className={`game-info ${
                !name || (name && acceptedInstructions) ? "hidden" : ""
            }`}
        >
            <h1>
                Welcome <span>{name}</span>!
            </h1>

            <p className="subtitle">You are about to play the memo game 🔮</p>

            <p>Please read the instructions before start playing:</p>

            <ul>
                {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ul>

            <p className="subtitle">Good luck 😃.</p>

            <Button
                text={"Start"}
                type={"primary"}
                onClick={() => {
                    dispatch(setAcceptedInstructions());
                    dispatch(initGame());
                }}
            />
        </section>
    );
};

export default GameInfo;
