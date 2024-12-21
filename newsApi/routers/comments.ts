import express from "express";
import {fileDb} from "../fileDb";
import {CommentsWithoutId} from "../types";

export const commentsRouter = express.Router();

commentsRouter.get('/', async(_req, res) => {
    try {
        const comments = await fileDb.getEntity();
        res.status(200).send(comments);
    } catch (e) {
        console.error(e)
    }
})

commentsRouter.get('/:id', async(req, res) => {
    try {
        const comments = await fileDb.getEntityById('comments', req.params.id);
        res.status(200).send(comments);
    } catch(e) {
        console.error(e)
    }
})

commentsRouter.post('/', async(req, res) => {
   try {
        if(!req.body.commentText || !req.body.news_id) {
            res.status(400).send({error: 'Enter commentText!'})
        }
       const newComment: CommentsWithoutId = {
           news_id: req.body.news_id,
           author: req.body.author || 'Anonymous',
           commentText: req.body.commentText
       }

       const saveComment = await fileDb.addEntity(newComment, 'comments');
       res.status(200).send(saveComment);
   } catch(e) {
       console.error(e)
   }
})

commentsRouter.delete('/:id', async(req, res) => {
    await fileDb.deleteEntity('comments', req.params.id);
    res.status(200).send('comment deleted successfully.');
})