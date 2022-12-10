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
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div>
            <h1> Contact</h1 >
            <form id='contact' className=' w-full bg-slate-600 place-items-center flex flex-col justify-center items-center py-10' ref={form} onSubmit={sendEmail}>
                <div className='w-1/2 border p-10'>
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