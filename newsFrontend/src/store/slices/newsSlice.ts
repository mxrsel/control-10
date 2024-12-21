import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {News} from "../../types.ts";
import {fetchNews} from "../thunks/newsThunk.ts";

interface Props {
    news: News[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: Props = {
    news: [],
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
    }
})

export const newsReducer = newsSlice.reducer