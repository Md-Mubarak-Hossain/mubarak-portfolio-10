import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsTwitter, BsFacebook } from 'react-icons/bs';
import Email from '../../Home/Email';
import { ExternalLink } from 'react-external-link';
const Footer = () => {
    return (
        <div data-theme='night'>
            <Email></Email>
            <footer className="footer footer-center p-10 text-primary shadow-2xl w-full">
                <div className="grid grid-flow-col gap-4 text-white">
                    <Link to='/about' className="link link-hover">About me</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                    <Link to='/projects' className="link link-hover">Projects</Link>
                    <Link to='/blog' className="link link-hover"> Blog site</Link>
                </div>
                <div>
                    <h2>Live Site</h2>
                </div>
                <div className="grid grid-flow-col gap-4 text-white">
                    <ExternalLink href='/about' className="link link-hover">About me</ExternalLink>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                    <Link to='/projects' className="link link-hover">Projects</Link>
                    <Link to='/blog' className="link link-hover"> Blog site</Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link><BsLinkedin className='font-extrabold text-xl text-white'></BsLinkedin></Link>
                        <Link><BsGithub className='font-extrabold text-xl text-white'></BsGithub></Link>
                        <Link><BsTwitter className='font-extrabold text-xl text-white'></BsTwitter></Link>
                        <Link><BsFacebook className='font-extrabold text-xl text-white'></BsFacebook></Link>
                    </div>
                </div >
                <div className='text-white'>
                    <p>Copyright © 2022 - All right reserved by MD MUBARAK HOSSAIN</p>
                </div>
            </footer >
        </div >
    );
};

export default Footer;