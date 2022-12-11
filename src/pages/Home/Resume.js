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
                <div className="modal-box width mx-auto">
                    <div ref={ref} className='bg-white w-full m-5 text-black'>
                        <div className='w-full text-justify'>
                            <h3 className="my-0 text-xl font-bold text-blue-900">MD MUBARAK HOSSAIN</h3>
                            <p className="py-0 my-0 text-primary text-sm">MERN Stack Developer</p>
                            <p className="py-0 my-0">Raipura,Narsingdi</p>
                        </div>
                        <div className='flex w-full mx-auto'>
                            <p>LinkedIn</p>
                            <p>|</p>
                            <p>Contact</p>
                            <p>|</p>
                            <p>Gmail</p>
                            <p>|</p>
                            <p>GitHub</p>
                        </div>
                        <div className='w-full text-justify'>
                            <h2 className='text-xl font-bold text-blue-900 resume w-full'>Summary</h2>
                            <p>
                                I am a curious, positive, enthusiastic and competent MERN Stack Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee. I will perform highly in this role.
                            </p>
                        </div>
                        <div className='w-full text-justify'>
                            <h2 className='text-xl font-bold text-blue-900 resume w-full'>Skills</h2>
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
                        <h2 className='text-xl font-bold text-blue-900 resume w-full'>Projects</h2>
                        <div className='w-full text-justify grid grid-cols-1 lg:grid-cols-2'>
                            <div className='w-full'>
                                <h2 className='text-justify font-bold text-blue-900  underlined'>MOBILE RESELL </h2>
                                <p className='pt-5'>LIVE-SITE</p>
                                <p>CLIENT-SITE</p>
                                <p>SERVER-SITE</p>
                                <div className='w-full'>
                                    <h2 className='text-lg font-bold text-primary text-justify'>FEATURES</h2>
                                    <ul className='ml-6'>
                                        <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                    </ul>
                                    <p>Short sescription</p>
                                </div>
                                <p>Visit this website</p>
                            </div>
                            <div>
                                <h2 className='text-center font-bold text-blue-900  underlined'>LAWER GHHOR</h2>
                                <p className='pt-5'>LIVE-SITE</p>
                                <p>CLIENT-SITE</p>
                                <p>SERVER-SITE</p>
                                <div className='w-full'>
                                    <h2 className='text-lg font-bold text-primary text-justify'>FEATURES</h2>
                                    <ul className='ml-6'>
                                        <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                    </ul>
                                    <p>Short sescription</p>
                                </div>
                                <p>Visit this website</p>
                            </div>
                            <div>
                                <h2 className='text-center font-bold text-blue-900  underlined'>PROGRAMMING SCHOOL</h2>
                                <p className='pt-5'>LIVE-SITE</p>
                                <p>CLIENT-SITE</p>
                                <p>SERVER-SITE</p>
                                <div className='w-full'>
                                    <h2 className='text-lg font-bold text-primary text-justify'>FEATURES</h2>
                                    <ul className='ml-6'>
                                        <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                    </ul>
                                    <p>Short sescription</p>
                                </div>
                                <p>Visit this website</p>
                            </div>
                            <div>
                                <h2 className='text-center font-bold text-blue-900  underlined'>HOTEL NIGHT</h2>
                                <p className='pt-5'>LIVE-SITE</p>
                                <p>CLIENT-SITE</p>
                                <p>SERVER-SITE</p>
                                <div className='w-full'>
                                    <h2 className='text-lg font-bold text-primary text-justify'>FEATURES</h2>
                                    <ul className='ml-6'>
                                        <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                        <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                        </li>
                                    </ul>
                                    <p>Short sescription</p>
                                </div>
                                <p>Visit this website</p>
                            </div>
                        </div>
                        <div className='text-justify w-full'>
                            <h2 className='text-xl font-bold text-blue-900 resume w-full'>EDUCATIONAL QUALIFICATION</h2>
                            <p>Computer Science and Engineering</p>
                            <p>Shanto Mariam University Of Creative Technology</p>
                            <p>Uttara,Dhaka,Bangladesh</p>
                        </div>
                    </div>
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