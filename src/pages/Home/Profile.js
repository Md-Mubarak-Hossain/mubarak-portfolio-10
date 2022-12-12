import React from 'react';
import Avatar from '../shared/CommonImage/Avatar';
import Resume from './Resume';
const Profile = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-overlay"></div>
            <div className="hero-content text-center flex flex-col justify-center items-center place-items-center">
                <div className="lg:w-1/2">
                    <Avatar></Avatar>
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