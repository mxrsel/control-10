import {createSlice} from "@reduxjs/toolkit";
import {News} from "../../types.ts";

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
    reducers: {}
})

export const newsReducer = newsSlice.reducer