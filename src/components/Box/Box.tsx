import type { TChildren } from "../../types/types";
import "./Box.css";

const Box = ({ children, className }: TChildren): JSX.Element => {
    return <div className={`box ${className ?? ""}`}>{children}</div>;
};

export default Box;
