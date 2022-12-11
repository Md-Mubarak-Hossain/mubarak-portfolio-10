import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiMongodb, SiNodedotjs, SiReact } from 'react-icons/si';
import '../../layouts/Main.css';

const Skills = () => {
    return (
        <div className=' w-full flex flex-col place-items-center'>
            <div className='text-justify py-5'>
                <h2 className='text-4xl font-bold text-primary underlined'>Skills</h2>
            </div>
            <ul className="menu grid grid-cols-1 lg:grid-cols-2 bg-base-100 w-11/12 mx-auto">
                <li className='p-2 w-full'>
                    <div className='flex w-full'>
                        <div className='w-1/4'>
                            <IoLogoJavascript className="w-24 h-24 text-primary font-extrabold"></IoLogoJavascript>
                        </div>
                        <div className='w-3/4 text-justify'>
                            <h2 className='underlined text-primary'>JavaScript</h2>
                            <p className='w-full pt-2'>
                                JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
                            </p>
                        </div>
                    </div>
                    <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                </li>
                <li className='p-2 w-full'>
                    <div className='flex w-full'>
                        <div className='w-1/4'>
                            <IoLogoHtml5 className="w-24 h-24 text-primary font-extrabold"></IoLogoHtml5>
                        </div>
                        <div className='w-3/4 text-justify'>
                            <h2 className='underlined text-primary'>HTML5</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                            </p>
                        </div>
                    </div>
                    <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                </li>
                <li className='p-2 w-full'>
                    <div className='flex w-full'>
                        <div className='w-1/4'>
                            <IoLogoCss3 className="w-24 h-24 text-primary font-extrabold"></IoLogoCss3>
                        </div>
                        <div className='w-3/4 text-justify'>
                            <h2 className='underlined text-primary'>CSS3</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                            </p>
                        </div>
                    </div>
                    <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                </li>
                <li className='p-2 w-full'>
                    <div className='flex w-full'>
                        <div className='w-1/4'>
                            <SiMongodb className="w-24 h-24 text-primary font-extrabold"></SiMongodb>
                        </div>
                        <div className='w-3/4 text-justify'>
                            <h2 className='underlined text-primary'>MongoDB</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                            </p>
                        </div>
                    </div>
                    <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                </li>
                <li className='p-2 w-full'>
                    <div className='flex w-full'>
                        <div className='w-1/4'>
                            <SiNodedotjs className="w-24 h-24 text-primary font-extrabold"></SiNodedotjs>
                        </div>
                        <div className='w-3/4 text-justify'>
                            <h2 className='underlined text-primary'>Node.JS</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                            </p>
                        </div>
                    </div>
                    <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                </li>
                <li className='p-2 w-full'>
                    <div className='flex w-full'>
                        <div className='w-1/4'>
                            <SiReact className="w-24 h-24 text-primary font-extrabold"></SiReact>
                        </div>
                        <div className='w-3/4 text-justify'>
                            <h2 className='underlined text-primary'>React.JS</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                            </p>
                        </div>
                    </div>
                    <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                </li>
            </ul>
        </div>
    );
};

export default Skills;