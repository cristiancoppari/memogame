import type { TCard } from "../../types/types";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { flipCard, getIsBlocked } from "../../redux/slices/gameSlice";

import "./Card.css";

const Card = ({
    id,
    matchId,
    name,
    image,
    isMatched,
    isSelected,
}: TCard): JSX.Element => {
    const dispatch = useAppDispatch();

    const isGameBlocked = useAppSelector(getIsBlocked);

    const clicked = (e: React.MouseEvent<HTMLButtonElement>): void => {
        // Making sure that always matchId is defined before flipping the card
        // This is because of TypeScript linter rules
        const id = e.currentTarget.id;

        if (id) {
            dispatch(flipCard(id));
        }
    };

    return (
        <button
            className="card"
            onClick={clicked}
            id={id}
            disabled={isGameBlocked || isSelected || isMatched}
        >
            <div
                className={`card__content ${
                    isSelected || isMatched ? "--active" : ""
                }`}
            >
                <div className="card__front"></div>

                <div className="card__back">
                    <img src={image} alt={name} />
                </div>
            </div>
        </button>
    );
};

export default Card;
