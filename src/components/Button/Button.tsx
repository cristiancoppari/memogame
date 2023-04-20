import type { TButton } from "../../types/types";
import "./Button.css";

const Button = ({ text, type, onClick }: TButton): JSX.Element => {
    return (
        <button type="button" className={`btn btn-${type}`}>
            {text}
        </button>
    );
};

export default Button;
