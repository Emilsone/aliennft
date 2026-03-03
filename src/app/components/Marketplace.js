"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Marketplace() {
    const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const auctions = [
        {
            id: 1,
            title: "Genesis Alien #001",
            creator: "@alienboss",
            highestBid: "4.5 ETH",
            image: "/team/david.png",
            hot: true
        },
        {
            id: 2,
            title: "Neon Invader #84",
            creator: "@cosmicart",
            highestBid: "2.1 ETH",
            image: "/avatar-2.png",
            hot: false
        },
        {
            id: 3,
            title: "Galactic Ape #99",
            creator: "@starchief",
            highestBid: "3.8 ETH",
            image: "/team/nara.png",
            hot: true
        }
    ];

    return (
        <section className="relative bg-[#000000] py-15 px-6 sm:px-10 overflow-hidden min-h-screen flex items-center">
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(0,255,136,0.03),transparent_60%)] pointer-events-none" />
            <div className="absolute -left-40 bottom-40 w-[500px] h-[500px] bg-[#00FF88] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left side: Hero Auction */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative z-10 rounded-2xl p-1 bg-gradient-to-br from-[#00FF88]/40 via-[#00FF88]/5 to-black/80 shadow-[0_0_50px_rgba(0,255,136,0.1)] transition-transform duration-700 hover:scale-[1.02]">
                            <div className="bg-black rounded-xl overflow-hidden relative">
                                {/* Badges */}
                                <div className="absolute top-6 left-6 z-20 flex gap-3">
                                    <span className="px-4 py-1.5 rounded-full bg-[#00FF88] text-black text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_#00FF88]">Live</span>
                                    <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider">Top Bid</span>
                                </div>

                                {/* Image Frame */}
                                <div className="relative h-[450px] w-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                                    <Image
                                        src={auctions[0].image}
                                        alt="Featured NFT"
                                        fill
                                        className="object-cover transition-transform duration-1000 hover:scale-110"
                                        priority
                                    />
                                </div>

                                {/* Timer & Action Panel */}
                                <div className="relative p-8 mt-[-100px] z-20 backdrop-blur-xl bg-black/50 border-t border-[#00FF88]/20">
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-8">
                                        <div>
                                            <p className="text-[#00FF88] font-mono text-sm mb-2 opacity-80">{auctions[0].creator}</p>
                                            <h3 className="text-3xl font-black text-white uppercase tracking-tight">{auctions[0].title}</h3>
                                        </div>

                                        <div className="text-right">
                                            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">Auction Ends In</p>
                                            <div className="flex gap-4">
                                                <div className="flex flex-col items-center">
                                                    <span className="text-2xl font-bold text-white bg-white/5 border border-white/10 rounded-lg w-12 h-12 flex items-center justify-center">{String(timeLeft.hours).padStart(2, '0')}</span>
                                                    <span className="text-[10px] text-white/50 uppercase mt-1">Hrs</span>
                                                </div>
                                                <div className="text-2xl font-bold text-[#00FF88] mt-2">:</div>
                                                <div className="flex flex-col items-center">
                                                    <span className="text-2xl font-bold text-white bg-white/5 border border-white/10 rounded-lg w-12 h-12 flex items-center justify-center">{String(timeLeft.minutes).padStart(2, '0')}</span>
                                                    <span className="text-[10px] text-white/50 uppercase mt-1">Min</span>
                                                </div>
                                                <div className="text-2xl font-bold text-[#00FF88] mt-2">:</div>
                                                <div className="flex flex-col items-center">
                                                    <span className="text-2xl font-bold text-white bg-white/5 border border-white/10 rounded-lg w-12 h-12 flex items-center justify-center">{String(timeLeft.seconds).padStart(2, '0')}</span>
                                                    <span className="text-[10px] text-white/50 uppercase mt-1">Sec</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                                        <div className="flex-1 bg-white/5 border border-white/10 rounded-lg px-6 py-4 w-full">
                                            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Current Bid</p>
                                            <p className="text-[#00FF88] text-2xl font-black">{auctions[0].highestBid}</p>
                                        </div>
                                        <button className="flex-1 w-full relative overflow-hidden group bg-[#00FF88] text-black font-bold h-full py-5 rounded-lg border border-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all">
                                            <span className="relative z-10 text-lg tracking-widest uppercase">Place Bid</span>
                                            <div className="absolute inset-0 h-full w-full bg-white transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 z-0"></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Active Auctions List */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-6">
                        <div className="mb-6">
                            <span className="text-[#00FF88] text-sm font-bold tracking-[0.3em] uppercase block mb-3">Live Market</span>
                            <h2 className="text-4xl md:text-5xl font-black text-white/80 uppercase tracking-tight">Active Auctions</h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            {auctions.slice(1).map((item) => (
                                <div
                                    key={item.id}
                                    className="group flex gap-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-[#00FF88]/30 transition-all duration-300 cursor-pointer"
                                    onClick={() => { }}
                                >
                                    <div className="relative w-28 h-28 rounded-lg overflow-hidden shrink-0 border border-white/10 group-hover:border-[#00FF88]/50 transition-colors">
                                        <div className="absolute inset-0 bg-[#00FF88]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col justify-center flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="text-[#00FF88] font-mono text-[11px] mb-1">{item.creator}</p>
                                                <h4 className="text-white font-bold text-lg uppercase tracking-wide group-hover:text-[#00FF88] transition-colors">{item.title}</h4>
                                            </div>
                                            {item.hot && (
                                                <span className="px-2 py-1 rounded bg-red-500/20 text-red-500 text-[10px] font-bold uppercase border border-red-500/30 flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                                    Hot
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex justify-between items-end mt-auto pt-2 border-t border-white/5">
                                            <p className="text-white/50 text-xs uppercase">Current Bid</p>
                                            <p className="text-white font-bold">{item.highestBid}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="bo mt-6 self-start flex items-center gap-3 group border-white/10 hover:border-[#00FF88] text-white hover:text-[#00FF88]">
                            View All Auctions
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
