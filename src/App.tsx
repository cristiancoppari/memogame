import GameInfo from "./components/GameInfo/GameInfo";
import Container from "./components/Container/Container";
import Board from "./components/Board/Board";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import { useGetImagesQuery } from "./redux/slices/api";
import { useAppSelector } from "./hooks/hooks";
import { getIsCompleted } from "./redux/slices/gameSlice";
import { selectName } from "./redux/slices/userSlice";
import GameMessage from "./components/GameMessage/GameMessage";

function App(): JSX.Element {
    const { isLoading, isSuccess, isError } = useGetImagesQuery({});

    const isCompleted = useAppSelector(getIsCompleted);
    const name = useAppSelector(selectName);

    return (
        <Container>
            {/* Loading */}
            {isLoading && <p>Loading game...</p>}

            {/* Images loaded successfully and the game is not completed */}
            {isSuccess && !isCompleted && (
                <>
                    <Header />
                    {/* Here I check for the name, if I have a name the user its logged in */}
                    {!name && <Login />}
                    {name && (
                        <>
                            <GameInfo />
                            <Board />
                        </>
                    )}
                </>
            )}

            {/* Game completed */}
            {isSuccess && isCompleted && <GameMessage />}

            {/* Error message if there is an error fetching the API */}
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
