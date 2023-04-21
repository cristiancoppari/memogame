import type { TChildren } from "../../types/types";
import "./Container.css";

import { useGetImagesQuery } from "../../redux/api/api";

const Container = ({ children }: TChildren): JSX.Element => {
    const { data } = useGetImagesQuery({});

    if (data) {
        console.log(data);
    }

    return <div className="container">{children}</div>;
};

export default Container;
