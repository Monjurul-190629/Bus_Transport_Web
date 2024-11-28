"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const navLink = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/detection">Detection</Link>
            </li>
        </>
    );

    const handleLogout = () => {
        logOut()
            .then(() => console.log("Log out successful"))
            .catch((error) => console.log(error.message));
    };

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="mx-10 py-1 text-green-800">
            <div className="navbar">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content z-20 mt-3 shadow border-white border-2 rounded-box w-52"
                        >
                            <div>{navLink}</div>

                        </ul>
                    </div>
                    <div className="flex lg:hidden justify-center items-center w-[200px]">
                        
                        <p className="text-xl md:text-xl text-green-700 font-bold font-serif">TransportEase</p>
                    </div>
                    <div className="hidden lg:flex justify-center items-center w-[200px]">
                        <img
                            src="https://clipartcraft.com/images/bus-clipart-green-4.png"
                            className="w-16"
                            alt="Logo"
                        />
                        <p className="text-xl ml-3 md:text-2xl font-bold font-serif text-green-700">TransportEase</p>
                    </div>
                </div>

                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-5 py-2 items-center space-x-1">
                        {navLink}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">
                    <FaUserCircle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
