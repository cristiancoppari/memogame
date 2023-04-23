import { useState, useEffect } from "react";

import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";

import { useDispatch, useSelector } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Define the return type for useDarkMode
type UseDarkModeReturn = [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>,
];

// useDarkMode
export const useDarkMode = (): UseDarkModeReturn => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const body = document.body;

        if (darkMode) {
            body?.classList.add("dark");
        } else {
            body?.classList.remove("dark");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};
