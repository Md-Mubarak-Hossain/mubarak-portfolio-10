import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact=()=> {
    const form = useRef();
    const sendEmail = (event) => {
        event.preventDefault();
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    alert('message sent successfully...');
                    event.target.reset();
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div id='email' className='m-2 p-2'>
            < h1 className='text-2xl font-semibold text-fuchsia-600 w-full pb-2'>Stay Contact</h1>
            <form id='contact' className='w-full place-items-center flex flex-col justify-center items-center py-5  bg-fuchsia-200 rounded-xl' ref={form} onSubmit={sendEmail}>
                <div className='w-full lg:w-1/2 p-8'>
                   <div className='grid grid-cols-2 gap-2'>
                    <div className=''>
                            <div className='form-control w-full py-3'>
                                <input type='text' className='input input-bordered' placeholder='Your name' name='user_name' />
                            </div>
                            <div className='form-control w-full py-3'>
                                <input type='email' className='input input-bordered' placeholder='Enter email address' name='user_email' />
                            </div>
                        </div>
                        <div className='form-control w-full py-2'>
                            <textarea name='message' type='textarea' className="textarea textarea-bordered h-32"placeholder='Message' />                       
                        </div>
                   </div>
                    <input className='btn bg-fuchsia-600 w-full py-2' type='submit' value='Submit' id='input-submit' />
                </div>
            </form>
        </div >
    );
}

export default Contact;