import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsTwitter, BsFacebook } from 'react-icons/bs';
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-white text-primary shadow-2xl">
            <div className="grid grid-flow-col gap-4">
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover"> Jobs</Link>
                <Link className="link link-hover"> Press kit</Link>
            </div >
            <div>
                <div className="grid grid-flow-col gap-4">
                    <Link><BsLinkedin></BsLinkedin></Link>
                    <Link><BsGithub></BsGithub></Link>
                    <Link><BsTwitter></BsTwitter></Link>
                    <Link><BsFacebook></BsFacebook></Link>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by MD MUBARAK HOSSAIN</p>
            </div>
        </footer>
    );
};

export default Footer;