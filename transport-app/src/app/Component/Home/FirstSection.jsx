import { IoSearch } from "react-icons/io5";
import { LuMousePointer } from "react-icons/lu";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import React from 'react';

const FirstSection = () => {
    return (
        <div className="mb-8">
            <div className='text-3xl font-semibold flex justify-center items-center text-gray-700 text-center mb-10'>
                <p className=""><span className='text-green-700'>Buy Tickets</span> in 3 easy steps</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-10 px-10 md:px-20'>
                <div className='text-gray-700 flex gap-2 w-[300px] md:w-[350px]'>
                    <div className="text-green-700 text-4xl md:text-6xl">
                        <IoSearch></IoSearch>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold mb-3">Search</p>
                        <p className="text-[14px] leading-snug">
                            Choose your origin, destination, journey dates and search for buses
                        </p>
                    </div>
                </div>
                <div className='text-gray-700 flex gap-2 w-[300px] md:w-[350px]'>
                    <div className="text-green-700 text-4xl md:text-6xl">
                        <LuMousePointer />
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">Select</p>
                        <p className="text-[14px] leading-snug">Select your desired trip and choose your seats</p>
                    </div>
                </div>
                <div className='text-gray-700 flex gap-2 w-[300px] md:w-[350px]'>
                    <div className="text-green-700 text-4xl md:text-6xl">
                        <FaMoneyBillTransfer />
                    </div>
                    <div>
                        <p className="text-2xl font-semibold">Pay</p>
                        <p className="text-[14px] leading-snug">Pay by bank cards or mobile banking</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;