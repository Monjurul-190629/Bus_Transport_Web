import React from 'react';
import { AiOutlineSafety } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { MdPersonalInjury } from "react-icons/md";
import { ImClock2 } from "react-icons/im";
import { MdBookOnline } from "react-icons/md";
import { IoPeopleOutline } from "react-icons/io5";
import ServiceCard from './ServiceCard';
import Question from './Question';

const page = () => {
    return (
        <div>
            <div className='text-4xl font-semibold text-center pt-12 text-slate-700'>
                We Provide<span className='text-green-700'> Best Services</span> for you
            </div>
            <div className='flex justify-center py-10'>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                    <div className="text-justify w-[380px] bg-slate-300 py-10 px-10 rounded-lg relative overflow-hidden group">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-green-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms]"></div>
                        {/* Content */}
                        <div className="relative z-10 text-slate-800 group-hover:text-white">
                            <p className="text-5xl  mb-4">
                                <AiOutlineSafety />
                            </p>
                            <p className="text-3xl font-bold mb-4">
                                Safety Guarantee
                            </p>
                            <p className=" hover:text-white">
                                We prioritize your safety by ensuring that all our vehicles are
                                well-maintained and equipped with the latest safety features. Our
                                trained staff is dedicated to providing a secure and reliable experience
                                for every journey.
                            </p>
                        </div>
                    </div>


                    <div className="text-justify w-[380px] bg-green-700 py-10 px-10 rounded-lg relative overflow-hidden group -mt-5">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-green-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-[900ms]"></div>
                        {/* Content */}
                        <div className="relative z-10 text-white group-hover:text-white">
                            <p className="text-5xl  mb-4">
                                <MdOutlineDiscount />
                            </p>
                            <p className="text-3xl font-bold mb-4">
                                Discount and Promo
                            </p>
                            <p className=" hover:text-white">
                                We offer exciting discounts and promotions to make your experience more affordable. Enjoy exclusive deals tailored to your needs and take advantage of special offers that add value to every purchase.
                            </p>
                        </div>
                    </div>


                    <div className="text-justify w-[380px] bg-slate-300 py-10 px-10 rounded-lg relative overflow-hidden group">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-green-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-[900ms]"></div>
                        {/* Content */}
                        <div className="relative z-10 text-slate-800 group-hover:text-white">
                            <p className="text-5xl  mb-4">
                                <MdPersonalInjury />
                            </p>
                            <p className="text-3xl font-bold mb-4">
                                Personal Staff
                            </p>
                            <p className=" hover:text-white">
                                Our dedicated personal staff ensures you receive tailored support for a seamless and comfortable experience. They are trained to cater to your unique requirements, offering professional assistance throughout your journey.
                            </p>
                        </div>
                    </div>


                    <div className="text-justify w-[380px] bg-slate-300 py-10 px-10 rounded-lg relative overflow-hidden group">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-green-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-[900ms]"></div>
                        {/* Content */}
                        <div className="relative z-10 text-slate-800 group-hover:text-white">
                            <p className="text-5xl  mb-4">
                                <ImClock2 />
                            </p>
                            <p className="text-3xl font-bold mb-4">
                                Schedule on time
                            </p>
                            <p className=" hover:text-white">
                                Punctuality is our promise. We ensure that all services are delivered as per your schedule, offering reliability and efficiency for a stress-free experience. Count on us to always be on time!.
                            </p>
                        </div>
                    </div>



                    <div className="text-justify w-[380px] bg-slate-300 py-10 px-10 rounded-lg relative overflow-hidden group">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-green-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-[900ms]"></div>
                        {/* Content */}
                        <div className="relative z-10 text-slate-800 group-hover:text-white">
                            <p className="text-5xl  mb-4">
                                <MdBookOnline />
                            </p>
                            <p className="text-3xl font-bold mb-4">
                                Online Banking
                            </p>
                            <p className=" hover:text-white">
                                Enjoy the convenience of secure and seamless online banking. Manage payments, transactions, and bookings effortlessly from anywhere, anytime. Your financial interactions are just a click away!.
                            </p>
                        </div>
                    </div>


                    <div className="text-justify w-[380px] bg-slate-300 py-10 px-10 rounded-lg relative overflow-hidden group">
                        {/* Animated background */}
                        <div className="absolute inset-0 bg-green-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-[900ms]"></div>
                        {/* Content */}
                        <div className="relative z-10 text-slate-800 group-hover:text-white">
                            <p className="text-5xl  mb-4">
                                <IoPeopleOutline />
                            </p>
                            <p className="text-3xl font-bold mb-4">
                                24/7 support
                            </p>
                            <p className=" hover:text-white">
                                Our dedicated support team is available round the clock to assist you. Whether it's day or night, we're here to ensure your queries and concerns are resolved promptly. Your satisfaction is our priority!.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ServiceCard/>
            </div>
            <div>
                <Question/>
            </div>
        </div>
    );
};

export default page;