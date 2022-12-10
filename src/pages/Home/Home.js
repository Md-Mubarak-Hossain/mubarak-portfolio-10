import React from 'react';
import Email from './Email';
import Profile from './Profile';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Profile></Profile>
            <Projects></Projects>
            <Email></Email>
        </div >
    );
};

export default Home;