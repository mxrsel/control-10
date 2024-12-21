import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {useNavigate} from "react-router-dom";
import {ApiNews} from "../../types.ts";
import {createNews} from "../../store/thunks/newsThunk.ts";
import NewsForm from "../../components/NewsForm/NewsForm.tsx";
import Spinner from "../../components/Spinner/Spinner.tsx";

const NewNews = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.news.isLoading);
    const navigate = useNavigate();

    const addNewNews = async(news: ApiNews) => {
        await dispatch(createNews({...news}))
        navigate('/')
    }
    return (
        <div>
            {loading ? <Spinner /> :
            <NewsForm onSubmit={addNewNews} />
            }
        </div>
    );
};

export default NewNews;