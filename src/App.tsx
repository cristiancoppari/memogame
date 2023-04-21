import { BarLoader } from "react-spinners";

import GameInfo from "./components/GameInfo/GameInfo";
import Container from "./components/Container/Container";
import Board from "./components/Board/Board";
import Login from "./components/Login/Login";
import { useGetImagesQuery } from "./redux/api/api";

function App(): JSX.Element {
    const { isLoading, isSuccess, isError } = useGetImagesQuery({});

    return (
        <Container>
            {isLoading && <p>Loading game...</p>}
            {isSuccess && (
                <>
                    <Login />
                    <GameInfo />
                    <Board />
                </>
            )}
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
