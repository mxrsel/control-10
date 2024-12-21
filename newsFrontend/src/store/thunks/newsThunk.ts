import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi.ts";
import {News} from "../../types.ts";

export const fetchNews = createAsyncThunk<News[], void>(
    'news/fetchNews',
    async() => {
        const response = await axiosApi<News[]>('/news.json');
        return response.data || [];
    }
);

