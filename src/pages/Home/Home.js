import React from 'react';
import Profile from './Profile';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <Projects></Projects>
            <Skills></Skills>
        </div>
    );
};

export default Home;