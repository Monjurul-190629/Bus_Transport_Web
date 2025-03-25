"use client";

import React from "react";
import { FaBusAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";
import { SiLinuxprofessionalinstitute } from "react-icons/si";
import Image from "next/image";
import { motion } from "framer-motion";

const serviceData = [
    { icon: <FaBusAlt />, number: "25+", text: "Transports Ready" },
    { icon: <FaHandshake />, number: "250+", text: "Satisfied Customers" },
    { icon: <TbBrandBooking />, number: "950+", text: "Bookings Done" },
    { icon: <SiLinuxprofessionalinstitute />, number: "50+", text: "Team Members" },
];

const ServiceCard = () => {
    return (
        <div className="py-16 bg-gradient-to-b from-white to-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Main Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-[600px] w-full"
                    >
                        <Image
                            src="/Nice-Imperial-bus.jpg"
                            alt="Sightseeing Bus Tour"
                            className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-105"
                            width={600}
                            height={400}
                        />
                    </motion.div>

                    {/* Text Section */}
                    <div className="text-center lg:text-left text-slate-800 lg:px-8">
                        <p className="text-4xl font-bold mb-5 text-gray-900">Why Choose Us</p>
                        <p className="lg:w-[500px] mb-8 text-lg text-gray-700 leading-relaxed">
                            We stand out by offering exceptional services tailored to meet your needs. Our
                            commitment to quality, safety, and customer satisfaction ensures a seamless
                            experience. With 24/7 support, timely schedules, and a focus on your convenience,
                            we are the reliable choice you can trust!
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            {serviceData.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7 + index * 0.2 }}
                                    className="flex gap-4 items-center justify-center lg:justify-start p-6 bg-white rounded-2xl shadow-xl border border-gray-200
                             hover:shadow-2xl transform transition-all duration-300 hover:text-green-700"
                                >
                                    <p className="text-5xl text-green-700 transition-colors duration-300">
                                        {service.icon}
                                    </p>
                                    <p className="text-lg lg:text-xl font-semibold text-gray-800 transition-colors duration-300">
                                        <span className="text-green-700 font-bold">{service.number} </span>
                                        {service.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
