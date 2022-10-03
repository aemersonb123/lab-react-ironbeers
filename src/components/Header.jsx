import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Link style={{textDecoration: 'none'}} to="/">
        <div className='header'>
        Home
         </div>
         </Link>
    );
}

export default Header;