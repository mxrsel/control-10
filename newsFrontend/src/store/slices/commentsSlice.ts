import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Comments} from "../../types.ts";
import {createComment} from "../thunks/commentsThunk.ts";

interface CommentState {
    comments: Comments[];
    isLoading: boolean;
    isError: boolean;
}

const initialState: CommentState = {
    comments: [],
    isLoading: false,
    isError: false,
};

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createComment.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createComment.fulfilled, (state, action: PayloadAction<Comments>) => {
                state.isLoading = false;
                state.comments.push(action.payload);
            })
            .addCase(createComment.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    },
});

export const commentReducer = commentSlice.reducer;
