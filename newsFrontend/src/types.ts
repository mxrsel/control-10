export interface News {
    id: string;
    newsName: string;
    newsDescription: string;
    newsImage: File | null;
    datetime: string
}

export interface NewsMutation {
    newsName: string;
    newsDescription: string;
    newsImage: File | null;
    datetime: string
}


export type ApiNews = Omit<NewsMutation, 'id'>;