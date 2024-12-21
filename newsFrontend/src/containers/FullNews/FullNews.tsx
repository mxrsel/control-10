import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {getNewsById} from "../../store/thunks/newsThunk.ts";
import {createComment} from "../../store/thunks/commentsThunk.ts";
import CommentForm from "../../components/CommentForm/CommentForm.tsx";
import {apiUrl} from "../../constants.ts";


const FullPost: React.FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const news = useAppSelector((state) => state.news.oneNews);
    const comments = useAppSelector((state) => state.comments.comments);
    const commentsForNews = comments.filter((comment) => comment.news_id === id);

    useEffect(() => {
        if (id) {
            dispatch(getNewsById(id));
        }
    }, [id, dispatch]);

    const handleAddComment = (author: string, commentText: string) => {
        if (!id) return;
        dispatch(createComment({ news_id: id, author, commentText }));
    };

    if (!news) {
        return <h1>News not found!</h1>
    }

    return (
        <div>
            <h1>{news.newsName}</h1>
            <p>{news.newsDescription}</p>
            {news.newsImage && <img src={`${apiUrl}/${news.newsImage}`} alt={news.newsName} />}

            <h2>Comments</h2>
            <ul>
                {commentsForNews.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.author}:</strong> {comment.commentText}
                    </li>
                ))}
            </ul>

            <CommentForm onAddComment={handleAddComment} />
        </div>
    );
};

export default FullPost;
