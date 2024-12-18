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

    const handleSubmit = (e, price) => {
        e.preventDefault();
        const form = e.target;
        const day = form.day.value;
        const coupon = form.coupon.value;
        let Paid_amount = day * price;

        if (coupon == 'A23AAB4') {
            Paid_amount = Paid_amount - (Paid_amount * 20 / 100);
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
    
        // Close the modal after payment
        const modal = document.getElementById('my_modal_1');
        modal.close(); // Close the modal
    
        // Display a success alert
        Swal.fire({
            title: "Congrats, You are ready to book!",
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
            <div className="flex justify-center py-10">
                <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[400px] xl:w-[400px] mb-6">
                    <Image
                        src={image}
                        alt={name}
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg"
                    />
                    <div className="text-center bg-slate-200 rounded-lg py-5 px-5">
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
                                <div>
                                    <form onSubmit={(e) => handleSubmit(e, price)}>
                                        <h3 className="font-bold text-lg mb-4">{name}!</h3>
                                        <div className="grid gap-4">
                                            <div>
                                                <label htmlFor="day" className="block text-sm font-medium text-gray-700">Days:</label>
                                                <input
                                                    id="day"
                                                    type="text"
                                                    name="day"
                                                    placeholder="Enter number of days"
                                                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent placeholder-slate-500"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="coupon" className="block text-sm font-medium text-gray-700">Coupon:</label>
                                                <input
                                                    id="coupon"
                                                    type="text"
                                                    name="coupon"
                                                    placeholder="Enter coupon code"
                                                    className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent placeholder-slate-500"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="submit"
                                                    value="Confirm"
                                                    className="w-full bg-gray-200 border-2 border-green-600 hover:bg-green-800 text-gray-700 hover:text-white py-2 px-4 rounded-lg cursor-pointer transition duration-200 ease-in-out"
                                                />
                                            </div>
                                            <div className="mt-5">
                                                <span
                                                    id="pay"
                                                    className="text-xl font-semibold text-green-800"
                                                ></span>
                                                {showPayButton && (
                                                    <button
                                                        onClick={handlePay}
                                                        className="w-full bg-green-200 hover:bg-green-300 text-black py-2 px-4 border-2 border-black rounded-lg mt-4 transition duration-200 ease-in-out"
                                                    >
                                                        Pay
                                                    </button>
                                                )}
                                            </div>
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
