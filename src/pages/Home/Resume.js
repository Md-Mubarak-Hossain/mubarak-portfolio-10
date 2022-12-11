import React from 'react';
import { createRef } from 'react';
import ReactToPdf from 'react-to-pdf';
import { BsDownload, BsJournalCheck } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import '../../layouts/Main.css';


const ref = createRef();

const Resume = () => {
    return (
        <div className='w-full p-5'>
            <label htmlFor="my-modal-5" className="btn btn-outline btn-primary"><BsJournalCheck className='text-xl font-bold text-warning'></BsJournalCheck> Download Resume</label>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal modal-middle w-full">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='A4 flex flex-col place-items-center justify-center items-center' ref={ref}>
                        <div className="A4Margin py-5">
                            <div className='bg-white A4Content  text-black'>
                                <div className='A4Content text-justify'>
                                    <h3 className="my-0 text-blue-900">MD MUBARAK HOSSAIN</h3>
                                    <p className="py-0 my-0 text-primary text-xs">MERN Stack Developer</p>
                                    <p className="py-0 my-0">Raipura,Narsingdi</p>
                                </div>
                                <div className='text-xs flex A4Content'>
                                    <p>LinkedIn</p>
                                    <p>|</p>
                                    <p>Contact</p>
                                    <p>|</p>
                                    <p>Gmail</p>
                                    <p>|</p>
                                    <p>GitHub</p>
                                </div>
                                <div className='A4Content text-justify'>
                                    <h2 className='font-bold text-blue-900 resume A4Title'>Summary</h2>
                                    <p className='px-1'>
                                        I am a curious, positive, enthusiastic and competent MERN Stack Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee. I will perform highly in this role.
                                    </p>
                                </div>
                                <div className='A4Content text-justify'>
                                    <h2 className='font-bold text-blue-900 resume A4Title'>Skills</h2>
                                    <div className='flex'>
                                        <p>HTML5</p>
                                        <p>CSS3</p>
                                        <p>TailwindCSS3</p>
                                        <p>Bootstrap5.2</p>
                                        <p>JavaScript</p>
                                        <p>EXPRESS.Js</p>
                                        <p>NODE.JS</p>
                                        <p>MongoDB</p>
                                    </div>
                                </div>
                                <h2 className='font-bold text-blue-900 resume A4Title'>Projects</h2>
                                <div className='A4Content text-justify grid grid-cols-2 gap-2'>
                                    <div className='p-2 text-sm'>
                                        <h2 className='text-blue-900 '>MOBILE RESELL</h2>
                                        <div className='grid grid-cols-3'>
                                            <p>LIVE-SITE</p>
                                            <p>CLIENT-SITE</p>
                                            <p>SERVER-SITE</p>
                                        </div>
                                        <div>
                                            <h2 className='text-primary text-justify'>FEATURES</h2>
                                            <ul className='px-5'>
                                                <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                                </li>
                                                <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                                </li>
                                                <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='text-sm p-2'>
                                        <h2 className='text-blue-900  text-justify'>LAWER GHHOR</h2>
                                        <div className='grid grid-cols-3'>
                                            <p>LIVE-SITE</p>
                                            <p>CLIENT-SITE</p>
                                            <p>SERVER-SITE</p>
                                        </div>
                                        <div>
                                            <h2 className='text-primary text-justify'>FEATURES</h2>
                                            <ul className='px-5'>
                                                <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                                </li>
                                                <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                                </li>
                                                <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='text-sm p-2'>
                                        <h2 className='text-blue-900  text-justify'>PROGRAMMING SCHOOL</h2>
                                        <div className='grid grid-cols-3'>
                                            <p>LIVE-SITE</p>
                                            <p>CLIENT-SITE</p>
                                            <p>SERVER-SITE</p>
                                        </div>
                                        <div>
                                            <h2 className='text-primary text-justify'>FEATURES</h2>
                                            <ul className='px-5'>
                                                <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                                </li>
                                                <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                                </li>
                                                <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='text-sm '>
                                        <h2 className='text-blue-900  text-justify'>HOTEL NIGHT</h2>
                                        <div className='grid grid-cols-3'>
                                            <p>LIVE-SITE</p>
                                            <p>CLIENT-SITE</p>
                                            <p>SERVER-SITE</p>
                                        </div>
                                        <div>
                                            <h2 className='text-primary text-justify'>FEATURES</h2>
                                            <ul className='px-5'>
                                                <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                                </li>
                                                <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                                </li>
                                                <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div >
                                <div className='text-justify A4Content'>
                                    <h2 className='text-blue-900 resume A4Title'>EDUCATIONAL QUALIFICATION</h2>
                                    <p>Computer Science and Engineering</p>
                                    <p>Shanto Mariam University Of Creative Technology</p>
                                    <p>Uttara,Dhaka,Bangladesh</p>
                                </div>
                            </div >
                        </div >
                    </div >
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-outline btn-warning"><ImCancelCircle className='text-xl font-bold text-red-600'></ImCancelCircle></label>
                        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                            {({ toPdf }) => (
                                <label onClick={toPdf} className="btn btn-outline btn-warning"><BsDownload className='text-xl font-bold text-blue-900'></BsDownload></label>
                            )
                            }
                        </ReactToPdf >
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Resume;