import type { AxiosRequestConfig, AxiosError } from "axios";
import type { AxiosQueryResult, TCard } from "../../types/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/dist/query";

import { setCards } from "../slices/gameSlice";

import { v4 as uuidv4 } from "uuid";

import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

type RImage = {
    uuid: number;
    fields: {
        image: {
            title: string;
            url: string;
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

                const cards = response.entries.map((entry: RImage): TCard => {
                    return {
                        id: uuidv4(),
                        name: entry.fields.image.title,
                        image: entry.fields.image.url,
                        isSelected: false,
                        isMatched: false,
                    };
                });

                return cards.slice(0, 12);
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                const { data } = await queryFulfilled;

                dispatch(setCards(data));
            },
        }),
    }),
});

export const { useGetImagesQuery } = api;
