import express from "express";
import {fileDb} from "../fileDb";
import {NewsWithoutId} from "../types";
import {imagesUpload} from "../multer";

export const newsRouter = express.Router();

newsRouter.get('/', async(_req, res) => {
   try {
       const newsData = await fileDb.getEntity();
       res.status(200).send(newsData.news)
   } catch(e) {
       console.error(e)
   }
})

newsRouter.get('/:id', async(req, res) => {
     try {
         const news = await fileDb.getEntityById('news', req.params.id);
         res.status(200).send(news)
     } catch(e) {
         console.error(e)
     }
})

newsRouter.post('/', imagesUpload.single('newsImage'), async(req, res) => {
try{
    if (!req.body.newsName || !req.body.newsDescription) {
        res.status(400).send({error: 'Enter fields of name and description!'})
    }
    const newNews: NewsWithoutId = {
        newsName: req.body.newsName,
        newsDescription: req.body.newsDescription,
        newsImage: req.file ? 'images/' + req.file.filename : null,
        datetime: new Date().toISOString()
    }

    const saveNews = await fileDb.addEntity(newNews, 'news');
    res.status(200).send(saveNews);
} catch(e) {
    console.error(e)
}
})

newsRouter.delete('/:id', async(req, res) => {
    try {
        await fileDb.deleteEntity('news', req.params.id);
        res.status(200).send('news deleted successfully.');
    }catch(e) {
        console.error(e)
    }
})