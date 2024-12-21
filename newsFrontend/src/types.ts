export interface News {
    id: string;
    newsName: string;
    newsDescription: string;
    newsImage: string | null;
    datetime: string
}

export interface NewsMutation {
    newsName: string;
    newsDescription: string;
    newsImage: File | null;
    datetime: string
}

export interface Comments {
    id: string;
    news_id: string;
    author: string;
    commentText: string;
}


export type ApiNews = Omit<NewsMutation, 'id'>;