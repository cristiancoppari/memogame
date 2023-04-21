import type { TCard } from "../../types/types";
import "./Card.css";

const Card = ({
    id,
    name,
    image,
    isMatched,
    isSelected,
}: TCard): JSX.Element => {
    return (
        <div
            className="card"
            data-id={id}
            data-is-matched={isMatched}
            data-is-selected={isSelected}
        >
            <div className="card__content">
                <div className="card__front">
                    <img src={"/question-mark.svg"} alt="Card" />
                </div>

                <div className="card__back">
                    <img src={image} alt={name} />
                </div>
            </div>
        </div>
    );
};

export default Card;
