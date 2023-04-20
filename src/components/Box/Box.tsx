import type { TChildren } from "../../types/types";
import "./Box.css";

const Box = ({ children }: TChildren): JSX.Element => {
    return <div className="box">{children}</div>;
};

export default Box;
