"use client";

import React, { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // For mobile menu icons

const Navbar = () => {
    const { data: session } = useSession();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleLogout = () => {
        signOut().then(() => console.log("Log out successful"))
            .catch((error) => console.log(error.message));
    };

    return (
        <nav className="bg-green-900 text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-5 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/bus-clipart-green-4.png" width={40} height={40} alt="Logo" className="w-10" />
                    <span className="text-xl font-bold">TransportEase</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-lg">
                    <li><Link href="/" className="hover:text-green-300 transition">Home</Link></li>
                    <li><Link href="/Service" className="hover:text-green-300 transition">Services</Link></li>
                    <li><Link href="/Booking" className="hover:text-green-300 transition">Booking</Link></li>
                    <li><Link href="/Contact" className="hover:text-green-300 transition">Contact</Link></li>
                    <li><Link href="/About" className="hover:text-green-300 transition">About</Link></li>
                </ul>

                {/* User Profile & Authentication */}
                <div className="hidden md:flex items-center space-x-4">
                    {session?.user ? (
                        <>
                            <Image src="/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg" width={35} height={35} className="rounded-full border-2 border-white" alt="User Profile" />
                            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg">Log out</button>
                        </>
                    ) : (
                        <>
                            <Link href="/Login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">Log in</Link>
                            <Link href="/Registration" className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg hidden md:inline-block">Sign Up</Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-green-800 text-white absolute top-16 left-0 w-full p-5 shadow-lg rounded-b-lg">
                    <ul className="flex flex-col space-y-4 text-center">
                        <li><Link href="/" onClick={toggleMenu} className="hover:text-green-300">Home</Link></li>
                        <li><Link href="/Service" onClick={toggleMenu} className="hover:text-green-300">Services</Link></li>
                        <li><Link href="/Booking" onClick={toggleMenu} className="hover:text-green-300">Booking</Link></li>
                        <li><Link href="/Contact" onClick={toggleMenu} className="hover:text-green-300">Contact</Link></li>
                        <li><Link href="/About" onClick={toggleMenu} className="hover:text-green-300">About</Link></li>
                    </ul>

                    <div className="mt-4 flex flex-col items-center">
                        {session?.user ? (
                            <>
                                <Image src="/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg" width={40} height={40} className="rounded-full border-2 border-white mb-2" alt="User Profile" />
                                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg">Log out</button>
                            </>
                        ) : (
                            <>
                                <Link href="/Login" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg w-full text-center">Log in</Link>
                                <Link href="/Registration" className="bg-green-700 hover:bg-green-800 px-6 py-2 rounded-lg w-full text-center mt-2">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;