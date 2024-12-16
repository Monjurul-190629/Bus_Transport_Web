import React from 'react';
import { FaBusAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { SiLinuxprofessionalinstitute } from "react-icons/si";
import Image from 'next/image';

const ServiceCard = () => {
    return (
        <div>
            <div className='flex gap-0 flex-col lg:flex-row justify-center py-10'>
                <div className="lg:w-[600px] w-full mb-6 lg:mb-0">
                    <Image 
                        src="/Nice-Imperial-bus.jpg" 
                        alt="Sightseeing Bus Tour" 
                        className='w-full h-auto rounded-2xl'
                        width={600}  // Specify width for better performance
                        height={400} // Specify height for better performance
                    />
                </div>
                <div className='text-justify text-slate-800 py-10 px-5 lg:px-10'>
                    <p className='text-3xl font-semibold mb-5'>Why Choose Us</p>
                    <p className='lg:w-[450px]'>
                        We stand out by offering exceptional services tailored to meet your needs. Our commitment to quality, safety, and customer satisfaction ensures that every experience with us is seamless. With 24/7 support, timely schedules, and a focus on your convenience, we are the reliable choice you can trust!
                    </p>
                    <div className='py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5'>
                        <div className='flex gap-4 items-center'>
                            <p className='text-5xl text-green-700'>
                                <FaBusAlt />
                            </p>
                            <p>
                                <span className='text-gray-800 text-xl font-semibold'>25 + </span> Transports ready
                            </p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <p className='text-5xl text-green-700'>
                                <FaHandshake />
                            </p>
                            <p>
                                <span className='text-gray-800 text-xl font-semibold'>250 + </span> Satisfied Customers
                            </p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <p className='text-5xl text-green-700'>
                                <TbBrandBooking />
                            </p>
                            <p>
                                <span className='text-gray-800 text-xl font-semibold'>950 + </span> Bookings done
                            </p>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <p className='text-5xl text-green-700'>
                                <SiLinuxprofessionalinstitute />
                            </p>
                            <p>
                                <span className='text-gray-800 text-xl font-semibold'>50 + </span> Team Members
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
