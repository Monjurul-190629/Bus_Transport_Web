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
        <div className=" py-20 text-white flex lg:flex-row flex-col gap-10 justify-center">
            <div className="py-10 border-2 border-green">
                <div className="bg-green-900 p-5">
                    <div className="border-1 py-5 px-10 bg-green-600 border-green-300 mt-10 hover:bg-green-600">
                        <p>Phone: 01812967146</p>
                    </div>
                    <div className="border-1 py-5 px-10 bg-green-600 border-green-300 mt-10 hover:bg-green-600">
                        <p>Email: monjurulalam190629@gmail.com</p>
                    </div>
                    <div className="border-1 py-5 px-10 bg-green-600 border-green-300 mt-10 hover:bg-green-600">
                        <p>Address: Pabna, Bangladesh</p>
                    </div>
                </div>
                <div className="bg-green-900 p-5">
                    <div className="border-1 py-5 px-10 bg-green-600 border-slate-300 mt-10 hover:bg-green-500">
                        <p className="bold text-2xl">Follow me</p><br />
                        <div className="flex gap-5">
                            <a href="https://www.facebook.com/Monjurul0629/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-3xl hover:text-green-400" />
                            </a>
                            <a href="https://github.com/Monjurul-190629/" target="_blank" rel="noopener noreferrer">
                                <FaSquareGithub className="text-3xl hover:text-green-400" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <IoLogoLinkedin className="text-3xl hover:text-green-400" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:py-20 py-10 px-10">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                        <input
                            type="text"
                            name="from_name"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs placeholder-white bg-green-800  border-1 border-white "
                            required
                        />
                        <input
                            type="email"
                            name="from_email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs placeholder-white bg-green-800  border-1 border-white "
                            required
                        />
                        <input
                            type="text"
                            name="from_phone"
                            placeholder="Phone"
                            className="input input-bordered w-full max-w-xs placeholder-white bg-green-800  border-1 border-white "
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="input input-bordered w-full max-w-xs placeholder-white bg-green-800  border-1 border-white "
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            placeholder="Enter your query here"
                            rows="6"
                            cols="30"
                            className="border border-gray-300 p-5 placeholder-white bg-green-800  mt-10"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn bg-green-800 mt-5 text-white hover:bg-blue-400 hover:text-black">
                            Submit message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
