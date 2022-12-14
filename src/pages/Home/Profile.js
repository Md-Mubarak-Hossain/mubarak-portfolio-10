import React from 'react';
import Avatar from '../shared/CommonImage/Avatar';
import { BsJournalCheck } from 'react-icons/bs';
import { ExternalLink } from 'react-external-link';
const Profile = () => {
    return (
        <div className="hero min-h-screen bgContainer">
            <div className="hero-overlay"></div>
            <div className="hero-content text-center flex flex-col justify-center items-center place-items-center">
                <div className="lg:w-1/2">
                    <Avatar></Avatar>
                    <p className="mb-5">I am a curious, positive, enthusiastic and competent MERN Stack Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee. I will perform highly in this role.
                    </p>
                </div>
                <div className='flex'>
                    <ExternalLink href='https://drive.google.com/file/d/1HWiUoJXFvkxnT6kiVffgx09P7qJNUgWO/view' className='mx-1'>
                        <button className="btn btn-outline btn-primary"><BsJournalCheck className='text-xl font-bold text-warning block'></BsJournalCheck> Download CV</button>
                    </ExternalLink>
                    <ExternalLink href='https://drive.google.com/file/d/1l5KtH3PlLta251X3SVlnafU_J_lnsRsb/view?usp=sharing'>
                        <button className="btn btn-outline btn-primary"><BsJournalCheck className='text-xl font-bold text-warning block'></BsJournalCheck> Download Resume</button>
                    </ExternalLink>
                </div>
            </div>
        </div >
    );
};

export default Profile;