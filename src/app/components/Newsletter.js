"use client";

import { useState } from "react";

export default function NewsletterSubscribe() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        if (email) setSubmitted(true);
    };

    return (
        <div className="min-h-[400px] flex items-center justify-center bg-[#000000]">
            <div className="bg-[rgba(0,255,136,0.04)] border border-[rgba(0,255,136,0.15)] rounded-sm px-14 pt-12 pb-10 w-full max-w-[1100px] mx-6">

                {/* Heading */}
                <h2 className="text-white text-[22px] font-normal text-center mb-7 tracking-[0.01em] font-serif">
                    Subscribe for weekly updates on art and culture
                </h2>

                {/* Input Row */}
                <div className="flex items-center bg-[#2e2e2e] rounded-full pl-5 pr-1.5 py-1.5 gap-2">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        placeholder="Enter your email..."
                        className="flex-1 bg-transparent border-none outline-none text-[#999999] text-[15px] font-serif placeholder-[#999999] caret-white"
                    />
                    <button
                        onClick={handleSubmit}
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 cursor-pointer border-none ${submitted ? "bg-[#555555]" : "bg-white"
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

                <p className="text-[#666666] text-[11.5px] text-center leading-relaxed py-4">
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