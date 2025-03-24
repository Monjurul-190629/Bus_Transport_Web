"use client"
import { FaBus } from "react-icons/fa";
import { MdDirectionsCar, MdPedalBike, MdOutlineElectricRickshaw } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";
import { motion } from "framer-motion";

const CardItem = () => {
    return (
        <div className="mt-28 px-4 md:px-8 lg:px-16">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                    Your Ultimate Travel Solution
                </p>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                    Experience the <span className="text-green-600">Smoothest</span> Journey
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {[
                        { icon: <FaBus />, title: "Bus", desc: "Book bus tickets online with ease. No more waiting in long queues.", gradient: "bg-gradient-to-r from-green-500 to-green-700" },
                        { icon: <MdDirectionsCar />, title: "Mini Bus", desc: "Book mini buses for comfortable domestic travel across Bangladesh.", gradient: "bg-gradient-to-r from-blue-500 to-blue-700" },
                        { icon: <FaTruckMoving />, title: "Mini Truck", desc: "Rent a mini truck for easy transportation of goods.", gradient: "bg-gradient-to-r from-yellow-500 to-yellow-700" },
                        { icon: <MdPedalBike />, title: "Motor Bike", desc: "Get a ride on a motorbike and reach your destination quickly.", gradient: "bg-gradient-to-r from-red-500 to-red-700" },
                        { icon: <MdOutlineElectricRickshaw />, title: "Auto Rickshaw", desc: "Enjoy affordable and eco-friendly rickshaw rides.", gradient: "bg-gradient-to-r from-purple-500 to-purple-700" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-6 rounded-xl shadow-xl text-white transition-all duration-300 ${item.gradient} hover:shadow-2xl hover:brightness-110`}
                        >
                            <div className="text-5xl mb-4 text-white">
                                {item.icon}
                            </div>
                            <p className="text-2xl font-bold mb-2 text-white">
                                {item.title}
                            </p>
                            <p className="text-lg leading-relaxed text-white">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardItem;