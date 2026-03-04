"use client";
import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What is the Mint Price and Total Supply?",
            answer: "The mint price is set at a flat 0.05 ETH to ensure accessibility for early adopters. The total supply is strictly capped at 2,240 unique Alien NFTs. No more will ever be minted."
        },
        {
            question: "Which Blockchain is ALIENNFT built on?",
            answer: "We are launching exclusively on the Ethereum (ERC-721) blockchain. This ensures maximum security, proven provenance, and seamless integration with major secondary marketplaces."
        },
        {
            question: "What is the Royalty Percentage?",
            answer: "Secondary market royalties are set at 5%. These funds are transparently directed into the Community Treasury, which is used entirely to fund future development, marketing, and the $ALIEN staking rewards pool."
        },
        {
            question: "What utility do I get for holding?",
            answer: "Holding an Alien NFT grants you immediate access to our staking platform to earn $ALIEN tokens, exclusive entry to the Alpha Discord channels, free claims on future companion drops, and a fully rigged 3D avatar for metaverse integration."
        },
        {
            question: "When is the official launch date?",
            answer: "The whitelist mint begins on [TBA Date] for our early supporters. The public sale will commence 24 hours later. Join our Discord and turn on Twitter notifications to be the first to know the exact timeline."
        }
    ];

    return (
        <section className="relative bg-[#000000] py-20 px-6 sm:px-10 overflow-hidden">
           
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FF88] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1000px] mx-auto relative z-10">
                <div className="text-center mb-16 relative">
                   
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mx-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-white/70">Questions</span>
                    </h2>
                    <p className="mt-6 text-[#888888] max-w-2xl mx-auto text-[15px] leading-relaxed">
                        Everything you need to know about the ALIENNFT launch. Transparency is our priority.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`group border rounded-sm overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white/[0.04] border-[#00FF88]/40 shadow-[0_10px_30px_rgba(0,255,136,0.05)]' : 'bg-[#0a0a0a] border-white/10 hover:border-white/30'}`}
                            >
                                <button
                                    className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex justify-between items-center focus:outline-none"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                >
                                    <h3 className={`font-bold text-lg sm:text-xl pr-8 transition-colors duration-300 ${isOpen ? 'text-[#00FF88]' : 'text-white group-hover:text-[#00FF88]/80'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#00FF88] bg-[#00FF88]/10' : 'border-white/20 bg-transparent group-hover:border-white/40'}`}>
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'text-[#00FF88] rotate-180' : 'text-white/70'}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                <div
                                    className={`px-6 sm:px-8 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6 sm:pb-8' : 'max-h-0 opacity-0 pb-0'}`}
                                >
                                    <div className="w-12 h-[2px] bg-gradient-to-r from-[#00FF88] to-transparent mb-4"></div>
                                    <p className="text-[#aaaaaa] leading-relaxed text-[15px] sm:text-[16px]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 text-center border-t border-white/10 pt-8">
                    <p className="text-[#888888] mb-6">Still have questions?</p>
                    <button className="bo border-white/20 hover:border-[#00FF88] text-white hover:text-[#00FF88] inline-flex items-center gap-3 group">
                        Join our Discord
                        <svg className="w-5 h-5 text-current transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.057a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
