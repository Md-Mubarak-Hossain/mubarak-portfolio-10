import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../components/assets/banner1.jpg';
import profile from '../../components/assets/halfImg-2.png';
const Profile = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-black"></div>
            <div className="hero-content text-start text-neutral-content">
                <div className="w-1/2">
                    <div className="avatar">
                        <div className="w-64 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2 bg-primary pt-2">
                            <img src={profile} alt='' />
                        </div>
                    </div>
                    <h1 className="mb-5 text-5xl font-bold">Hi,I am Md Mubarak Hossain</h1>
                    <p className="mb-5">I am a curious, positive, enthusiastic and competent MERN Stack Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee. I will perform highly in this role.
                    </p>
                    <Link to='/resume'><button className="btn btn-primary">Download Resume</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Profile;