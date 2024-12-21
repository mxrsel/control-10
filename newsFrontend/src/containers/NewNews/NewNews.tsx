import {useAppDispatch} from "../../app/hooks.ts";
import {useNavigate} from "react-router-dom";
import {NewsMutation} from "../../types.ts";
import {createNews} from "../../store/thunks/newsThunk.ts";
import NewsForm from "../../components/NewsForm/NewsForm.tsx";

const NewNews = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const addNewNews = async(news: NewsMutation) => {

        await dispatch(createNews(news))
        navigate('/news')
    }
    return (
        <div>

            <NewsForm onSubmit={addNewNews} />

        </div>
    );
};

export default NewNews;