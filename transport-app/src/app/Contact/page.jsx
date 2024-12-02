"use client"

import React, { useRef } from 'react';
import dynamic from 'next/dynamic'; // For client-side-only libraries
import { FaFacebook } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5qn4bcd', 'template_p0y2f7b', form.current, 'ZNaeCns0HE2S0LkQW')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Message has been successfully sent",
                        showConfirmButton: false,
                        timer: 1500
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Message not sent",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            );

        e.target.reset();
    };

    return (
        <div className=" py-16 text-black flex lg:flex-row flex-col gap-10 justify-center">
            <div className="py-10 border-2 font-semibold border-green">
                <div className="bg-green-700 pt-12 px-10 rounded-md">
                    <div className="border-1 py-5 rounded-md px-10 bg-slate-300 border-green-300 mt-10 hover:bg-slate-300">
                        <p>Phone: 01812967146</p>
                    </div>
                    <div className="border-1 py-5 px-10 bg-slate-300 rounded-md border-green-300 mt-10 hover:bg-slate-300">
                        <p>Email: monjurulalam190629@gmail.com</p>
                    </div>
                    <div className="border-1 py-5 px-10 bg-slate-300 rounded-md border-green-300 mt-10 hover:bg-slate-300">
                        <p>Address: Pabna, Bangladesh</p>
                    </div>
                </div>
                <div className="bg-green-700 px-10 pt-5 pb-12 rounded-b-md">
                    <div className="border-1 py-5 px-10 bg-slate-300 border-slate-300 mt-10 rounded-md">
                        <p className="bold text-2xl">Follow us</p><br />
                        <div className="flex gap-5">
                            <a href="https://www.facebook.com/Monjurul0629/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-3xl hover:text-blue-700" />
                            </a>
                            <a href="https://github.com/Monjurul-190629/" target="_blank" rel="noopener noreferrer">
                                <FaSquareGithub className="text-3xl hover:text-blue-700" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <IoLogoLinkedin className="text-3xl hover:text-blue-700" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:py-20 py-10 px-10 ">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10 gap-y-5">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs text-black placeholder-slate-800 bg-slate-100 border-2   border-slate-800 "
                            required
                        />
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs text-black placeholder-slate-700 bg-slate-100 border-2   border-slate-700 "
                            required
                        />
                        <input
                            type="text"
                            name="from_phone"
                            placeholder="Phone"
                            className="input input-bordered w-full max-w-xs text-black placeholder-slate-700 bg-slate-100 border-2  border-slate-700 "
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="input input-bordered w-full max-w-xs text-black placeholder-slate-700 bg-slate-100 border-2  border-slate-700 "
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Enter your query here"
                            rows="6"
                            cols="30"
                            className=" border-slate-700 p-5 text-black placeholder-slate-700 bg-slate-100 border-2  mt-10"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn bg-green-800 mt-5 text-white hover:bg-blue-700 hover:text-white">
                            Submit message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
