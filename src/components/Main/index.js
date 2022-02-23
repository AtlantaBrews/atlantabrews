import React from 'react';
import Home from './pages/Home';
import All from './pages/All';
import Random from './pages/Random';
import Map from './pages/Map';


const Main = (props) => {

    if (props.mainPage == 'Home') {
        return <Home />
    } else if (props.mainPage == 'All') {
        return <All />
    } else if (props.mainPage == 'Random') {
        return <Random />
    } else if (props.mainPage == 'Map') {
        return <Map />
    }

};

export default Main;