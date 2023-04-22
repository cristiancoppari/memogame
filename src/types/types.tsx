export type TCard = {
    id: string;
    matchId: string;
    image: string;
    name: string;
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

export type AxiosQueryResult<T> =
    | { data: T }
    | { error: { status?: number; data: string | object } };
