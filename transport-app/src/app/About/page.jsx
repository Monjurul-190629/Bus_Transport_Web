"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper styles
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// Rating component
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// React Icons
import { FaQuoteLeft } from "react-icons/fa";

const page = () => {
    const [swiper, setSwiper] = useState(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiper !== null) {
            const interval = setInterval(() => {
                if (swiper.isEnd) {
                    swiper.slideTo(0); // If it's the last slide, go back to the first one
                } else {
                    swiper.slideNext(); // Go to the next slide
                }
            }, 3000);

            // Clear the interval when the component unmounts
            return () => clearInterval(interval);
        }
    }, [swiper]);

    return (
        <div className="mt-16">
            {/* About Section */}
            <div className="text-3xl flex justify-center items-center">
                About <span className="font-semibold text-green-700 ml-5">TransportEase</span>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-12 px-5 py-5">
                <div className="w-[380px] md:w-[420px] text-justify px-5 py-5">
                    Welcome to{" "}
                    <span className="text-xl text-green-800 font-semibold">TransportEase,</span> your ultimate destination for
                    hassle-free vehicle rentals! Whether you're planning a group tour and need a bus, or you're looking for a
                    thrilling adventure on a motorbike or minibike, we have got you covered. Our platform is designed to provide a
                    seamless booking experience, ensuring that your journey starts with ease and convenience. With a focus on
                    quality, reliability, and affordability, TransportEase is here to make your travel dreams come true!
                </div>
                <div>
                    <Image
                        src="/about2.jpg"
                        alt="About TransportEase"
                        width={420}
                        height={350}
                        className="w-full h-[270px] rounded-lg"
                        priority
                    />
                </div>
            </div>

            {/* Testimonials Section */}
            <div>
                <div className="text-center">
                    <p className="text-3xl font-semibold">Testimonials</p>
                    <p className="text-xl">
                        What our clients say about{" "}
                        <span className="text-green-700 ml-2 font-semibold">TransportEase</span>
                    </p>
                </div>
                <Swiper
                    ref={swiperRef}
                    onSwiper={setSwiper}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false, // To ensure autoplay continues after user interaction
                    }}
                >
                    <SwiperSlide>
                        <div className="text-black">
                            <div className="mx-24 mt-2 mb-10 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={5}
                                    readOnly
                                    className="py-5"
                                />
                                <p className="text-4xl py-4 text-gray-700">
                                    <FaQuoteLeft />
                                </p>
                                <p className="text-gray-600">TransportEase exceeded my expectations! The bus was clean and comfortable, and the service was flawless.</p>
                                <p className="text-2xl text-orange-600 py-3">- Emily R.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-black">
                            <div className="mx-24 mt-2 mb-10 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                    className="py-5"
                                />
                                <p className="text-4xl py-4 text-gray-700">
                                    <FaQuoteLeft />
                                </p>
                                <p className="text-gray-600">The motorbike rental was smooth and hassle-free. Highly recommend TransportEase for its reliable service.</p>
                                <p className="text-2xl text-orange-600 py-3">- Alex P.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-black">
                            <div className="mx-24 mt-2 mb-10 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={5}
                                    readOnly
                                    className="py-5"
                                />
                                <p className="text-4xl py-4 text-gray-700">
                                    <FaQuoteLeft />
                                </p>
                                <p className="text-gray-600">Great prices and excellent customer service. TransportEase made our family trip unforgettable!</p>
                                <p className="text-2xl text-orange-600 py-3">- Sarah M.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-black">
                            <div className="mx-24 mt-2 mb-10 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={5}
                                    readOnly
                                    className="py-5"
                                />
                                <p className="text-4xl py-4 text-gray-700">
                                    <FaQuoteLeft />
                                </p>
                                <p className="text-gray-600">The minibike was in excellent condition, and the entire process was seamless. Truly impressive!</p>
                                <p className="text-2xl text-orange-600 py-3">- Jason K.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-black">
                            <div className="mx-24 mt-2 mb-10 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={4}
                                    readOnly
                                    className="py-5"
                                />
                                <p className="text-4xl py-4 text-gray-700">
                                    <FaQuoteLeft />
                                </p>
                                <p className="text-gray-600">Very professional and prompt service. The team at TransportEase is fantastic!</p>
                                <p className="text-2xl text-orange-600 py-3">- Olivia T.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="text-black">
                            <div className="mx-24 mt-2 mb-10 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={5}
                                    readOnly
                                    className="py-5"
                                />
                                <p className="text-4xl py-4 text-gray-700">
                                    <FaQuoteLeft />
                                </p>
                                <p className="text-gray-600">TransportEase makes renting vehicles so easy! Reliable, affordable, and customer-friendly. Love it!</p>
                                <p className="text-2xl text-orange-600 py-3">- Liam H.</p>
                            </div>
                        </div>
                    </SwiperSlide>


                    {/* Add more SwiperSlides as needed */}
                </Swiper>
            </div>
        </div>
    );
};

export default page;
