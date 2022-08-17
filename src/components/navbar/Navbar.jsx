import React from 'react';
import './Navbar.css';
import Search from './search/Search';
import Logo from './logo/Logo';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo/>
            <Search/>
        </div>
    );
};

export default Navbar;