import type { AxiosQueryResult, TCard } from "../../types/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import type { AxiosRequestConfig, AxiosError } from "axios";

import { shuffleCards } from "../../helpers/helpers";

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { createApi } from "@reduxjs/toolkit/query/react";

import { setCards } from "../slices/gameSlice";

type RImage = {
    uuid: number;
    fields: {
        image: {
            title: string;
            url: string;
            uuid: string;
        };
    };
};

const axiosQuery =
    (
        { baseUrl }: { baseUrl: string } = {
            baseUrl: "",
        },
    ): BaseQueryFn<
        {
            url?: string;
            method?: AxiosRequestConfig["method"];
            data?: AxiosRequestConfig["data"];
            params?: AxiosRequestConfig["params"];
        },
        unknown,
        unknown
    > =>
    async ({
        url,
        method,
        data,
        params,
    }: AxiosRequestConfig): Promise<AxiosQueryResult<unknown>> => {
        try {
            const response = await axios({
                url: `${baseUrl?.trim() ?? ""}${url?.trim() ?? ""}`,
                method,
                data,
                params,
            });
            return { data: response.data };
        } catch (axiosError) {
            const error = axiosError as AxiosError;
            return {
                error: {
                    status: error.response?.status,
                    data: error.response?.data || error.message,
                },
            };
        }
    };

export const api = createApi({
    reducerPath: "api",
    baseQuery: axiosQuery({
        baseUrl: "https://fed-team.modyo.cloud",
    }),
    endpoints: (builder) => ({
        getImages: builder.query<TCard[], object>({
            query: () => {
                return {
                    url: "/api/content/spaces/animals/types/game/entries?per_page=20",
                    method: "get",
                };
            },
            transformResponse: (
                baseQueryReturnValue: { entries: [] },
                meta: unknown | undefined,
                arg: object,
            ) => {
                const response = baseQueryReturnValue;

                const cards = response.entries
                    .map((entry: RImage): TCard => {
                        return {
                            id: "",
                            matchId: entry.fields.image.uuid,
                            name: entry.fields.image.title,
                            image: entry.fields.image.url,
                            isSelected: false,
                            isMatched: false,
                        };
                    })
                    .slice(0, 6);

                const cardsDuplicated = [...cards, ...cards];

                const cardsShuffled = shuffleCards(cardsDuplicated);

                const cardsToRender = cardsShuffled.map((card) => {
                    return {
                        ...card,
                        id: uuidv4(),
                    };
                });

                return cardsToRender;
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled;

                dispatch(setCards(data));
            },
        }),
    }),
});

export const { useGetImagesQuery } = api;
