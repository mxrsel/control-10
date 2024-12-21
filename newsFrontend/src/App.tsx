import {Route, Routes} from "react-router-dom";
import NewNews from "./containers/NewNews/NewNews.tsx";
import Toolbar from "./containers/Toolbar/Toolbar.tsx";

const App = () => {
    return (
        <>
            <header>
                <Toolbar/>
            </header>

                <Routes>
                    <Route path='/newNews' element={<NewNews />} />
                </Routes>

        </>
    );
};

export default App;