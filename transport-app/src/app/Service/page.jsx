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
        <div className="container mx-auto px-5">
            <div className="text-4xl font-semibold text-center py-12 text-slate-700">
                We Provide <span className="text-green-700">Best Services</span> for You
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {/* Card 1: Safety Guarantee */}
                <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-12 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 group">
                    <div className="text-5xl mb-4">
                        <AiOutlineSafety />
                    </div>
                    <p className="text-3xl font-semibold mb-4">Safety Guarantee</p>
                    <p className="text-lg">
                        We prioritize your safety by ensuring that all our vehicles are well-maintained and equipped with the latest safety features. Our trained staff ensures a secure and reliable experience.
                    </p>
                </div>

                {/* Card 2: Discount and Promo */}
                <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-12 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 group">
                    <div className="text-5xl mb-4">
                        <MdOutlineDiscount />
                    </div>
                    <p className="text-3xl font-semibold mb-4">Discount and Promo</p>
                    <p className="text-lg">
                        We offer exciting discounts and promotions to make your experience more affordable. Enjoy exclusive deals tailored to your needs and special offers that add value to every purchase.
                    </p>
                </div>

                {/* Card 3: Personal Staff */}
                <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-12 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 group">
                    <div className="text-5xl mb-4">
                        <MdPersonalInjury />
                    </div>
                    <p className="text-3xl font-semibold mb-4">Personal Staff</p>
                    <p className="text-lg">
                        Our dedicated personal staff ensures you receive tailored support for a seamless and comfortable experience. They cater to your unique requirements, offering professional assistance.
                    </p>
                </div>

                {/* Card 4: Schedule on Time */}
                <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-12 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 group">
                    <div className="text-5xl mb-4">
                        <ImClock2 />
                    </div>
                    <p className="text-3xl font-semibold mb-4">Schedule On Time</p>
                    <p className="text-lg">
                        Punctuality is our promise. We ensure all services are delivered as per your schedule, offering reliability and efficiency for a stress-free experience. Count on us to always be on time!
                    </p>
                </div>

                {/* Card 5: Online Banking */}
                <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-12 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 group">
                    <div className="text-5xl mb-4">
                        <MdBookOnline />
                    </div>
                    <p className="text-3xl font-semibold mb-4">Online Banking</p>
                    <p className="text-lg">
                        Enjoy the convenience of secure and seamless online banking. Manage payments, transactions, and bookings effortlessly from anywhere, anytime. Your financial interactions are just a click away!
                    </p>
                </div>

                {/* Card 6: 24/7 Support */}
                <div className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-12 px-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 group">
                    <div className="text-5xl mb-4">
                        <IoPeopleOutline />
                    </div>
                    <p className="text-3xl font-semibold mb-4">24/7 Support</p>
                    <p className="text-lg">
                        Our dedicated support team is available round the clock to assist you. Whether it&apos;s day or night, we&apos;re here to ensure your queries and concerns are resolved promptly. Your satisfaction is our priority!
                    </p>
                </div>
            </div>

            {/* Additional Components */}
            <div className="mt-16">
                <ServiceCard />
            </div>
            <div className="mt-16">
                <Question />
            </div>
        </div>
    );
};

export default page;
