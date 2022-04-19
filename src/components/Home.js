import React from 'react';
import Banner from './Banner';
import BlogShow from './BlogShow';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <BlogShow></BlogShow>
        </div>
    );
};

export default Home;