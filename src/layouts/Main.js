import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import { BsJournalCheck, BsSun, BsMoon } from 'react-icons/bs';
import './Main.css';
import { ExternalLink } from 'react-external-link';
import ScrollToTop from '../components/ButtonScrol/ScrollToTop';
import logo from '../components/assets/logo.png';

const Main = () => {
    const [them, setThem] = useState('light')
    const menu = <>
        <label className="swap swap-rotate">
            <input type="checkbox" />
            <BsMoon onClick={() => setThem('night')} className="swap-on fill-current w-5 h-5"></BsMoon>
            <BsSun onClick={() => setThem('light')} className="swap-off fill-current w-5 h-5"></BsSun>
        </label>
        <li className='uppercase'><Link to='/'>Home</Link></li>
        <li className='uppercase'><ExternalLink href='https://drive.google.com/file/d/1AK8gwBK2FlwqtSXYiWec0_1TzwnEHKRO/view?usp=sharing'><label className="btn btn-outline btn-primary btn-xs"><BsJournalCheck className='font-bold text-warning'></BsJournalCheck> Resume</label></ExternalLink></li>
        <li className='uppercase'><Link to='/projects'>Projects</Link></li>
        <li className='uppercase'><Link to='/blog'>Blog</Link></li>
        {/* <li className='uppercase'><a href='#email'>Contact</a></li> */}
        {/* <li className='uppercase'><Link to='/about'>About</Link></li> */}
    </>

    return (
        <div data-theme={them}>
            <div className="drawer">
                <ScrollToTop />
                <input id="navbar-menu-portfolio" type="checkbox" className="drawer-toggle w-0 h-0" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar  shadow-2xl shadow-violet-900 py-1 h-20">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="navbar-menu-portfolio" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 pt-2">
                            <div className='w-12 h-12 flex flex-col justify-center items-center place-items-center'>
                            <img src={logo} alt="" className='w-full rounded-full bg-white pt-2 px-1'/>
                            </div>
                            <h2 className='lg:font-semibold lg:text-xl hidden lg:block'><span className='text-violet-700'>Mubarak's</span> World</h2>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal place-items-center">
                                {menu}
                            </ul>
                        </div>
                    </div >
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
                <div className="drawer-side">
                    <label htmlFor="navbar-menu-portfolio" className="drawer-overlay"></label>
                    <ul className="menu px-4 pt-10 w-80  bg-black text-white place-items-center">
                        {menu}
                    </ul>
                </div>
            </div >

        </div >
    );
};

export default Main;