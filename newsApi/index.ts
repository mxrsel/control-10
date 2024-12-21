import express from 'express';
import cors from 'cors';
import {fileDb} from "./fileDb";
import {newsRouter} from "./routers/news";

const fs = require('fs');

const app = express();
const port = 8000;

app.use(express.json());
app.use('/news', newsRouter);
app.use(cors());
app.use(express.static('public'));

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