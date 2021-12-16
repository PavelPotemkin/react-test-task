import React from 'react';
import {RouteNames} from "../router";
import {Link} from "react-router-dom";

const Header = () => {    
    return (
        <nav className='nav'>
            <Link className='nav__link' to={RouteNames.MAIN}>Главная</Link>
        </nav>
    );
};

export default Header;
