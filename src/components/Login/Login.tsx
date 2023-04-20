import { useRef } from "react";

import Box from "../Box/Box";
import Button from "../Button/Button";
import { useAppDispatch } from "../../hooks/hooks";
import { setName } from "../../redux/slices/loginSlice";

const Login = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const nameRef = useRef<HTMLInputElement>(null);

    return (
        <Box>
            <h1>
                Welcome to <br /> Memo Game 🔮
            </h1>

            <p>Enter your name to start:</p>

            <input type="text" ref={nameRef} />

            <Button
                text={"Continue"}
                type={"primary"}
                onClick={() => {
                    dispatch(setName(nameRef.current?.value ?? ""));
                }}
            />
        </Box>
    );
};

export default Login;
