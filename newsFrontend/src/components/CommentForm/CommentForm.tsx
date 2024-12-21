import React, { useState } from 'react';

interface CommentFormProps {
    onAddComment: (author: string, commentText: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
    const [author, setAuthor] = useState('');
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (author && commentText) {
            onAddComment(author, commentText);
            setAuthor('');
            setCommentText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className='form-control'
            />
            <textarea
                placeholder="Comment"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className='form-control mt-3 mb-3'
            />

            <button className='btn btn-dark' type="submit">Add Comment</button>
        </form>
    );
};

export default CommentForm;
