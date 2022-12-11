import React from 'react';
import profile from '../../components/assets/halfImg-2.png';
import Resume from './Resume';
const Profile = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-overlay"></div>
            <div className="hero-content text-center flex flex-col justify-center items-center place-items-center">
                <div className="lg:w-1/2">
                    <div className="avatar">
                        <div className="w-32 lg:w-64 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2 bg-primary pt-2">
                            <img src={profile} alt='' />
                        </div>
                    </div>
                    <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Hi,I am Md Mubarak Hossain</h1>
                    <p className="mb-5">I am a curious, positive, enthusiastic and competent MERN Stack Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee. I will perform highly in this role.
                    </p>
                </div>
                <button>
                    <Resume></Resume>
                </button>
            </div>
        </div >
    );
};

export default Profile;