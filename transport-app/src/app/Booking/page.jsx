"use client"
import React from 'react';
import Card from './Card';
import BikeCard from './BikeCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Basic Swiper styling
import 'swiper/css/navigation'; // Optional Swiper styling if using navigation buttons
import 'swiper/css/pagination'; // Optional Swiper styling if using pagination
import { Navigation, Pagination, Autoplay } from 'swiper'; // Import modules

const Page = () => {
    return (
        <div className='py-10'>
            <div className='text-center'>
                <p className='text-4xl font-semibold'>Our <span className='text-green-700'>Bus</span></p>
                <div className='flex justify-center pb-7'>
                    <p className='text-slate-700 w-[390px]'>Effortlessly hire a bus for your next trip, event, or group outing with our reliable and affordable service</p>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-10'>
                    <div>
                        <Card price={320} seat="60" name='Volt 320' image="/white-bus-crossing-the-alpes-157526603-53b7ac4061de4ca4a6bf3146c4ee2d41.jpg" />
                    </div>
                    <div>
                        <Card price={400} seat="100" name="Jacob 420" image="/dsc9388.jpg" />
                    </div>
                    <div>
                        <Card price={350} seat="80" name="Etiquette 101" image="/wp2120656.jpg" />
                    </div>
                </div>
            </div>

            <div className='text-center'>
                <p className='text-4xl font-semibold'>Our <span className='text-green-700'>Bike</span></p>
                <div className='flex justify-center pb-7'>
                    <p className='text-slate-700 w-[390px]'>Effortlessly hire a bike for your daily commute, adventure, or leisure ride with our reliable and affordable service.</p>
                </div>
            </div>

            <div>
                <div className="carousel w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                    <div id="slide1" className="carousel-item relative w-full">
                        <BikeCard price={120} name='KTM Duke 125 European' image="/Bike7.jpg" />
                        
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <BikeCard price={110} name='Honda X-Blade 160 ABS' image="/Bike5.jpg" />
                        
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <BikeCard price={90} name='Aprilia Terra 150' image="/Bike8.jpg" />
                        
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <BikeCard price={120} name='Bajaj Avenger 160 ABS' image="/Bike6.jpg" />
                        
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <BikeCard price={90} name='Yamaha MT 15' image="/Bike9.jpg" />
                        
                    </div>
                    <div id="slide6" className="carousel-item relative w-full">
                        <BikeCard price={120} name='Bajaj Avenger 160 ABS' image="/Bike6.jpg" />
                        
                    </div>
                </div>
            </div>

            <div className='text-center mt-10'>
                <p className='text-4xl font-semibold'>Our <span className='text-green-700'>MiniTruck</span></p>
                <div className='flex justify-center pb-7'>
                    <p className='text-slate-700 w-[390px]'>Effortlessly hire a mini truck for your transportation needs, whether it&apos;s for moving goods, running errands.</p>
                </div>
            </div>
            <div>
                <div className="carousel w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
                    <div id="slide1" className="carousel-item relative w-full">
                        <BikeCard price={120} name='Honda Acty' image="/truck1.jpg" />
                        
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <BikeCard price={110} name='Suzuki Carry' image="/truck2.jpg" />
                        
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <BikeCard price={90} name='Mahindra Supro' image="/truck5.jpeg" />
                        
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Page;
