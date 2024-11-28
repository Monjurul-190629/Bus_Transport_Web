"use client";

import React from "react";
import Swal from "sweetalert2";

const Banner = () => {



    const handleCoupon = (e) => {
        e.preventDefault();
        const form = e.target;
        const from = form.from.value;
        const to = form.to.value;
        if ((from.toLowerCase() == 'sirajgonj' && to.toLowerCase() == 'dhaka') || (from.toLowerCase() == 'dhaka' && to.toLowerCase() == 'sirajgonj')) {
            Swal.fire({
                html: `
                  <div style="font-size: 3rem; color: orange;">
                    <img src = "https://i.pinimg.com/originals/87/6f/ab/876fab6207f93c293ae77a70f188c402.gif" className = "h-2 ">
                  </div>
                `,
                title: "Congrats, You win a Coupon. </br> Coupon code : A23AAB4",
                width: 600,

                padding: "3em",
                color: "green",
                background: "#fff url(/images/trees.png)",
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/https://i.pinimg.com/originals/87/6f/ab/876fab6207f93c293ae77a70f188c402.gif")
                  left top
                  no-repeat
                `,
                
            });

        }
        else{
            Swal.fire({
                icon: "error",
                title: "Sorry...",
                text: "Not at this moment",
                footer: '<a href="#"></a>'
              });
        }
    }






    return (
        <div className="relative flex justify-center items-center w-full mb-10">
            {/* Image */}
            <img
                src="/hero-illustration (1).jpg" // Direct path from the `public` folder
                className="w-full h-[450px] max-w-screen-xl object-cover"
                alt="hero-illustration"
            />

            {/* Overlay Content */}
            <form className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg flex flex-col md:flex-row space-x-0 md:space-x-3 items-center " onSubmit={handleCoupon}>
                <input
                    type="text"
                    name="from"
                    placeholder="From"
                    className="placeholder-gray-700 text-[18px] px-1 py-2 text-green-900 bg-white border-b-2 border-green-600 focus:outline-none"
                />
                <input
                    type="text"
                    name="to"
                    placeholder="To"
                    className="placeholder-gray-700 text-[18px]  px-1 py-2 text-green-900 bg-white border-b-2 border-green-600 focus:outline-none"
                />
                <button type="submit" className="mt-4 md:mt-0 px-4 py-2 w-[150px] text-[18px] bg-green-600 text-white rounded-md hover:bg-green-800">
                    Get Coupon
                </button>
            </form>
        </div>
    );
};

export default Banner;
