import express from 'express';
import cors from 'cors';
import {fileDb} from "./fileDb";
import {newsRouter} from "./routers/news";
import {commentsRouter} from "./routers/comments";

const fs = require('fs');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));


app.use('/news', newsRouter);
app.use('/comments', commentsRouter);


const run = async() => {
    if (fs.existsSync('./db.json')) {
        await fileDb.init();
    } else {
        fs.writeFileSync('./db.json', JSON.stringify({
            news: [],
            comments: []
            }
        ));
    }

    app.listen(port, () => {
        console.log(`Listening on port: http://localhost:${port}`);
    })
}

run().catch(err => console.error(err));