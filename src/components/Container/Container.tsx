import type { TChildren } from "../../types/types";
import "./Container.css";

const Container = ({ children }: TChildren): JSX.Element => {
    return <div className="container">{children}</div>;
};

export default Container;
