export type TCard = {
    id: number;
    image: string;
    isSelected: boolean;
    isMatched: boolean;
};

export type TButton = {
    text: string;
    type: "primary" | "secondary";
    onClick: () => void;
};

export type TChildren = {
    children: React.ReactNode;
    className?: string;
};
