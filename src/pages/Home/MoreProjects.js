import React from 'react';
import { Link } from 'react-router-dom';
import css from '../../components/assets/css.jpg';
import htmlImg from '../../components/assets/html.jpg';
const MoreProjects = () => {
    return (
        <div>
            <div className="card bg-base-100">
                <div className="card-body flex flex-col">
                    <h2 className="card-title">CSS</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
                        <img src={css} alt="" className='lg:h-20 lg:w-64' />
                        <p>These are raw css3, tailwindcss, bootstrap, materialUI base projects</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to='/css'><button className="btn btn-outline btn-primary">See Projects</button></Link>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100">
                <div className="card-body flex flex-col">
                    <h2 className="card-title">HTML5</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-1'>
                        <img src={htmlImg} alt="" className='lg:h-20 lg:w-64' />
                        <p>These are html5 base projects</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to='/html'><button className="btn btn-outline btn-primary">See Projects</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreProjects;