import express from "express";
import {fileDb} from "../fileDb";
import {NewsWithoutId} from "../types";
import {imagesUpload} from "../multer";

export const newsRouter = express.Router();

newsRouter.get('/', async(req, res) => {
   try {
       const newsData = await fileDb.getEntity();
       res.status(200).send(newsData.news)
   } catch(e) {
       console.error(e)
   }
})

newsRouter.post('/', imagesUpload.single('newsImage'), async(req, res) => {
try{
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