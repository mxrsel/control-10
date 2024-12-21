import {Route, Routes} from "react-router-dom";
import NewNews from "./containers/NewNews/NewNews.tsx";
import Toolbar from "./containers/Toolbar/Toolbar.tsx";
import INews from "./components/News/News.tsx";

const App = () => {
    return (
        <>
            <header>
                <Toolbar/>
            </header>

                <Routes>
                    <Route path='/' element={<INews/>}/>
                    <Route path='/news' element={<INews/>}/>
                    <Route path='/news/newNews' element={<NewNews />} />
                </Routes>

        </>
    );
};

export default App;