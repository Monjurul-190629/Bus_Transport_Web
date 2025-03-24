"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

const TwoAdd = () => {
    // Configure intersection observer
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger animation when 20% of the component is visible
        triggerOnce: true, // Trigger animation only once
    });

    return (
        <div ref={ref}>
            {/* Section 1 */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1.5 }}
                className="p-6 sm:p-8 rounded-2xl shadow-xl bg-white max-w-screen-xl mx-auto"
            >
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 mt-20">
                    {/* Image */}
                    <div className="w-72 h-48 md:w-[450px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/app-illustrator (1).png"
                            alt="app-illustrator"
                            width={450}
                            height={400}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-center md:text-left w-[300px] md:w-[400px]">
                        <p className="text-2xl md:text-3xl text-gray-700 mb-6 font-semibold">
                            Get More Out of our{" "}
                            <span className="text-green-700">TransportEase</span>
                        </p>
                        <div className="space-y-4 text-gray-700 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                                <span className="text-green-700 text-lg font-semibold">1.</span>
                                Faster and easier booking
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-700 text-lg font-semibold">2.</span>
                                Get alerts before every departure
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-700 text-lg font-semibold">3.</span>
                                Easy access to your tickets
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-green-700 text-lg font-semibold">4.</span>
                                Onboard with digital tickets
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className="flex flex-col-reverse md:flex-row justify-center gap-8 md:gap-16 items-center py-12 md:py-20"
            >
                {/* Text Section */}
                <div className="text-center md:text-left text-gray-700 space-y-6 px-5 md:px-0">
                    <p className="font-semibold text-2xl md:text-3xl mb-4">
                        All your <span className="text-green-700">travel options</span> in one place
                    </p>
                    <p className="lg:w-[500px] text-lg md:text-xl mx-auto md:mx-0">
                        More than 1,000 trusted travel partners across buses, mini-buses, mini-trucks, micros, and auto-rickshaws so you can focus on your journey.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 text-center md:text-left">
                        <div className="text-center md:text-left">
                            <p className="text-2xl md:text-3xl text-green-700 font-bold">1 Million+ </p>
                            <p className="text-[14px] md:text-sm text-gray-600">Tickets sold</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-2xl md:text-3xl text-green-700 font-bold">3 Thousand+ </p>
                            <p className="text-[14px] md:text-sm text-gray-600">Routes</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-2xl md:text-3xl text-green-700 font-bold">2 Lakhs+ </p>
                            <p className="text-[14px] md:text-sm text-gray-600">Happy Users</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-72 h-48 md:w-[450px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="/travel-option.png"
                        alt="travel-option"
                        width={450}
                        height={400}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </motion.div>

        </div>
    );
};

export default TwoAdd;
