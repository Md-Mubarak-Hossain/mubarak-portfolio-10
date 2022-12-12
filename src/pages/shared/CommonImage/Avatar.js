import React from 'react';
import profile from '../../../components/assets/halfImg-2.png';
const Avatar = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center place-items-center">
                <div className="w-32 h-32 lg:w-56 lg:h-56 rounded-full ring ring-warning">
                    <img src={profile} alt='' className='w-32 h-32 lg:w-56 lg:h-56 rounded-full' />
                </div>
            </div>
            <h1 className="mb-5 text-xl lg:text-3xl font-bold">Hi,I am Md Mubarak Hossain</h1>
        </div>
    );
};

export default Avatar;