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

export type AxiosQueryResult<T> =
    | { data: T }
    | { error: { status?: number; data: string | object } };
