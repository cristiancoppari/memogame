import GameInfo from "./components/GameInfo/GameInfo";
import Container from "./components/Container/Container";
import Board from "./components/Board/Board";

function App(): JSX.Element {
    return (
        <Container>
            <GameInfo />
            <Board />
        </Container>
    );
}

export default App;
