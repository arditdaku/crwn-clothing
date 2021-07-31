import React from 'react';
import {Link} from "react-router-dom";

const Header = (props) => (
    <div className='header'>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>

    </div>
);

export default Header;