import React from 'react';
import { createRef } from 'react';
import ReactToPdf from 'react-to-pdf';
import { BsDownload, BsJournalCheck } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';

const ref = createRef();

const Resume = () => {
    return (
        <div>
            <label htmlFor="my-modal-5" className="btn btn-outline btn-primary"><BsJournalCheck className='text-3xl font-bold text-warning'></BsJournalCheck> Resume</label>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-auto max-w-5xl mx-auto">
                    <div ref={ref} className='bg-black text-red-700'>
                        <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-outline btn-warning"><ImCancelCircle className='text-3xl font-bold text-red-600'></ImCancelCircle></label>
                        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
                            {({ toPdf }) => (
                                // <button onClick={toPdf}>Generate pdf</button>

                                <label onClick={toPdf} className="btn btn-outline btn-warning"><BsDownload className='text-3xl font-bold text-primary'></BsDownload></label>
                            )
                            }
                        </ReactToPdf >
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;