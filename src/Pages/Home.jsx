import React from 'react';
import Banner from '../Components/Banner';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Project from './Project';
import Education from './Education';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className='mt-5'>
                <About/>
            </div>
            <Education/>
            <Skills/>
            <Project/>
            <Contact/>
        </div>
    );
};

export default Home;