"use client";
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { FaUserGroup } from "react-icons/fa6";
import { FaBed } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import Swal from 'sweetalert2';
import Image from 'next/image';

const Card = ({ price, seat, image, name }) => {
    const [showPayButton, setShowPayButton] = useState(false); // State to manage "Pay" button visibility
    const [bookingDetails, setBookingDetails] = useState(null);
    const { data: session } = useSession();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const day = form.day.value;
        const coupon = form.coupon.value;
        let Paid_amount = day * price;

        if (coupon == 'A23AAB4') {
            Paid_amount = paid_amount - (paid_amount * 20 / 100);
        }
        

        const name1 = session?.user?.name;
        const email = session?.user?.email;
        // Save booking details in state
        const details = {

            name1,
            email,
            name,
            day,
            Paid_amount,
            time: new Date().toISOString(),
        };
        setBookingDetails(details);


        document.getElementById('pay').innerHTML = "You have to pay : " + Paid_amount;

        // Show the "Pay" button after confirm
        setShowPayButton(true);


    };

    const handleClose = () => {
        const form = document.querySelector('#my_modal_1 form'); // Select the form inside the modal
        form.reset(); // Reset the form fields
        document.getElementById('pay').innerHTML = ''; // Clear the payment message
        setShowPayButton(false); // Hide the "Pay" button
    };


    const handlePay = async () => {
        const form = document.querySelector('#my_modal_1 form'); // Select the form inside the modal
        form.reset(); // Reset the form fields
        document.getElementById('pay').innerHTML = ''; // Clear the payment message
        setShowPayButton(false);
        Swal.fire({
            title: "Congrats, You are to ready to Booking.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `
          });
    };

    return (
        <div>
            <div>
                <Image
                    src={image}
                    alt=""
                    className="h-[300px] w-[400px] rounded-lg"
                />
                <div className="flex justify-center -mt-12">
                    <div className="text-center bg-slate-200 rounded-lg w-[320px] py-5 px-5">
                        <p className="text-3xl font-bold text-black">{name}</p>
                        <p className="text-slate-600 pb-5">
                            <span className="text-green-700 font-semibold text-2xl">
                                ${price}
                            </span>
                            /per day
                        </p>
                        <p className="flex justify-center gap-2 text-slate-600">
                            <span className="text-xl text-green-700">
                                <FaUserGroup />
                            </span>
                            {seat} seat
                        </p>
                        <p className="flex justify-center gap-2 text-slate-600">
                            <span className="text-xl text-green-700">
                                <FaBed />
                            </span>
                            2 driver Staff
                        </p>
                        <p className="flex justify-center gap-2 text-slate-600">
                            <span className="text-xl text-green-700">
                                <IoIosSettings />
                            </span>
                            Manual
                        </p>
                        <button
                            className="btn mt-5 bg-green-700 rounded-xl text-white hover:bg-green-900"
                            onClick={() => document.getElementById('my_modal_1').showModal()}
                        >
                            Book now
                        </button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <div className="">
                                    <form onSubmit={handleSubmit}>
                                        <h3 className="font-bold text-lg">{name}!</h3>
                                        <div className="">
                                            <label>Days: </label>
                                            <input
                                                type="text"
                                                name="day"
                                                placeholder="Days"
                                                className="mt-4 outline-0 border-b-2 border-green-700 placeholder-slate-500"
                                            />
                                        </div>
                                        <div>
                                            <label>Coupon: </label>
                                            <input
                                                type="text"
                                                name="coupon"
                                                placeholder="Coupon"
                                                className="outline-0 mt-5 border-b-2 border-green-700 placeholder-slate-500"
                                            />
                                            <br />
                                        </div>
                                        <input
                                            type="submit"
                                            value="Confirm"
                                            className="bg-green-700 hover:bg-green-800 text-white mt-5 px-3 py-2 rounded-lg"
                                        />
                                        <div className="mt-5">
                                            <span
                                                id="pay"
                                                className="text-xl font-semibold text-green-800"
                                            ></span>
                                            {/* Conditionally render the "Pay" button */}
                                            {showPayButton && (
                                                <button onClick={handlePay} className="btn ml-4 bg-green-200 hover:bg-green-300 text-black border-2 border-black" >
                                                    Pay
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button
                                            className="btn bg-green-700 hover:bg-green-900 text-white"
                                            onClick={handleClose}
                                        >
                                            Close
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
