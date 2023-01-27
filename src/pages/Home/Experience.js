import React from 'react';
import banner1 from '../../components/assets/developer1.jpg'
import banner3 from '../../components/assets/developer3.jpg'
import aak from '../../components/assets/aak.jpg'
import gao from '../../components/assets/gao.jpg'
const Experience = () => {
    return (
        <div className='text-justify bg-fuchsia-300'>
            <div className="hero w-full h-96 rounded-md shadow-xl shadow-fuchsia-600">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className='w-full px-2'>
                        <img src={banner1} className="w-full h-80  rounded-xl" />
                    </div>
                    <div className='w-full p-2'>
                        <h1 className="text-xl font-semibold uppercase text-fuchsia-800">Full Stack Developer</h1>
                        <p className='flex'>
                            <img src={aak} alt="" className='w-8 h-5 mx-1'/>
                            AAK TELE SCIENCE Inc, Full Time ,January,2023-Present
                        </p>
                        <small>Davis, California, United States · Remote</small>
                        <p className="py-6"> AAK introduces a revolutionary global collaborative environment dedicated to the scientific research community. Our cloud-based, interactive platform connects scientists with their peers worldwide, providing a smart and user-friendly adaptive experience enhanced by machine learning. Our platform encourages research collaboration while maintaining secure control over data for its us</p>
                        <h2 className="py-6">Skills: React JS, Bootstrap, Node JS, Express JS , MongoDB, GitHub , Atoms, Project manage, Software development</h2>
                    </div>
                </div>
            </div>
            <div className="hero w-full h-96 rounded-md shadow-xl shadow-fuchsia-600">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full p-2'>
                        <h1 className="text-xl font-semibold uppercase text-fuchsia-800">Software Developer</h1>    
                        <p className='flex'>
                            <img src={gao} alt="" className='w-8 h-5 mx-1'/>
                            GAO Tek Inc, Full Time , US
                        </p>
                        <small>November-2022 -January-2023 (Remote)</small>
                        <p className="py-6">I am a motivated full stack developer team member at GAO TEK Inc. This company stands me in a leadership position with excellent collaboration. I also learn how to manage team members and work together with them.</p>
                        <h2 className="py-6">Skills: Team lead, Project management, Software development, Project management methodology</h2>
                    </div>
                    <div className='w-full px-2'>
                        <img src={banner3} className="w-full h-80 rounded-md shadow-xl shadow-fuchsia-600" />
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Experience;