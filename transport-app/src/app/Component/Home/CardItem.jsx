import React from 'react';
import { FaBus } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";
import { MdPedalBike } from "react-icons/md";
import { MdOutlineElectricRickshaw } from "react-icons/md";

const CardItem = () => {
    return (
        <div className="mt-16 px-4 md:px-8 lg:px-16">
            {/* Section Heading */}
            <div className="text-center mb-10">
                <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                    A one-stop solution for your travel needs
                </p>
                <p className="text-2xl md:text-3xl font-semibold text-gray-700">
                    Introducing you to the <span className="text-green-700">Easiest</span> way of life
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
                    {/* Card 1 */}
                    <div className="bg-gray-100 text-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="text-3xl text-green-700 mb-4">
                            <FaBus />
                        </div>
                        <p className="text-lg font-semibold mb-2">
                            <span className="text-green-700">Bus</span> Ticket
                        </p>
                        <p className="text-sm md:text-base leading-relaxed">
                            No more queuing at counters. Tickets of Hundreds+ bus operators available online.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-100 text-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="text-3xl text-green-700 mb-4">
                            <MdDirectionsCar />
                        </div>
                        <p className="text-lg font-semibold mb-2">
                            <span className="text-green-700">Mini</span> Bus
                        </p>
                        <p className="text-sm md:text-base leading-relaxed">
                            Now book your mini-buses for domestic travel in Bangladesh.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-100 text-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="text-3xl text-green-700 mb-4">
                            <FaTruckMoving />
                        </div>
                        <p className="text-lg font-semibold mb-2">
                            <span className="text-green-700">Mini</span> Truck
                        </p>
                        <p className="text-sm md:text-base leading-relaxed">
                            Skip the lines and dive into fun! Purchase advance booking from our online inventory.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-gray-100 text-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="text-3xl text-green-700 mb-4">
                            <MdPedalBike />
                        </div>
                        <p className="text-lg font-semibold mb-2">
                            <span className="text-green-700">Motor</span> Bike
                        </p>
                        <p className="text-sm md:text-base leading-relaxed">
                            Skip the lines and dive into fun! Purchase advance booking from our online inventory.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-gray-100 text-gray-700 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="text-3xl text-green-700 mb-4">
                            <MdOutlineElectricRickshaw />
                        </div>
                        <p className="text-lg font-semibold mb-2">
                            <span className="text-green-700">Auto</span> Rickshaw
                        </p>
                        <p className="text-sm md:text-base leading-relaxed">
                            Sometimes you need to enjoy your life differently. So purchase booking with minimized rates from our site.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;
