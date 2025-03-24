"use client";

import React from "react";
import Swal from "sweetalert2";
import Image from "next/image";

const Banner = () => {
    const handleCoupon = (e) => {
        e.preventDefault();
        const form = e.target;
        const from = form.from.value;
        const to = form.to.value;

        if ((from.toLowerCase() === "sirajgonj" && to.toLowerCase() === "dhaka") || (from.toLowerCase() === "dhaka" && to.toLowerCase() === "sirajgonj")) {
            Swal.fire({
                title: "🎉 Congrats, You won a Coupon!",
                html: `<p class='text-lg text-green-700 font-semibold'>Coupon Code: <strong>A23AAB4</strong></p>
                        <img src='https://i.pinimg.com/originals/87/6f/ab/876fab6207f93c293ae77a70f188c402.gif' class='mt-3 w-24 h-24 mx-auto' />`,
                width: 400,
                padding: "2em",
                color: "#333",
                background: "#fff",
                backdrop: `rgba(0,0,123,0.4)`,
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "😞 Sorry...",
                text: "Not available at this moment!",
            });
        }
    };

    return (
        <div className="relative flex justify-center items-center w-full mb-10">
            {/* Background Image */}
            <div className="relative w-full h-[500px]  overflow-hidden  shadow-xl">
                <Image
                    src="/hero-illustration (1).jpg"
                    alt="Hero Illustration"
                    fill
                    className="object-cover brightness-75"
                />
            </div>

            {/* Overlay Content */}
            <form
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-90 p-6 rounded-lg shadow-xl flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center w-[90%] md:w-auto"
                onSubmit={handleCoupon}
            >
                <input
                    type="text"
                    name="from"
                    placeholder="From"
                    className="placeholder-gray-700 text-lg px-3 py-2 text-green-900 bg-white border-b-2 border-green-600 focus:outline-none w-full md:w-auto"
                />
                <input
                    type="text"
                    name="to"
                    placeholder="To"
                    className="placeholder-gray-700 text-lg px-3 py-2 text-green-900 bg-white border-b-2 border-green-600 focus:outline-none w-full md:w-auto"
                />
                <button
                    type="submit"
                    className="px-5 py-3 text-lg font-semibold bg-green-700 text-white rounded-md hover:bg-green-900 transition w-full md:w-auto"
                >
                    🎟️ Get Coupon
                </button>
            </form>
        </div>
    );
};

export default Banner;
