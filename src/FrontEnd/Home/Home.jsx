import React from 'react';
import Banner from '../Banner';
import WeHave from '../WeHave';
import Event from '../Event';
import Vanue from '../Vanue';
import Gallery from '../Gallery';
import Subscribe from '../Subscribe';
import Footer from '../Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WeHave></WeHave>
            <Event></Event>
            <Vanue></Vanue>
            <Gallery></Gallery>
            <Subscribe />
            <Footer/>
        </div>
    );
};

export default Home;