import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import myImg from '../components/assets/halfImg-2.png';
const Main = () => {
    const menu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='#contact'>Contact</Link></li>
    </>
    return (
        <>
            <div className="drawer">
                <input id="navbar-menu-portfolio" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar bg-black text-white shadow-lg">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="navbar-menu-portfolio" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 pt-2">
                            <div className="avatar">
                                <div className="w-20 rounded-full">
                                    <img src={myImg} alt="" />
                                </div>
                            </div>
                            <h2 className='lg:font-extrabold lg:text-2xl'>MUBARAK'S PORTFOLIO</h2>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {menu}
                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="navbar-menu-portfolio" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        {menu}
                    </ul>
                </div>
            </div >
            <Footer></Footer>
        </>
    );
};

export default Main;