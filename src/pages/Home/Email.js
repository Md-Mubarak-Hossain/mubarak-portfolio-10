import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Email() {
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
        <div className='pt-10'>
            <h1 className='text-start text-3xl text-pink-600 underlined w-full'>Stay Contact</h1 >
            <form id='contact' className='w-full place-items-center flex flex-col justify-center items-center py-10' ref={form} onSubmit={sendEmail}>
                <div className='w-full lg:w-1/2 p-8 lg:p-10'>
                    <div className='form-control w-full py-2'>
                        <input type='text' className='input input-bordered' placeholder='Name' name='user_name' />
                    </div>
                    <div className='form-control w-full py-2'>
                        <input type='email' className='input input-bordered' placeholder='Email address' name='user_email' />
                    </div>
                    <div className='form-control w-full py-2'>
                        <textarea name='message' type='text' className='input input-bordered' placeholder='Message'></textarea>
                    </div>
                    <input className='btn btn-primary w-full' type='submit' value='Submit' id='input-submit' />
                </div>
            </form>

        </div >
    );
}

export default Email;