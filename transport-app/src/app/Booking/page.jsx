import React from 'react';
import Card from './Card';


const page = () => {

   
    return (
        <div className='py-10'>
            <div className='text-center '>
                <p className='text-4xl font-semibold'>Our <span className='text-green-700 '>Bus</span></p>
                <div className='flex justify-center pb-7'>
                <p className='text-slate-700 w-[390px] '>Effortlessly hire a bus for your next trip, event, or group outing with our reliable and affordable service</p>
                </div>
            </div>
            
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 px-10'>
                    <div>
                        <Card price="320" seat="60" name='Volt 320' image="https://www.tripsavvy.com/thmb/UyfS76voGNCPHJWuvfspRKmg2Qk=/5616x3744/filters:fill(auto,1)/white-bus-crossing-the-alpes-157526603-53b7ac4061de4ca4a6bf3146c4ee2d41.jpg" />
                    </div>
                    <div>
                        <Card price="400" seat="100" name="Jacob 420" image="http://www.9to5carwallpapers.com/wp-content/uploads/2015/09/London-Double-Daker-Bus.jpg" />
                    </div>
                    <div>
                        <Card price="350" seat="80" name="Etiquette 101" image="https://wallpapercave.com/wp/wp2120656.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;