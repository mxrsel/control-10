import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';

export const createComment = createAsyncThunk(
    'comments/addComment',
    async (comment: { news_id: string; author: string; commentText: string }) => {
            const response = await axiosApi.post('/comments', comment);
            return response.data;
    }
);
