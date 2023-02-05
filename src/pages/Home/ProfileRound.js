import React from 'react';
import '../../../src/layouts/Main.css'
import Avatar from '../shared/CommonImage/Avatar';

const ProfileRound = () => {
    return (   <div className='bg-fuchsia-300'>  
                 <div className='w-full rounded-full flex flex-col place-items-center bg-fuchsia-200 px-5'>
                    <h1 className='text-2xl font-semibold text-fuchsia-900 uppercase'>Welcome to my world!!!</h1>
                    <div className='w-full rounded-full flex flex-col place-items-center bg-fuchsia-300 px-5'>
                        <div className='w-full rounded-full flex flex-col place-items-center bg-fuchsia-400 px-5'>
                            <div className='w-full rounded-full shadow-2xl  flex flex-col place-items-center bg-fuchsia-500 px-5 pb-5'>     
                                <div className='w-full rounded-full shadow-2xl  flex flex-col place-items-center bg-fuchsia-600 px-5 pb-5'>
                                    <div className='w-full rounded-full shadow-2xl  flex flex-col place-items-center bg-fuchsia-700 px-5 pb-5'>
                                        <div className='w-full rounded-full shadow-2xl  flex flex-col place-items-center bg-fuchsia-800 px-5 pb-5'>                                           
                                            <div className='w-full rounded-full shadow-2xl  flex flex-col place-items-center bg-fuchsia-700 px-5 pb-5'>
                                               <div className='w-full rounded-full shadow-2xl  flex flex-col place-items-center bg-fuchsia-600 px-5 pb-5'>
                                                 <div className='w-full rounded-full shadow-2xl  flex flex-col place-items-center bg-fuchsia-500 px-5 pb-5'>
                                                   <div className='w-full rounded-full shadow-2xl  flex flex-col place-items-center bg-fuchsia-400 px-5 pb-5'>
                                                   <div className='rounded-full shadow-2xl  flex flex-col place-items-center bg-fuchsia-300 px-5 pb-5'>
                                                <Avatar></Avatar>
                                                <p className='w-4/5 p-2 text-center text-violet-900'>
                                               Hello,I'm <span className='font-semibold text-lg text-violet-900'>MD MUBARAAK</span>  , Full Stack Developer, who is passionate, innovative and motivated to make a difference. My current role in <span className='font-semibold text-lg text-violet-900'>AAK TELE SCIENCE Inc (Software Company)</span> as a Full Stack Developer.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                  <h2 className='text-xl font-semibold uppercase text-white'>Experience</h2>
                    </div>
                </div> 
            </div>
        </div>
    </div>       
</div>
    );
};

export default ProfileRound;