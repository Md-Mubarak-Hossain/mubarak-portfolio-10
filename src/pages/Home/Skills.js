import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiMongodb, SiNodedotjs, SiReact, SiExpress } from 'react-icons/si';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import '../../layouts/Main.css';

const Skills = () => {
    return (
        <div className=' w-full flex flex-col place-items-center'>
            <div className='text-justify py-5'>
                <div className='w-full flex flex-col justify-center items-center place-items-center'>
                    <p><HiOutlineAcademicCap className='font-bold text-5xl lg:text-9xl text-primary block'>
                    </HiOutlineAcademicCap></p>
                    <p className='w-full text-2xl lg:text-4xl font-bold text-primary underlined'>Skills & Experience</p>
                </div>
            </div>
            <ul className="grid grid-cols-1  bg-base-100 w-full lg:w-11/12 mx-auto">
                <li className='p-4 w-full'>
                    <div className='w-full lg:flex lg:border'>
                        <div className='w-full lg:w-1/4'>
                            <IoLogoHtml5 className="w-32 h-32 text-primary font-extrabold block"></IoLogoHtml5>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-primary'>HTML5</h2>
                            <p className='pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
                <li className='p-4 w-full'>
                    <div className='w-full lg:flex lg:border'>
                        <div className='w-full lg:w-1/4'>
                            <IoLogoCss3 className="w-32 h-32 text-primary font-extrabold block"></IoLogoCss3>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-primary'>CSS3</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
                <li className='p-4 w-full'>
                    <div className='w-full lg:flex lg:border'>
                        <div className='w-full lg:w-1/4'>
                            <IoLogoJavascript className="w-32 h-32 text-primary font-extrabold block"></IoLogoJavascript>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-primary'>JavaScript</h2>
                            <p className='w-full pt-2'>
                                JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>


                <li className='p-4 w-full'>
                    <div className='w-full lg:flex lg:border'>
                        <div className='w-full lg:w-1/4'>
                            <SiNodedotjs className="w-32 h-32 text-primary font-extrabold block"></SiNodedotjs>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-primary'>Node.JS</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
                <li className='p-4 w-full'>
                    <div className='w-full lg:flex lg:border'>
                        <div className='w-full lg:w-1/4'>
                            <SiExpress className="w-32 h-32 text-primary font-extrabold block"></SiExpress>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-primary'>Express.JS</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
                <li className='p-4 w-full'>
                    <div className='w-full lg:flex lg:border'>
                        <div className='w-full lg:w-1/4'>
                            <SiReact className="w-32 h-32 text-primary font-extrabold block"></SiReact>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-primary'>React.JS</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
                <li className='p-4 w-full'>
                    <div className='w-full lg:flex lg:border'>
                        <div className='w-full lg:w-1/4'>
                            <SiMongodb className="w-32 h-32 text-primary font-extrabold block"></SiMongodb>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-primary'>MongoDB</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Skills;