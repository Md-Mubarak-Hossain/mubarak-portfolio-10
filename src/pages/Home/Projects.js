import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import mern from '../../components/assets/mern.webp';
import react from '../../components/assets/react.png';
import js from '../../components/assets/js.jpg';
import css from '../../components/assets/css.jpg';
import htmlImg from '../../components/assets/html.jpg';
import '../../layouts/Main.css';
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
        <div className='py-5'>
            <div className='flex flex-col place-items-center'>
                <p className='text-3xl font-bold'>Projects</p>
                <p><AiOutlineFundProjectionScreen className='w-32 h-32 text-primary text-3xl font-extrabold'></AiOutlineFundProjectionScreen></p>
            </div>
            <h2 className='font-bold text-4xl text-primary underlined'>The Different Categories Projects</h2>
            <div className='p-5 grid grid-cols-1 gap-1 lg:grid-cols-5'>
                <div className="card bg-base-100">
                    <div className="card-body flex flex-col place-items-center">
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
                <div className="card bg-base-100">
                    <div className="card-body flex flex-col place-items-center">
                        <h2 className="card-title">CSS</h2>
                        <img src={css} alt="" className='lg:h-20 lg:w-64' />
                        <p>These are raw css3, tailwindcss, bootstrap, materialUI base projects</p>
                        <div className="card-actions justify-end">
                            <Link to='/css'><button className="btn btn-outline btn-primary">See Projects</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100">
                    <div className="card-body flex flex-col place-items-center">
                        <h2 className="card-title">HTML5</h2>
                        <img src={htmlImg} alt="" className='lg:h-20 lg:w-64' />
                        <p>These are html5 base projects</p>
                        <div className="card-actions justify-end">
                            <Link to='/html'><button className="btn btn-outline btn-primary">See Projects</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;