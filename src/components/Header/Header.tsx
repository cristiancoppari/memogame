import Button from "../Button/Button";
import { useDarkMode } from "../../hooks/hooks";

import "./Header.css";

const Header = (): JSX.Element => {
    const [darkMode, setDarkMode] = useDarkMode();

    const btnContent = darkMode ? "Dark mode:" : "Light mode";

    return (
        <header className="header">
            <Button
                text={btnContent}
                type={"toggle"}
                onClick={() => {
                    setDarkMode(!darkMode);
                }}
            />
        </header>
    );
};

export default Header;
