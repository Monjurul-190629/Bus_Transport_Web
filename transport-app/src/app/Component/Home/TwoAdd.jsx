import React from 'react';
import { TbMathGreater } from "react-icons/tb";

const TwoAdd = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-1 items-center mt-20'>
                <div>
                    <img src="https://i.ibb.co.com/sFsLQ1k/app-illustrator.png" alt="app-illustrator" border="0" />
                </div>
                <div className=' font-semibold w-[350px] md:w-[450px]'>
                    <p className='text-4xl text-center text-gray-700'>Get More Out of our <span className='text-green-700'>TransportEase</span></p>
                    <div className='grid grid-cols-2 mt-5 gap-5'>
                        <div className='text-gray-700 text-[14px] '>
                            <p className='flex justify-center gap-1 leading-snug'><span className='text-green-700 pr-1'>1.</span>Faster and easier booking</p>
                        </div>
                        <div className='text-gray-700 text-[14px] '>
                            <p className='flex justify-center gap-1 leading-snug'><span className='text-green-700 pr-1'>2</span>Get alerts before every departure</p>
                        </div>
                        <div className='text-gray-700 text-[14px] '>
                            <p className='flex justify-center gap-1 leading-snug'><span className='text-green-700 pr-1'>3</span>Easy access to your tickets</p>
                        </div>
                        <div className='text-gray-700 text-[14px] '>
                            <p className='flex justify-center gap-1 leading-snug'><span className='text-green-700 pr-1'>4</span>Onboard with digital tickets</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row justify-center gap-10 items-center pt-28 pb-32'>
                <div className='flex flex-col gap-2 text-center  lg:text-justify text-gray-700'>
                    <p className='font-semibold text-2xl md:text-3xl  lg:w-[400px] '>
                        All your <span className='text-green-700'>travel options</span> in one place
                    </p>
                    <p className='lg:w-[500px] text-[18px] px-5 md:px-0'>
                        More than 1,000 trusted travel partners across buses, mini-buses, mini-truck, micros and auto-rickshaw so that you can focus on the journey.
                    </p>
                    <div className='flex justify-center gap-7 lg:gap-20 text-center'>
                        <div>
                            <p className='text-2xl text-green-700 font-bold'>1 Million+ </p>
                            <p className='text-[14px]'>Tickets sold</p>
                        </div>
                        <div>
                            <p className='text-2xl text-green-700 font-bold'>3 Thousand+ </p>
                            <p className='text-[14px]'>Routes</p>
                        </div>
                        <div>
                            <p className='text-2xl text-green-700 font-bold'>2 Lakhs+ </p>
                            <p className='text-[14px]'>Happy Users</p>
                        </div>
                    </div>
                </div>
                <div>
                    
                    <img src="https://i.ibb.co.com/9ZYL6mX/travel-option.png" alt="travel-option" border="0" />
                </div>
            </div>
        </div>
    );
};

export default TwoAdd;