import { useRef } from "react";

import Box from "../Box/Box";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setName, selectName } from "../../redux/slices/userSlice";

import "./Login.css";

const Login = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const name = useAppSelector(selectName);

    const nameRef = useRef<HTMLInputElement>(null);

    return (
        <Box className={`login ${name ? "hidden" : ""}`}>
            <h1>
                Welcome to <br /> Memo Game 🔮
            </h1>

            <label htmlFor={"userName"}>Enter your name to start:</label>
            <input type="text" ref={nameRef} id="userName" />

            <Button
                text={"Continue"}
                type={"primary"}
                onClick={() => {
                    if (nameRef.current?.value.trim()) {
                        dispatch(setName(nameRef.current?.value ?? ""));
                    }
                }}
            />
        </Box>
    );
};

export default Login;
