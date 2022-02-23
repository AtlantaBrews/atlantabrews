import { render } from '@testing-library/react';
import React from 'react';
import logo from '../../resources/AtlantaBrewsLogo.png';
import './index.css';

const TopNav = (props) => {


    const handleClick = (e) => {
        props.setMainPage(e.target.id)
    }

    return (
        <header>
            <nav>
                <div className="nav-wrapper grey darken-4">
                    <a href="/" className="brand-logo right"><img className="responsive-img-logo" src={logo} alt="Atlanta Brews Logo" /></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a className='' id='Home' onClick={handleClick}>Home</a></li>
                        <li><a className='' id='All' onClick={handleClick}>All Breweries</a></li>
                        <li><a className='' id='Random' onClick={handleClick}>Help Me Pick!</a></li>
                        <li><a className='' id='Map' onClick={handleClick}>Map</a></li>
                    </ul>
                </div>
            </nav >
        </header>
    );
};



export default TopNav;