import GameInfo from "./components/GameInfo/GameInfo";
import Container from "./components/Container/Container";
import Board from "./components/Board/Board";
import Login from "./components/Login/Login";
import { useGetImagesQuery } from "./redux/api/api";
import { useAppSelector } from "./hooks/hooks";
import { getIsCompleted } from "./redux/slices/gameSlice";
import GameMessage from "./components/GameMessage/GameMessage";

function App(): JSX.Element {
    const { isLoading, isSuccess, isError } = useGetImagesQuery({});

    const isCompleted = useAppSelector(getIsCompleted);

    return (
        <Container>
            {isLoading && <p>Loading game...</p>}
            {isSuccess && !isCompleted && (
                <>
                    <Login />
                    <GameInfo />
                    <Board />
                </>
            )}
            {isSuccess && isCompleted && <GameMessage />}
            {isError && (
                <div>
                    An error ocurred while loading the game. Please try again
                    later!
                </div>
            )}
        </Container>
    );
}

export default App;
