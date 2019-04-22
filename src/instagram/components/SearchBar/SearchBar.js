import React from 'react';
import './SearchBar.css';

import logo from './logo.png';
import instagram from './instagram.png';
import Icon from '@material-ui/core/Icon';

const SearchBar = (props) => {
    return <div >
        <header>
            <div className="header">
                <div className="header-container">
                    <img src={logo} alt="logo" className="logo" />
                    <img src={instagram} alt="logo" className="instagram" />
                </div>
                <div className="header-container">
                    <input className="search-box" type="text" placeholder="Search"></input>
                </div>
                <div className="header-container">
                    <Icon className="icon">explore</Icon>
                    <Icon className="icon">favorite_border</Icon>
                    <Icon className="icon">account_circle</Icon>
                </div>
            </div>
        </header>
    </div >
};

export default SearchBar;