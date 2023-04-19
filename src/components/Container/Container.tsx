import type { ReactNode } from "react";
import "./Container.css";

const Container = ({ children }: { children: ReactNode }): JSX.Element => {
    return <div className="container">{children}</div>;
};

export default Container;
