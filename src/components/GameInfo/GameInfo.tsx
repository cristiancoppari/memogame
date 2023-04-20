import Button from "../Button/Button";
import "./GameInfo.css";

const GameInfo = (): JSX.Element => {
    const instructions: string[] = [
        "Set up the game: Select a set of cards with matching pairs and shuffle them. Place them face down on a flat surface, in a grid pattern.",
        "Begin the game: Flip over two cards at a time, trying to find a match. If the two cards match, remove them from the grid. If the cards do not match, flip them back over and try again.",
        "Continue playing: Keep flipping over two cards at a time, trying to match as many pairs as possible.",
        "Keep score: Keep track of the number of pairs you find. Try to beat your own score by finding more pairs each time you play.",
    ];

    return (
        <div className="game-info">
            <h1>Memo game</h1>

            <h2>Instructions:</h2>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                vitae.
            </p>

            <ul>
                {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ul>

            <Button
                text={"Start"}
                type={"primary"}
                onClick={() => {
                    console.log("clicked");
                }}
            />
        </div>
    );
};

export default GameInfo;
