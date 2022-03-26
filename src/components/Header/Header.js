import React from 'react';
import './Header.css'
import logo from '../../images/planner.gif'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <h1>Find Your Favourite Laptop</h1>
        </div>
    );
};

export default Header;