import React from 'react';
import ScrollToTop from '../../components/ButtonScrol/ScrollToTop';
import useTitle from '../../hook/useTitle';
import Experience from './Experience';
import Profile from './Profile';
import ProfileRound from './ProfileRound';
import Skills from './Skills';

const Home = () => {
    useTitle("Welcome to")
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <ProfileRound></ProfileRound>
            <Experience></Experience>
            <Skills></Skills>
        </div>
    );
};

export default Home;