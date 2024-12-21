import React, {ChangeEvent, FormEvent, useState} from 'react';
import {ApiNews, NewsMutation} from "../../types.ts";
import FileInput from "../FileInput/FileInput.tsx";

interface Props {
    onSubmit: (news: ApiNews) => void;
}

const initialState = {
    newsName: '',
    newsDescription: '',
    newsImage: null,
    datetime: ''
}

const NewsForm: React.FC<Props> = ({onSubmit}) => {
    const [addNews, setAddNews] = useState<NewsMutation>(initialState);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit({...addNews})
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setAddNews((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, files} = e.target;

        if(files && files[0]) {
            setAddNews((prevState) => ({
                ...prevState,
                [name]: files[0] || null
            }))
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Add new post</h1>

            <div className='form-group'>
                <label htmlFor='newsName'>Name
                    <input
                        type='text'
                        name='newsName'
                        id='newsName'
                        value={addNews.newsName}
                        onChange={handleChange}
                        className='form-control'
                    />
                </label>
            </div>

            <div className='form-group'>
                <label htmlFor='newsDescription'>Description
                    <input
                        type='text'
                        name='newsDescription'
                        id='newsDescription'
                        value={addNews.newsDescription}
                        onChange={handleChange}
                        className='form-control'
                    />
                </label>
            </div>

            <div className='form-group'>
                <FileInput
                    name='newsImage'
                    label='Image'
                    onGetFile={handleChangeFile}/>
            </div>

                <button type='submit' className='btn btn-dark'>Create</button>

        </form>
    );
};

export default NewsForm;