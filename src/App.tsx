import { Provider } from "react-redux";

// import GameInfo from "./components/GameInfo/GameInfo";
import Container from "./components/Container/Container";
// import Board from "./components/Board/Board";
import Login from "./components/Login/Login";
import { store } from "./redux/store/store";

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <Container>
                <Login />
                {/* <GameInfo />
                <Board /> */}
            </Container>
        </Provider>
    );
}

export default App;
