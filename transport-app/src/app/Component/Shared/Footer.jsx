import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#306d35] text-white p-20">
                <nav>
                    <h6 className="text-3xl md:text-3xl border-2 border-gray-300 px-2 py-3 rounded-md ">TransportEase</h6>
                    <p className='md:w-96 text-justify text-[18px] py-3'>
                        Transport, owned and operated by Transport Limited, is Bangladesh's largest online ticket destination,
                        which is committed to making your life convenient, easier and smarter.
                    </p>
                    <p className='text-[18px] mt-4 md:mt-4'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </nav>
                <nav>
                    <h6 className="text-2xl underline">Services</h6>
                    <div className='text-[18px] gap-2 flex flex-col py-3'>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-2xl underline">Quick Links</h6>
                    <div className='text-[18px] gap-2 flex flex-col py-3'>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Checks</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </nav>
                <nav>
                    <h6 className="text-2xl underline">Legal</h6>
                    <div className='text-[18px] gap-2 flex flex-col py-3'>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                   

                </nav>
            </footer>
        </div>
    );
};

export default Footer;