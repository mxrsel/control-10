import express from "express";
import {fileDb} from "../fileDb";
import {CommentsWithoutId} from "../types";

export const commentsRouter = express.Router();

commentsRouter.get('/', async(req, res) => {
    try {
        const comments = await fileDb.getEntity();
        res.status(200).send(comments);
    } catch (e) {
        console.error(e)
    }
})

commentsRouter.post('/', async(req, res) => {
    const newComment: CommentsWithoutId = {
        news_id: req.body.news_id,
        author: req.body.author,
        commentText: req.body.commentText
    }

    const saveComment = await fileDb.addEntity(newComment, 'comments');
    res.status(200).send(saveComment);
})