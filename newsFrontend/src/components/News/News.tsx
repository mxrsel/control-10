import React, {useEffect} from 'react';
import NewsItem from "./NewsItem.tsx";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {deleteNews, fetchNews} from "../../store/thunks/newsThunk.ts";
import Spinner from "../Spinner/Spinner.tsx";

const INews: React.FC = () => {
    const dispatch = useAppDispatch();
    const news = useAppSelector((state) => state.news.news)
    const loading = useAppSelector((state) => state.news.isLoading);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch])

    const handleDelete = async(newsId: string) => {
        await dispatch(deleteNews(newsId))
    };

    return (
        <div>
            {loading && <Spinner/>}
            {news.map((oneNews) => (
                <NewsItem
                    key={oneNews.id}
                    id={oneNews.id}
                    newsName={oneNews.newsName}
                    newsImage={oneNews.newsImage}
                    datetime={oneNews.datetime}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    );
};

export default INews;