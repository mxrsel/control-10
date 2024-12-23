import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {News} from "../../types.ts";
import {createNews, deleteNews, fetchNews, getNewsById} from "../thunks/newsThunk.ts";

interface Props {
    news: News[];
    oneNews: News | null;
    isLoading: boolean | string;
    isError: boolean;
}

const initialState: Props = {
    news: [],
    oneNews: null,
    isLoading: false,
    isError: false,
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchNews.pending, (state) => {
                    state.isLoading = true
                    state.isError = false
                }
            )
            .addCase(
                fetchNews.fulfilled, (state, action: PayloadAction<News[]>) => {
                    state.isLoading = false
                    state.news = action.payload
                }
            )
            .addCase(
                fetchNews.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                }
            )
            .addCase(
                createNews.pending, (state) => {
                    state.isLoading = true
                    state.isError = false
                }
            )
            .addCase(
                createNews.fulfilled, (state) => {
                    state.isLoading = false
                }
            )
            .addCase(
            createNews.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                }
            )
            .addCase(
                getNewsById.pending, (state) => {
                    state.isLoading = true
                    state.isError = false
                }
            )
            .addCase(
                getNewsById.fulfilled, (state, action: PayloadAction<News>) => {
                    state.isLoading = false
                    state.oneNews = action.payload
                }
            )
            .addCase(
                getNewsById.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                }
            )
            .addCase(
                deleteNews.pending, (state, {meta}) => {
                    state.isLoading = meta.arg
                    state.isError = false
                }
            )
            .addCase(
                deleteNews.fulfilled, (state) => {
                    state.isLoading = false
                }
            )
            .addCase(
                deleteNews.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                }
            )

    }
})

export const newsReducer = newsSlice.reducer