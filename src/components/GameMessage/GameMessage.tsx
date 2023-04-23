import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import Box from "../Box/Box";
import "./GameMessage.css";
import {
    getPoints,
    getErrors,
    resetGameState,
} from "../../redux/slices/gameSlice";
import { selectName, resetLogin } from "../../redux/slices/loginSlice";
import Button from "../Button/Button";

const GameMessage = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const points = useAppSelector(getPoints);
    const errors = useAppSelector(getErrors);
    const name = useAppSelector(selectName);

    return (
        <Box className="game-message">
            <h1>Congratulations {name}!</h1>
            <h2>You finished the game!</h2>
            <h4>
                Your score was: <br></br>
                <strong>{points} points</strong> ✅ and{" "}
                <strong>{errors} errors</strong> ❌
            </h4>

            {points > errors && <p>Your memory is great! 🔮</p>}
            {points < errors && (
                <p>Your memory can improve. Do not give up! 🧠</p>
            )}
            {points === errors && (
                <p>
                    Your memory is average. Would you give it a another try? 🤔
                </p>
            )}
            {errors === 0 && <p>Ninja mode 🥷🏼</p>}

            <h6>Click here to start a new game!</h6>

            <Button
                text={"New Game"}
                type={"primary"}
                onClick={() => {
                    dispatch(resetGameState());
                    dispatch(resetLogin());
                }}
            />
        </Box>
    );
};

export default GameMessage;
