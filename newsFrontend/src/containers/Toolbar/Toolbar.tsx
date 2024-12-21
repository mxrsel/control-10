import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/' className='navbar-brand'>News</NavLink>
        </div>
    );
};

export default Toolbar;