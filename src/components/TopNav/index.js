import React from 'react';

const TopNav = () => {

    return (
        <nav>
            <div class="nav-wrapper grey darken-4">
                <a href="http://www.atlantabrews.com" class="brand-logo right">Logo</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>);
};

export default TopNav;