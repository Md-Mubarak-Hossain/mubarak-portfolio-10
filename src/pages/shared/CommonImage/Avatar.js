import React from 'react';
import profile from '../../../components/assets/MubarakResumePhoto.png';
const Avatar = () => {
    return (
        <div className='w-full p-2'>
            <div className="flex avatar flex-col justify-center items-center place-items-center">
                <div className="w-32 h-32 lg:w-72 lg:h-72">
                    <img src={profile} alt='' className='w-32 h-32 lg:w-72 lg:h-72 rounded-full bg-fuchsia-500' />
                </div>
            </div>
        </div>
    );
};

export default Avatar;