import React from 'react';

export const metadata = {
    title: 'Help Center | AlienNFT',
    description: 'Everything you need to know about the colony.',
};

// Inline Icons
const RocketIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>);
const SparklesIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>);
const StarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>);
const WalletIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>);
const ShoppingCartIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>);
const UsersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
const WrenchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>);
const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>);

const topics = [
    {
        icon: <RocketIcon />,
        title: "Getting Started",
        description: "What AlienNFT is and what you need to join"
    },
    {
        icon: <SparklesIcon />,
        title: "Minting",
        description: "How to mint, pricing, supply, and whitelist info"
    },
    {
        icon: <StarIcon />,
        title: "Collection & Rarity",
        description: "Traits, rarity rankings, and 1/1 ultra rares"
    },
    {
        icon: <WalletIcon />,
        title: "Wallet & Transactions",
        description: "Supported wallets, gas fees, and wallet safety"
    },
    {
        icon: <ShoppingCartIcon />,
        title: "Marketplace & Trading",
        description: "Where to buy, sell, list, and make offers"
    },
    {
        icon: <UsersIcon />,
        title: "Community & Roadmap",
        description: "Discord, whitelist, staking, and future phases"
    },
    {
        icon: <WrenchIcon />,
        title: "Troubleshooting",
        description: "NFT not showing, mint issues, scam warnings"
    }
];

export default function HelpCenter() {
    return (
        <div className="min-h-screen pb-24 text-white">
            {/* Hero Section */}
            <section className="relative w-full py-20 lg:py-32 overflow-hidden flex flex-col items-center justify-center text-center px-4 hero-bg">
                <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none"></div>
                <div className="absolute inset-0 hero-glow opacity-60 pointer-events-none"></div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center afu">
                    <h1 className="fc text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-md">
                        AlienNFT <span className="text-[#00FF88]">Help Center</span>
                    </h1>
                    <p className="fi text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
                        Everything you need to know about the colony. Can&apos;t find your answer?
                        Join our Discord or reach out on Twitter.
                    </p>

                    {/* Decorative Search Bar */}
                    <div className="relative w-full max-w-lg mb-8">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                            <SearchIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Ask a question..."
                            className="w-full bg-[#111] border border-[#333] rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF88] transition-colors ch"
                            disabled
                        />
                    </div>
                </div>
            </section>

            {/* Featured Topics Section */}
            <section className="relative z-10 max-w-6xl mx-auto px-4 -mt-10 md:-mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 afu" style={{ animationDelay: '0.2s' }}>
                    {topics.map((topic, idx) => (
                        <div
                            key={idx}
                            className="group bg-[#0a0a0a] border border-[#222] rounded-xl p-6 flex flex-col items-start text-left cursor-pointer ch relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all"
                        >
                            {/* Subtle green glow behind icon on hover */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00FF88] opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"></div>

                            <div className="mb-5 p-3 rounded-lg bg-[#111] border border-[#222] text-gray-300 group-hover:text-[#00FF88] group-hover:border-[rgba(0,255,136,0.3)] transition-colors relative z-10">
                                {topic.icon}
                            </div>

                            <h3 className="fi text-xl font-semibold text-white mb-2 group-hover:text-[#00FF88] transition-colors relative z-10">
                                {topic.title}
                            </h3>

                            <p className="fi text-sm text-gray-400 leading-relaxed font-light relative z-10">
                                {topic.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
