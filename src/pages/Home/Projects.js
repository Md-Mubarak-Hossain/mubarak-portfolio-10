import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import mern from '../../components/assets/mern.webp';
import react from '../../components/assets/react.png';
import js from '../../components/assets/js.jpg';
import '../../layouts/Main.css';
import '../../components/Animation/Animation.css';
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div id='projects' className='py-5'>
            <div className='flex flex-col place-items-center '>
                <p className='text-3xl font-bold uppercase'>Projects</p>
                <p><AiOutlineFundProjectionScreen className='w-32 h-32 text-violet-900 text-3xl font-extrabold'></AiOutlineFundProjectionScreen></p>
            </div>
            <h2 className='font-bold text-xl lg:text-3xl text-violet-900 underlined uppercase'>Different Categories Projects</h2>
            <div className='p-5 grid grid-cols-1 gap-1 lg:grid-cols-3'>
                <div className="card bg-base-100">
                    <div className="card-body flex flex-col place-items-center ">
                        <h2 className="card-title">MERN Stack</h2>
                        <img src={mern} alt="" className='lg:h-20 lg:w-64' />
                        <p>These are full stack projects.</p>
                        <div className="card-actions justify-end">
                            <Link to='/mern'><button className="btn btn-outline btn-primary">See Projects</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100">
                    <div className="card-body flex flex-col place-items-center">
                        <h2 className="card-title">REACT.JS</h2>
                        <img src={react} alt="" className='lg:h-20 lg:w-64' />
                        <p>These are react.js base projects</p>
                        <div className="card-actions justify-end">
                            <Link to='/reac'><button className="btn btn-outline btn-primary">See Projects</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100">
                    <div className="card-body flex flex-col place-items-center">
                        <h2 className="card-title">JavaScript</h2>
                        <img src={js} alt="" className='lg:h-20 lg:w-64' />
                        <p>These are raw JavaScript base projects</p>
                        <div className="card-actions justify-end">
                            <Link to='/js'><button className="btn btn-outline btn-primary">See Projects</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link to='/MoreProjects'><button className='btn btn-link link-active'>See more projects</button></Link>
        </div >
    );
};

export default Projects;