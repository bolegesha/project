import React from 'react';
// import './Navbar.css';
import Search from './search/Search';
import Logo from './logo/Logo';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Search/>
            <Logo/> 
        </div>
    );
};

export default Navbar;