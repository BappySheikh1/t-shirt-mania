import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <Link to='/home'>Home</Link>
            <Link to='/orders'>orders</Link>
            <Link to='/grandpa'>Grandpa</Link>
            <Link to='/about'>about</Link>
            
        </nav>
    );
};

export default Header;