import React from 'react';
import Gallery from '../Gallery/Gallery';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;