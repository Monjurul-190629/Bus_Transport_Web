"use client";

import React, { useRef } from "react";
import { FaFacebook, FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_5qn4bcd", "template_p0y2f7b", form.current, "ZNaeCns0HE2S0LkQW")
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Message has been successfully sent",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    Swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: "Message not sent",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            );

        e.target.reset();
    };

    return (
        <div className="py-16 px-6 lg:px-20 bg-gradient-to-b from-gray-50 to-gray-200">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
                {/* Left Section - Contact Info & Socials */}
                <div className="w-full lg:w-1/3 bg-green-700 text-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <div className="space-y-4">
                        <div className="p-4 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-100 transition">
                            <p className="font-medium">📞 Phone: 01812967146</p>
                        </div>
                        <div className="p-4 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-100 transition">
                            <p className="font-medium">📧 Email: monjurulalam190629@gmail.com</p>
                        </div>
                        <div className="p-4 bg-white text-gray-800 rounded-lg shadow-md hover:bg-gray-100 transition">
                            <p className="font-medium">📍 Address: Pabna, Bangladesh</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex gap-5 mt-3">
                            <a href="https://www.facebook.com/Monjurul0629/" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-3xl hover:text-blue-500 transition" />
                            </a>
                            <a href="https://github.com/Monjurul-190629/" target="_blank" rel="noopener noreferrer">
                                <FaSquareGithub className="text-3xl hover:text-gray-800 transition" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <IoLogoLinkedin className="text-3xl hover:text-blue-600 transition" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="from_name"
                                placeholder="Your Name"
                                className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            />
                            <input
                                type="email"
                                name="from_email"
                                placeholder="Your Email"
                                className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                                required
                            />
                            <input
                                type="text"
                                name="from_phone"
                                placeholder="Phone (Optional)"
                                className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                className="input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Enter your query here..."
                            rows="5"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                        >
                            Submit Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
