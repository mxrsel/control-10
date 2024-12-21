import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {News, NewsMutation} from "../../types.ts";

export const fetchNews = createAsyncThunk<News[], void>(
    'news/fetchNews',
    async() => {
        const response = await axiosApi<News[]>('/news');
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

export const getNewsById = createAsyncThunk<News, void>(
    'news/getNewsById',
    async(id) => {
        const response =  await axiosApi.get<News>(`/news/${id}`);
        return response.data;
    }
)

export const deleteNews = createAsyncThunk<void, string>(
    'news/deleteNews',
    async(id) => {
        await axiosApi.delete(`/news/${id}`);
    }
)