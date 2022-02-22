import React from 'react';
import logo from '../../resources/AtlantaBrewsLogo.png';
import './index.css';

const TopNav = () => {

    return (
        <header>
            <nav>
                <div className="nav-wrapper grey darken-4">
                    <a href="http://www.atlantabrews.com" className="brand-logo right"><img className="responsive-img-logo" src={logo} alt="Atlanta Brews Logo" /></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="sass.html">Home</a></li>
                        <li><a href="badges.html">All Breweries</a></li>
                        <li><a href="collapsible.html">Help Me Pick!</a></li>
                        <li><a href="collapsible.html">Map</a></li>
                    </ul>
                </div>
            </nav >
        </header>
    );
};

export default TopNav;