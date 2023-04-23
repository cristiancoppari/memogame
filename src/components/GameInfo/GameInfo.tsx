import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
    getAcceptedInstructions,
    setAcceptedInstructions,
    selectName,
} from "../../redux/slices/userSlice";
import { initGame } from "../../redux/slices/gameSlice";
import "./GameInfo.css";

const instructions: string[] = [
    "Your mission is to find all the cards matching pairs",
    "Click two cards to flip them. If they match you win a point, if they dont you get an error.",
    "Your tools: Your memory and your brain",
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
                Hello <span>{name}</span>!
            </h1>

            <p className="subtitle">Welcome to the memo game 🔮</p>

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
