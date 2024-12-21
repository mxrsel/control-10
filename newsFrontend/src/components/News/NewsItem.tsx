import React from 'react';
import {NavLink} from "react-router-dom";
import {apiUrl} from "../../constants.ts";

interface Props {
    id: string
    newsName: string;
    newsImage?: string | null
    datetime: string
    onDelete: (id: string) => void
}

const NewsItem: React.FC<Props> = ({id, newsName, newsImage, datetime, onDelete}) => {


    return (
        <div>
            <div className='card mt-5 '>
                <div className='card-img'>
                    {newsImage && <img src={`${apiUrl}/${newsImage}`} alt='image'/>}
                </div>
                <div className='card-header'>
                    {newsName}
                </div>
                <div className='card-text text-secondary'>
                    {datetime}
                </div>
                <NavLink to='/fullNews'>Read Full Post...</NavLink>

                <button className='btn btn-dark' onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    );
};

export default NewsItem;