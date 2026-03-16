'use client';

import Image from 'next/image';
import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Header() {
    const [isDark, setIsDark] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <header className="w-full bg-[#000000] shadow-md fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <div className="flex-shrink-0 flex items-center ">
                        <Link href="/">
                            <Image src="/alienlogo.svg" alt="BetaRate Logo" width={170} height={120} className="h-10 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop menu button code section */}
                    <nav className="hidden md:flex items-center w-full">

                        <div className="flex space-x-4 justify-center flex-2 uppercase">
                            <Link href="/" className="text-[#FFFFFF] font-bold">Home</Link>
                            <Link href="/about-us" className="text-[#FFFFFF] font-bold">About</Link>
                            <Link href="/roadmap" className="text-[#FFFFFF] font-bold">Roadmap</Link>
                            <Link href="/404" className="text-[#FFFFFF] font-bold">Collection</Link>
                            <Link href="/404" className="text-[#FFFFFF] font-bold">AlienMarket</Link>
                            <Link href="/faq" className="text-[#FFFFFF] font-bold">FAQs</Link>
                        </div>


                        <div className="flex items-center space-x-4 flex-1 justify-end">

                            <button onClick={() => setIsDark(!isDark)}>
                                {isDark ? '☀️' : '🌙'}
                            </button>

                            <a href="#" className="bg-[#141B22] uppercase text-white px-6 py-2.5  hover:bg-[#141B22] transition flex items-center space-x-2 font-bold">
                                <Image src="/discord-icon.svg" alt="BetaRate Logo" width={90} height={90} className="h-6 w-auto" />
                                <span>Discord</span>
                            </a>
                            <a href="#" className="bg-[#00FF88] text-[#000000] px-6 py-2.5 transition uppercase flex space-x-2 items-center font-bold">
                                <Image src="/wallet-icon.svg" alt="BetaRate Logo" width={90} height={90} className="h-6 w-auto" />
                                <span>Connect</span>
                            </a>
                        </div>
                    </nav>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white dark:text-white-200 focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                {menuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu code section */}
            {menuOpen && (
                <nav className="md:hidden bg-[#000000] dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2">

                    <div className="flex flex-col space-y-2">
                        <Link href="/" className=" block text-[#FFFFFF] font-bold">Home</Link>
                        <Link href="/about-us" className=" block text-[#FFFFFF] font-bold">About</Link>
                        <Link href="/roadmap" className=" block text-[#FFFFFF] font-bold">Roadmap</Link>
                        <Link href="/collection" className=" block text-[#FFFFFF] font-bold">Collection</Link>
                        <Link href="/alienmarket" className=" block text-[#FFFFFF] font-bold">AlienMarket</Link>
                        <Link href="/faq" className=" block text-[#FFFFFF] font-bold">FAQs</Link>
                    </div>

                    <div className="flex items-center space-x-2 mt-4">

                        <button
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                            onClick={() => setIsDark(!isDark)}
                        >
                            {isDark ? '☀️' : '🌙'}
                        </button>

                        <a href="/discord" className="bg-gray-800 dark:bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-900 transition flex items-center space-x-1">
                            <span>Discord</span>
                        </a>

                        <a href="#" className="bg-[#00FF88] text-white px-4 py-1 rounded-md hover:bg-green-600 transition disabled">Connect</a>
                    </div>
                </nav>
            )}
        </header>
    );
}
