import React from 'react';
import '../../layouts/Main.css';

const Skills = () => {
    return (
        <div className='w-full m-5 p-4'>
            <h2 className='w-full text-xl lg:text-3xl font-bold text-violet-900'>Desired Skills</h2>
            <hr />
            <h2 className="card-title t">Expertise</h2>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-3/4 mx-auto'>
                <div className="card w-96 bg-primary text-primary-content py-2 my-2">
                    <div className="card-body">
                        <h2 className="card-title t">MERN & JavaScript</h2>
                        <hr />
                        <div className='grid grid-cols-2 gap-2'>
                            <ul>
                                <li>React JS</li>
                                <li>Node JS</li>
                                <li>Express JS</li>
                                <li>Angular JS</li>
                            </ul>
                            <ul>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>ES6</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-primary text-primary-content py-2 my-2">
                    <div className="card-body">
                        <h2 className="card-title t">Front End & CSS Framework</h2>
                        <hr/>
                        <div className='grid grid-cols-2 gap-2'>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap5.2</li>
                                <li>React-Bootstrap</li>
                            </ul>
                            <ul>
                                <li>TailwindCSS</li>
                                <li>DaisyUI</li>
                                <li>MaterialUI</li>
                                <li>Recatstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-primary text-primary-content py-2 my-2">
                    <div className="card-body">
                        <h2 className="card-title t text-sm">Programming language & Framework</h2>
                        <hr />
                        <div className='grid grid-cols-2 gap-2'>
                            <ul>
                                <li>C Programming</li>
                                <li>C++ Programming</li>
                                <li>Java Programming</li>
                                <li>Java Swing</li>

                            </ul>
                            <ul>
                                <li>Spring Framework</li>
                                <li>React library</li>
                                <li>Python Programming</li>
                                <li>Django Framework</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-primary text-primary-content py-2 my-2">
                    <div className="card-body">
                        <h2 className="card-title t">Technical Skill and Deploy site</h2>
                        <hr />
                        <div className='grid grid-cols-2 gap-2'>
                            <ul>
                                <li>Git & GitBash</li>
                                <li>GitHub</li>
                                <li>Firebase</li>
                                <li>Netlify</li>
                            </ul>
                            <ul>
                                <li>Vercel</li>
                                <li>JSON</li>
                                <li>Email JS</li>
                                <li>Node Mailer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;