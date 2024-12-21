import React from 'react';
import {NavLink} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks.ts";
import {deleteNews} from "../../store/thunks/newsThunk.ts";

interface Props {
    id: string
    newsName: string;
    newsImage: string | null | undefined;
    datetime: string
}

const NewsItem: React.FC<Props> = ({id, newsName, newsImage, datetime}) => {
const dispatch = useAppDispatch();

    return (
        <div>
            <div className='card'>
                <div className='card-img'>
                    {newsImage && <img src={newsImage} alt='image'/>}
                </div>
                <div className='card-header'>
                    {newsName}
                </div>
                <div className='card-text text-secondary'>
                    {datetime}
                </div>
                <NavLink to='/fullNews'>Read Full Post...</NavLink>
                <button onClick={() => dispatch(deleteNews(id))}>Delete</button>
            </div>
        </div>
    );
};

export default NewsItem;