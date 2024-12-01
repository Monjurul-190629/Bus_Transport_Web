"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();

    console.log(session?.user?.name)
    const navLink = (
        <>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/Ticket">Tickets</Link>
            </li>
            <li>
                <Link href="/Hire">Hiring</Link>
            </li>
            <li>
                <Link href="/Contact">Contact us</Link>
            </li>
            <li>
                <Link href="/About">About us</Link>
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
                    {
                        session?.user ? <>
                            <div className="tooltip tooltip-left z-20  hover:tooltip-open" data-tip={session?.user?.name}>
                                <img src="https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg" className="lg:ml-5 w-1/4 md:w-10 hidden lg:block rounded-full" alt="User Profile" />
                            </div>
                            <button onClick={() => signOut()} className="px-5 py-1 text-[16px] bg-green-800 hover:bg-green-900 rounded-lg text-white">Log out</button>
                        </> :
                            <>
                                <Link href="/Login">
                                    <button className="px-8 py-2 text-[16px] bg-green-800 hover:bg-green-900 rounded-lg text-white">Log in</button>
                                </Link>
                                <Link href="/Registration">
                                    <button className="px-4 py-2 text-[16px] ml-4 bg-green-800 hover:bg-green-900 rounded-lg text-white">Registration</button>
                                </Link>
                            </>
                    }




                </div>
            </div>
        </div>
    );
};

export default Navbar;
