import React from 'react';
import profile from '../../../components/assets/halfImg-2.png';
const Avatar = () => {
    return (
        <div>
            <div className="avatar">
                <div className="w-32 lg:w-64 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2 bg-primary pt-2">
                    <img src={profile} alt='' />
                </div>
            </div>
            <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Hi,I am Md Mubarak Hossain</h1>
        </div>
    );
};

export default Avatar;