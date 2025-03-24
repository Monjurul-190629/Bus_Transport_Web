import { IoSearch } from "react-icons/io5";
import { LuMousePointer } from "react-icons/lu";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import React from 'react';

const FirstSection = () => {
    return (
        <div className="mt-20 mb-16">
            {/* Section Heading */}
            <div className='text-3xl font-semibold flex justify-center items-center text-gray-800 text-center mb-12'>
                <p className=""><span className='text-green-600'>Buy Tickets</span> in 3 easy steps</p>
            </div>
            
            {/* Steps Section */}
            <div className='flex flex-col md:flex-row justify-center gap-6 px-8 md:px-20'>
                
                {/* Step 1: Search */}
                <div className='text-gray-700 flex flex-col items-center gap-4 w-[300px] md:w-[350px] transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg p-6 bg-white shadow-lg hover:bg-green-50'>
                    <div className="text-green-600 text-5xl md:text-6xl transition-transform transform hover:text-green-700">
                        <IoSearch />
                    </div>
                    <p className="text-2xl font-semibold mb-3 text-center text-gray-800">Search</p>
                    <p className="text-[15px] leading-snug text-center text-gray-600">
                        Choose your origin, destination, journey dates and search for buses.
                    </p>
                </div>

                {/* Step 2: Select */}
                <div className='text-gray-700 flex flex-col items-center gap-4 w-[300px] md:w-[350px] transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg p-6 bg-white shadow-lg hover:bg-green-50'>
                    <div className="text-green-600 text-5xl md:text-6xl transition-transform transform hover:text-green-700">
                        <LuMousePointer />
                    </div>
                    <p className="text-2xl font-semibold mb-3 text-center text-gray-800">Select</p>
                    <p className="text-[15px] leading-snug text-center text-gray-600">
                        Select your desired trip and choose your seats.
                    </p>
                </div>

                {/* Step 3: Pay */}
                <div className='text-gray-700 flex flex-col items-center gap-4 w-[300px] md:w-[350px] transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg p-6 bg-white shadow-lg hover:bg-green-50'>
                    <div className="text-green-600 text-5xl md:text-6xl transition-transform transform hover:text-green-700">
                        <FaMoneyBillTransfer />
                    </div>
                    <p className="text-2xl font-semibold mb-3 text-center text-gray-800">Pay</p>
                    <p className="text-[15px] leading-snug text-center text-gray-600">
                        Pay by bank cards or mobile banking.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default FirstSection;
