import type { TCard } from "../../types/types";
import "./Card.css";

const Card = ({ id, image, isMatched, isSelected }: TCard): JSX.Element => {
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
                    <span>Back</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
