import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../pages/shared/footer/Footer';
import myImg from '../components/assets/halfImg-2.png';
import { BsJournalCheck, BsSun, BsMoon } from 'react-icons/bs';
import './Main.css';
import { ExternalLink } from 'react-external-link';

const Main = () => {
    const [them, setThem] = useState('')
    const menu = <>
        <label className="swap swap-rotate">
            <input type="checkbox" />
            <BsSun onClick={() => setThem('light')} className="swap-on fill-current w-5 h-5"></BsSun>
            <BsMoon onClick={() => setThem('night')} className="swap-off fill-current w-5 h-5"></BsMoon>
        </label>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>

        <li><ExternalLink href='https://drive.google.com/file/d/1HWiUoJXFvkxnT6kiVffgx09P7qJNUgWO/view'><label className="btn btn-outline btn-primary btn-xs"><BsJournalCheck className='font-bold text-warning'></BsJournalCheck>CV</label></ExternalLink></li>
        <li><ExternalLink href='https://drive.google.com/file/d/1l5KtH3PlLta251X3SVlnafU_J_lnsRsb/view?usp=sharing'><label className="btn btn-outline btn-primary btn-xs"><BsJournalCheck className='font-bold text-warning'></BsJournalCheck> Resume</label></ExternalLink></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/contact'>Contact</Link></li>

    </>

    return (
        <div data-theme={them}>
            <div className="drawer">
                <input id="navbar-menu-portfolio" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar  shadow-lg">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="navbar-menu-portfolio" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 pt-2">

                            <h2 className='lg:font-extrabold lg:text-2xl underlined'>MUBARAK'S PORTFOLIO</h2>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal place-items-center">
                                {menu}
                            </ul>
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="navbar-menu-portfolio" className="drawer-overlay"></label>
                    <ul className="menu px-4 pt-10 w-80  bg-black text-white place-items-center">
                        {menu}
                    </ul>
                </div>
            </div >
            <Footer></Footer>
        </div>
    );
};

export default Main;