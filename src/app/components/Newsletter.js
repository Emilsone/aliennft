"use client";

import { useState } from "react";

export default function NewsletterSubscribe() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = () => {
        if (email) setSubmitted(true);
    };

    return (
        <div className="relative min-h-[100px] flex items-center justify-center bg-[#000000] py-15 px-4">
            {/* Background creative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF88] opacity-[0.02] blur-[80px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[1200px] mx-auto z-10">
                <div className="hero-bg relative overflow-hidden bg-black/40 backdrop-blur-md border border-[rgba(0,255,136,0.15)] rounded-2xl p-10 sm:p-14 shadow-[0_0_50px_rgba(0,255,136,0.02)] transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,255,136,0.06)] hover:border-[rgba(0,255,136,0.3)]">

                    {/* Decorative Top Glow Line */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FF88] to-transparent opacity-50" />

                    <h2 className="fi text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 text-[22px] sm:text-[28px] md:text-[34px] font-bold text-center mb-8 tracking-[0.01em]">
                        Subscribe for weekly updates on art and culture
                    </h2>

                    <div className="flex justify-center relative z-20">
                        <div
                            className={`flex items-center bg-[#0a0a0a] rounded-full pl-6 pr-2 py-2 gap-3 w-full max-w-[890px] border transition-all duration-300 ${isFocused ? 'border-[#00FF88] shadow-[0_0_30px_rgba(0,255,136,0.15)] bg-[#111111]' : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,255,136,0.4)]'
                                }`}
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                                placeholder="Enter your email..."
                                className="fi flex-1 min-w-0 border-none outline-none text-[#ffffff] text-[16px] placeholder-[#666666] bg-transparent caret-[#00FF88]"
                            />
                            <button
                                onClick={handleSubmit}
                                className={`w-12 h-12 min-w-[48px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 cursor-pointer border-none overflow-hidden relative group ${submitted ? "bg-[#222222]" : "bg-[#00FF88] hover:bg-white hover:shadow-[0_0_20px_#00FF88]"
                                    }`}
                            >
                                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

                                {submitted ? (
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="relative z-10 transition-transform group-hover:scale-110">
                                        <path
                                            d="M3 8l4 4 6-6"
                                            stroke="#00FF88"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="relative z-10 transition-transform group-hover:translate-x-1">
                                        <path
                                            d="M3 8h10M9 4l4 4-4 4"
                                            stroke="#000000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <p className="fi text-[#666666] text-[12.5px] text-center leading-relaxed mt-8 opacity-80">
                        By subscribing you agree to{" "}
                        <a href="#" className="text-white/60 underline decoration-white/20 hover:text-[#00FF88] hover:decoration-[#00FF88] transition-all duration-300">
                            Terms of Use
                        </a>
                        ,{" "}
                        <a href="#" className="text-white/60 underline decoration-white/20 hover:text-[#00FF88] hover:decoration-[#00FF88] transition-all duration-300">
                            our Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-white/60 underline decoration-white/20 hover:text-[#00FF88] hover:decoration-[#00FF88] transition-all duration-300">
                            our information collection notice
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}