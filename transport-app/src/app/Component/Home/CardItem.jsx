import React from 'react';
import { FaBus } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";
import { MdPedalBike } from "react-icons/md";
import { MdOutlineElectricRickshaw } from "react-icons/md";

const CardItem = () => {
    return (
        <div className='mt-32'>
            <div>
               <p className='text-2xl font-semibold text-gray-700 mb-3 md:mb-0 text-center '>A one-stop solution for your travel needs</p>
               <p className='text-3xl font-semibold text-gray-700 text-center mb-12'>Introducing you to the <span className='text-green-700'>Easiest</span> way of life</p>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16'>
                    <div className='bg-gray-100 text-gray-700 w-[300px]'>
                        <div className='text-3xl text-green-700 flex justify-start px-10 mb-5'>
                            <FaBus />
                        </div>
                        <p className='text-xl font-semibold text-justify mb-2'><span className='text-green-700'>Bus</span> Ticket</p>
                        <p className='text-[16px] leading-snug'>No more queuing at counters. Tickets of Hundreds+ bus operators available online.</p>
                    </div>
                    <div className='bg-gray-100 text-gray-700 w-[300px]'>
                        <div className='text-3xl text-green-700 flex justify-start px-10 mb-5'>
                            <MdDirectionsCar />
                        </div>
                        <p className='text-xl font-semibold text-justify mb-2'><span className='text-green-700'>Mini</span> Bus</p>
                        <p className='text-[16px] leading-snug'>Now book your mini-buses for domestic travel in Bangladesh.</p>
                    </div>
                    <div className='bg-gray-100 text-gray-700 w-[300px]'>
                        <div className='text-3xl text-green-700 flex justify-start px-10 mb-5'>
                            <FaTruckMoving />
                        </div>
                        <p className='text-xl font-semibold text-justify mb-2'><span className='text-green-700'>Mini</span> Truck</p>
                        <p className='text-[16px] leading-snug'>Skip the lines and dive into fun! Purchase advance booking from our online inventory.</p>
                    </div>
                    <div className='bg-gray-100 text-gray-700 w-[300px]'>
                        <div className='text-3xl text-green-700 flex justify-start px-10 mb-5'>
                            <MdPedalBike />
                        </div>
                        <p className='text-xl font-semibold text-justify mb-2'><span className='text-green-700'>Motor</span> Bike</p>
                        <p className='text-[16px] leading-snug'>Skip the lines and dive into fun! Purchase advance booking from our online inventory.</p>
                    </div>
                    <div className='bg-gray-100 text-gray-700 w-[300px]'>
                        <div className='text-3xl text-green-700 flex justify-start px-10 mb-5'>
                            <MdOutlineElectricRickshaw />
                        </div>
                        <p className='text-xl font-semibold text-justify mb-2'><span className='text-green-700'>Auto</span> Rickshaw</p>
                        <p className='text-[16px] leading-snug'>Sometimes you need enjoy you life different. So purchase booking with minimize rate from our site.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;