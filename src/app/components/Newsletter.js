"use client";

import { useState } from "react";

export default function NewsletterSubscribe() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (email) setSubmitted(true);
    };

    return (
        <div className="min-h-[100px] flex items-center justify-center bg-[#000000]">
            <div className="hero-bg border border-[rgba(0,255,136,0.15)] px-14 pt-12 pb-10 w-full max-w-[1200px]  mx-6">
                <h2 className="fi text-white text-[19px] sm:text-[20px] md:text-[24px] font-bold text-center mb-5 tracking-[0.01em]">
                    Subscribe for weekly updates on art and culture
                </h2>
                <div className="flex justify-center">
                    <div className="flex items-center bg-[#000000] rounded-full pl-5 pr-1.5 py-1.5 gap-2 w-full max-w-[890px]">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            placeholder="Enter your email..."
                            className="fi  flex-1  min-w-0  border-none outline-none text-[#999999] text-[15px]  placeholder-[#999999] caret-white"
                        />
                        <button
                            onClick={handleSubmit}
                            className={`w-10 h-10 min-w-[40px]  rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer border-none ${submitted ? "bg-[#555555]" : "bg-white"
                                }`}
                        >
                            {submitted ? (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M3 8l4 4 6-6"
                                        stroke="#fff"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            ) : (
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path
                                        d="M3 8h10M9 4l4 4-4 4"
                                        stroke="#1a1a1a"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <p className="fi text-[#666666] text-[11.5px] text-center leading-relaxed py-4">
                    By subscribing you agree to{" "}
                    <a href="#" className="text-[#888888] underline hover:text-[#aaaaaa] transition-colors">
                        Terms of Use
                    </a>
                    ,{" "}
                    <a href="#" className="text-[#888888] underline hover:text-[#aaaaaa] transition-colors">
                        our Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#888888] underline hover:text-[#aaaaaa] transition-colors">
                        our information collection notice
                    </a>
                </p>
            </div>
        </div>
    );
}