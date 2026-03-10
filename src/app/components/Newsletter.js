"use client";

import { useState } from "react";

export default function NewsletterSubscribe() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [alreadySubscribed, setAlreadySubscribed] = useState(false);

    const handleSubmit = async () => {
        if (!email) return;

        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to subscribe. Please try again.");
            }

            // Check if already subscribed
            if (data.alreadySubscribed) {
                setAlreadySubscribed(true);
                setStatus("idle");
                setShowModal(true);
                return;
            }

            setStatus("success");
            setEmail("");
            setAlreadySubscribed(false);
            setShowModal(true);

        } catch (error) {
            console.error("Subscription error:", error);
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="relative min-h-[100px] flex items-center justify-center bg-[#000000] mb-20 px-4">

            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF88] opacity-[0.02] blur-[80px] rounded-full pointer-events-none" />


            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md transition-all animate-in fade-in duration-500"
                >
                    <div className="relative w-full max-w-lg bg-[#050505] rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(0,255,136,0.15)] border border-white/10 isolate animate-in zoom-in-95 duration-500">


                        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#00FF88]/20 blur-[100px] -z-10 rounded-full" />


                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FF88] to-transparent opacity-80" />


                        <button
                            onClick={() => { setShowModal(false); setStatus("idle"); }}
                            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 z-10 group"
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:rotate-90">
                                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>

                        <div className="flex flex-col items-center px-8 py-12 sm:px-12 sm:py-16 text-center">


                            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-8 rounded-full p-[2px] bg-gradient-to-b from-[#00FF88] to-white/10 shadow-[0_0_50px_rgba(0,255,136,0.3)]">
                                <div className="absolute -inset-2 bg-[#00FF88]/20 blur-xl rounded-full -z-10 animate-pulse"></div>
                                <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center">
                                    <img
                                        src="/avatar-1.png"
                                        alt="Alien NFT Character"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {alreadySubscribed ? (
                                <>
                                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                                        Already Subscribed!
                                    </h2>
                                    <p className="text-white/60 text-[16px] sm:text-[18px] max-w-[360px] leading-relaxed mb-10">
                                        This email is already on our list. Stay tuned — great things are coming your way.

                                    </p>
                                </>
                            ) : (
                                <>
                                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#00FF88] to-emerald-200">
                                        Welcome Aboard!
                                    </h2>
                                    <p className="text-white/60 text-[16px] sm:text-[18px] max-w-[360px] leading-relaxed mb-10">
                                    You have successfully subscribed. We'll keep you updated on our product launch and everything exciting we have coming.
                                    </p>
                                </>
                            )}

                            {/* Unique interactive button */}
                            <button
                                onClick={() => { setShowModal(false); setStatus("idle"); }}
                                className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 font-bold text-black rounded-full overflow-hidden w-full sm:w-auto transition-transform active:scale-95"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00FF88] via-[#85ffc7] to-[#00FF88] animate-gradient-bg" />
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/20 to-transparent" />

                                <span className="relative flex items-center gap-2 text-[15px] sm:text-[17px] tracking-wide">
                                    {alreadySubscribed ? "Close Terminal" : "Acknowledge"}
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="relative w-full max-w-[1200px] mx-auto z-10">
                <div className="hero-bg relative overflow-hidden bg-black/40 backdrop-blur-md border border-[rgba(0,255,136,0.15)] rounded-md p-10 sm:p-14 shadow-[0_0_50px_rgba(0,255,136,0.02)] transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,255,136,0.06)] hover:border-[rgba(0,255,136,0.3)]">

                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FF88] to-transparent opacity-50" />

                    <h2 className="fi text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 text-[22px] sm:text-[28px] md:text-[34px] font-bold text-center mb-8 tracking-[0.01em]">
                        Subscribe for weekly updates on art and culture
                    </h2>

                    <div className="flex justify-center relative z-20">
                        <div
                            className={`flex items-center bg-[#0a0a0a] rounded-full pl-6 pr-2 py-2 gap-3 w-full max-w-[890px] border transition-all duration-300 ${isFocused ? 'border-[#00FF88] shadow-[0_0_30px_rgba(0,255,136,0.15)] bg-[#111111]' : 'border-[rgba(255,255,255,0.08)] hover:border-[rgba(0,255,136,0.4)]'}`}
                        >
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                                placeholder="Enter your email..."
                                className="fi flex-1 min-w-0 border-none outline-none text-[#ffffff] text-[16px] focus-none"
                            />
                            <button
                                onClick={handleSubmit}
                                disabled={status === "loading"}
                                className={`w-12 h-12 min-w-[48px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300 bg-[#00FF88] hover:bg-white hover:shadow-[0_0_20px_#00FF88] cursor-pointer border-none overflow-hidden relative group disabled:opacity-50`}
                            >
                                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

                                {status === "loading" ? (
                                    <div className="w-5 h-5 border-2 border-[#000000] border-t-transparent rounded-full animate-spin relative z-10"></div>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="relative z-10 transition-transform group-hover:translate-x-1">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {status === "error" && (
                        <p className="fi text-red-500 text-[14px] text-center mt-4">
                            {errorMessage}
                        </p>
                    )}

                    <p className="fi text-white text-[12.5px] text-center leading-relaxed mt-8 opacity-90">
                        By subscribing you agree to{" "}
                        <a href="#" className="text-white/80 underline decoration-white/20 hover:text-[#00FF88] hover:decoration-[#00FF88] transition-all duration-300">
                            Terms of Use
                        </a>
                        ,{" "}
                        <a href="#" className="text-white/80 underline decoration-white/20 hover:text-[#00FF88] hover:decoration-[#00FF88] transition-all duration-300">
                            our Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-white/80 underline decoration-white/20 hover:text-[#00FF88] hover:decoration-[#00FF88] transition-all duration-300">
                            our information collection notice
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}