import {Comments, CommentsWithoutId, News, NewsWithoutId} from "./types";
import {promises as fs} from "fs";

const file = './db.json';
let data: {
   news: News[],
    comments: Comments[]
} = {
    news: [],
    comments: []
};

export const fileDb = {
    async init() {
        try{
            const content = await fs.readFile(file);
            data = await JSON.parse(content.toString());
        } catch (e) {
            console.error(e)
        }
    },
    async getEntity() {
        return data
    },
    async addEntity(entity: CommentsWithoutId | NewsWithoutId, dataType: 'comments' | 'news') {
        const id = crypto.randomUUID().toString();
        const entityWithId = { id, ...entity };

        if (dataType === 'comments') {
            data.comments = data.comments || [];
            data.comments.push(entityWithId as Comments);
        } else if (dataType === 'news') {
            data.news = data.news || [];
            data.news.push(entityWithId as News);
        }

        await this.save();
        return entityWithId;
    },

    async getEntityById(entity: 'comments' | 'news', id: string) {
        const entities = data[entity];
        const findEntityById = entities.find((entity) => entity.id === id);
        if(!findEntityById) console.error('Entity not found!');
        return findEntityById
    },

    async deleteEntity(entity: 'comments' | 'news', id: string) {
        const entities = data[entity];
        const deleteEntity = entities.findIndex((entity) => entity.id === id);
        if(deleteEntity === -1) console.log("Current object doesn't exist")
        if(entity === 'news') {
            data.comments.filter((comment) => comment.news_id !== id);
        }
        entities.splice(deleteEntity, 1);
        await this.save()
    },

    async save() {
        return fs.writeFile(file, JSON.stringify(data));
    }
}