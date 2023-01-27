import React from 'react';
import Avatar from '../shared/CommonImage/Avatar';
import { BsJournalCheck } from 'react-icons/bs';
import { ExternalLink } from 'react-external-link';
import aak from '../../components/assets/aak.jpg'
const Profile = () => {
    return (
        <div className="hero">
            <div className=''>
                <div className=''>
                <div className="hero-content text-center flex flex-col justify-center items-center place-items-center">
                <div className="">
                    <Avatar></Avatar>
                    <p className="mb-5 text-justify">a Full Stack Developer who is passionate, innovative and motivated to make a difference. The years of experience seeking a position as a Full Stack Developer with next generation Development Technologies, where I can apply my knowledge of Full Stack Development with leadership abilities to meet client needs exceed their expectations.
                    </p>
                    <p className="mb-5 text-justify">
                    My current role in  
                    AAK TELE SCIENCE Inc, Full Time ,January,2023-Present. The role position is a full stack developer.
                    </p>
                </div>
                <div className='flex'>
                    <ExternalLink href='https://drive.google.com/file/d/1omM2haYq5NcwLAHz5nvIUh-RWggnR-B2/view?usp=share_link' className='mx-1'>
                        <button className="btn btn-outline btn-primary"><BsJournalCheck className='text-xl font-bold text-warning block uppercase'></BsJournalCheck> Download CV</button>
                    </ExternalLink>
                </div>
            </div>
          </div>
            </div>
        </div>
    );
};

export default Profile;