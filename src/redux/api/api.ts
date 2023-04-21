import type { AxiosRequestConfig, AxiosError } from "axios";
import type { AxiosQueryResult } from "../../types/types";
import type { BaseQueryFn } from "@reduxjs/toolkit/dist/query";

import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

type Image = {
    id: number;
    name: string;
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
    }: AxiosRequestConfig): Promise<AxiosQueryResult<Image[]>> => {
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
        getImages: builder.query<Image[], object>({
            query: () => {
                return {
                    url: "/api/content/spaces/animals/types/game/entries?per_page=20",
                    method: "get",
                };
            },
        }),
    }),
});

export const { useGetImagesQuery } = api;
