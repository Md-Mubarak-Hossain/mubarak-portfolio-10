import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import Contact from '../../Home/Contact';
import { ExternalLink } from 'react-external-link';
const Footer = () => {
    return (
        <div data-theme='night'className='uppercase text-white'>
            <Contact></Contact>
            <footer className="footer footer-center p-10 shadow-2xl shadow-fuchsia-700 w-full">
                <div className='lg:flex flex-col items-center justify-center place-items-center'>
                    <div className="grid lg:grid-flow-col gap-4">
                        <Link to='/about' className="link link-hover">About</Link>
                        <Link to='/blog' className="link link-hover"> Blog</Link>
                        <ExternalLink href='https://drive.google.com/drive/folders/15eHaDMzXfjxXhRrt9bpzbvPE-rhW48-U?usp=sharing' target='_blank' className="link link-hover"> NCTB BOOK</ExternalLink>
                    </div>
                    <div>
                        <div className="grid grid-flow-col gap-4">
                            <ExternalLink href='https://www.linkedin.com/in/md-mubarak-hossain-662113201/'><BsLinkedin className='font-extrabold text-xl'></BsLinkedin></ExternalLink>
                            <ExternalLink href='https://github.com/Md-Mubarak-Hossain'><BsGithub className='font-extrabold text-xl'></BsGithub></ExternalLink>
                            <ExternalLink href='https://www.facebook.com/mubarak.parvej'><BsFacebook className='font-extrabold text-xl'></BsFacebook></ExternalLink>
                        </div>
                    </div >
                </div>
            </footer >
            <div className='text-white normal-case'>
                <p className='menu lg:menu-horizontal'>
                    <li>Copyright © 2022</li>
                    <li>- All right reserved by &nbsp;</li>
                    <li> MD MUBARAK HOSSAIN </li>
                </p>
            </div>
        </div >
    );
};

export default Footer;