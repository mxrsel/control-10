import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {News, NewsMutation} from "../../types.ts";

export const fetchNews = createAsyncThunk<News[], void>(
    'news/fetchNews',
    async() => {
        const response = await axiosApi<News[]>('/news.json');
        return response.data || [];
    }
);

export const createNews = createAsyncThunk<void, NewsMutation>(
    'news/createNews',
    async(news) => {
        const formData = new FormData();
        const newNews = Object.keys(news) as (keyof NewsMutation)[];

        newNews.forEach((novelty) => {
            const newsValue = news[novelty]

            if(newsValue !== null) {
                formData.append(novelty, newsValue);
            }
        })
        await axiosApi.post('/news', formData);
    }
)