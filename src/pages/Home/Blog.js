import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiMongodb, SiNodedotjs, SiReact, SiExpress } from 'react-icons/si';

const Blog = () => {
    return (
        <div className='w-full text-justify p-10'>

<ul className="grid grid-cols-1 lg:gap-4 bg-base-100 w-full lg:w-11/12 mx-auto lg:grid-cols-2">
                <li className='p-4 w-full shadow-2xl shadow-fuchsia-800 rounded-lg'>
                    <div className='w-full lg:flex'>
                        <div className='w-full lg:w-1/4'>
                            <IoLogoHtml5 className="w-32 h-32 text-violet-900 font-extrabold block"></IoLogoHtml5>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-violet-900'>HTML5</h2>
                            <p className='pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
                <li className='p-4 w-full shadow-2xl shadow-fuchsia-800 rounded-lg'>
                    <div className='w-full lg:flex'>
                        <div className='w-full lg:w-1/4'>
                            <IoLogoCss3 className="w-32 h-32 text-violet-900 font-extrabold block"></IoLogoCss3>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-violet-900'>CSS3</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
                <li className='p-4 w-full shadow-2xl shadow-fuchsia-800 rounded-lg'>
                    <div className='w-full lg:flex'>
                        <div className='w-full lg:w-1/4'>
                            <IoLogoJavascript className="w-32 h-32 text-violet-900 font-extrabold block"></IoLogoJavascript>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-violet-900'>JavaScript</h2>
                            <p className='w-full pt-2'>
                                JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>


                <li className='p-4 w-full shadow-2xl shadow-fuchsia-800 rounded-lg'>
                    <div className='w-full lg:flex'>
                        <div className='w-full lg:w-1/4'>
                            <SiNodedotjs className="w-32 h-32 text-violet-900 font-extrabold block"></SiNodedotjs>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-violet-900'>Node.JS</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
                <li className='p-4 w-full shadow-2xl shadow-fuchsia-800 rounded-lg'>
                    <div className='w-full lg:flex'>
                        <div className='w-full lg:w-1/4'>
                            <SiExpress className="w-32 h-32 text-violet-900 font-extrabold block"></SiExpress>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-violet-900'>Express.JS</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
                <li className='p-4 w-full shadow-2xl shadow-fuchsia-800 rounded-lg'>
                    <div className='w-full lg:flex'>
                        <div className='w-full lg:w-1/4'>
                            <SiReact className="w-32 h-32 text-violet-900 font-extrabold block"></SiReact>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-violet-900'>React.JS</h2>
                            <p className='w-full pt-2'>
                                HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard.
                                <button className='btn btn-active btn-link'><Link>learn more...</Link></button>
                            </p>
                        </div>
                    </div>
                </li>
                <li className='p-4 w-full shadow-2xl shadow-fuchsia-800 rounded-lg'>
                    <div className='w-full lg:flex'>
                        <div className='w-full lg:w-1/4'>
                            <SiMongodb className="w-32 h-32 text-violet-900 font-extrabold block"></SiMongodb>
                        </div>
                        <div className='w-full text-justify lg:w-3/4'>
                            <h2 className='underlined text-violet-900'>MongoDB</h2>
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

export default Blog;