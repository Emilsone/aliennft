"use client";

import React, { useState, useEffect, useRef } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const RocketIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>);
const SparklesIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>);
const StarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>);
const WalletIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>);
const ShoppingCartIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>);
const UsersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>);
const WrenchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>);
const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>);
const ChevronDownIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>);
const ArrowLeftIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>);


const faqData = [
    {
        id: "getting-started",
        icon: <RocketIcon />,
        title: "Getting Started",
        description: "What AlienNFT is and what you need to join",
        qas: [
            { question: "What is AlienNFT?", answer: "AlienNFT is a unique collection of alien beings living on the blockchain. Each NFT is a one-of-a-kind alien with unique traits, rarity, and identity. Holders become part of The Colony — an exclusive community with access to future drops, events, and rewards." },
            { question: "What is an NFT?", answer: "An NFT (Non-Fungible Token) is a unique digital asset stored on the blockchain. Unlike regular files, NFTs are verifiably scarce and owned entirely by you — no one can duplicate or take it from you." },
            { question: "What blockchain is AlienNFT on?", answer: "AlienNFT is deployed on Ethereum. All transactions and ownership records are stored permanently on-chain." },
            { question: "What wallet do I need?", answer: "For Ethereum/Base you can use MetaMask, Coinbase Wallet, or Rainbow. For Solana you can use Phantom or Backpack." },
            { question: "Do I need crypto to participate?", answer: "Yes. You'll need the native currency of the blockchain (e.g. ETH for Ethereum) to cover the mint price and gas fees." }
        ]
    },
    {
        id: "minting",
        icon: <SparklesIcon />,
        title: "Minting",
        description: "How to mint, pricing, supply, and whitelist info",
        qas: [
            { question: "How do I mint an AlienNFT?", answer: "1. Visit the official AlienNFT website\n2. Click the 'Connect Wallet' button\n3. Select your wallet (MetaMask, Phantom, etc.)\n4. Approve the connection\n5. Click 'Mint'\n6. Confirm the transaction in your wallet\n7. Wait for confirmation — your alien will appear in your wallet shortly" },
            { question: "What is the mint price?", answer: "The mint price is 0.05 ETH per NFT. This does not include gas fees." },
            { question: "What is the total supply?", answer: "AlienNFT has a total supply of 8,888 unique aliens." },
            { question: "Can I mint more than one?", answer: "Yes. You can mint up to 5 per wallet per transaction during the public sale." },
            { question: "Is there a whitelist/presale?", answer: "Yes. Whitelisted wallets get early access and a discounted mint price. Join our Discord to qualify for whitelist spots." },
            { question: "What happens after I mint?", answer: "Your NFT will be sent directly to your connected wallet. You can view it on OpenSea / Magic Eden or in your wallet's NFT section." },
            { question: "Why did my transaction fail?", answer: "Common reasons:\n• Insufficient funds — make sure you have enough for mint price + gas\n• Gas too low — increase gas limit in your wallet settings\n• Sold out — the collection may have sold out before your transaction confirmed\n• Wrong network — make sure your wallet is on the correct network" }
        ]
    },
    {
        id: "collection-rarity",
        icon: <StarIcon />,
        title: "Collection & Rarity",
        description: "Traits, rarity rankings, and 1/1 ultra rares",
        qas: [
            { question: "How many AlienNFTs exist?", answer: "There are 8,888 unique AlienNFTs in existence. No more will ever be created." },
            { question: "How is rarity determined?", answer: "Each alien is generated from a combination of traits across categories like Background, Skin, Eyes, Outfit, Accessory, and Special properties. Rarer traits appear on fewer aliens, making those NFTs more scarce and valuable." },
            { question: "Where can I check rarity rankings?", answer: "You can check rarity rankings on Rarity Sniper, Rarity Tools, or our official rarity page." },
            { question: "Are there 1/1 ultra rare aliens?", answer: "Yes. There are 10 hand-crafted 1/1 aliens hidden in the collection. These are the rarest of the colony." },
            { question: "Where can I view my NFT traits?", answer: "Connect your wallet on our website or view your NFT on OpenSea/Magic Eden to see the full trait breakdown." }
        ]
    },
    {
        id: "wallet-transactions",
        icon: <WalletIcon />,
        title: "Wallet & Transactions",
        description: "Supported wallets, gas fees, and wallet safety",
        qas: [
            { question: "What wallets are supported?", answer: "MetaMask, Coinbase Wallet, Rainbow Wallet, WalletConnect, and Phantom (for Solana) are fully supported." },
            { question: "How do I set up MetaMask?", answer: "1. Go to metamask.io\n2. Install the browser extension\n3. Create a new wallet\n4. Save your seed phrase offline — never share it with anyone\n5. Add funds via a crypto exchange" },
            { question: "What are gas fees?", answer: "Gas fees are small payments made to the blockchain network to process your transaction. They vary based on network congestion and are separate from the mint price. AlienNFT does not control gas fees." },
            { question: "My transaction is stuck/pending — what do I do?", answer: "• Wait a few minutes — the network may be congested\n• In MetaMask, you can speed up or cancel a pending transaction\n• Try increasing the gas price and resubmitting" },
            { question: "Is my wallet safe?", answer: "Your wallet is safe as long as you:\n• Never share your seed phrase or private key\n• Only connect to the official AlienNFT website\n• Never click suspicious links in Discord or Twitter DMs" }
        ]
    },
    {
        id: "marketplace-trading",
        icon: <ShoppingCartIcon />,
        title: "Marketplace & Trading",
        description: "Where to buy, sell, list, and make offers",
        qas: [
            { question: "Where can I buy or sell AlienNFT?", answer: "AlienNFT is tradeable on OpenSea (Ethereum/Base), Magic Eden (Solana), and Blur (Ethereum)." },
            { question: "How do I list my AlienNFT for sale?", answer: "1. Go to OpenSea or Magic Eden\n2. Connect the wallet holding your NFT\n3. Navigate to your NFT\n4. Click 'Sell'\n5. Set your price and duration\n6. Confirm the listing" },
            { question: "What are royalty fees?", answer: "AlienNFT has a 5% royalty fee on all secondary sales. This goes directly to the team to fund ongoing development, rewards, and future drops." },
            { question: "How do I make an offer on an AlienNFT?", answer: "On OpenSea or Magic Eden, navigate to any AlienNFT listing and click 'Make Offer'. You'll need wrapped ETH (WETH) to place offers." }
        ]
    },
    {
        id: "community-roadmap",
        icon: <UsersIcon />,
        title: "Community & Roadmap",
        description: "Discord, whitelist, staking, and future phases",
        qas: [
            { question: "Where is the community?", answer: "The colony lives on Discord and Twitter/X." },
            { question: "How do I get whitelisted?", answer: "Whitelist spots are earned through community participation. Ways to qualify:\n• Be active in Discord\n• Participate in community events and giveaways\n• Invite friends to the server\n• Follow and engage on Twitter" },
            { question: "What's on the roadmap?", answer: "Phase 1: Website launch, whitelist opening\nPhase 2: Presale mint for whitelist holders\nPhase 3: Public mint\nPhase 4: Rarity reveal\nPhase 5: Staking & token rewards\nPhase 6: Future utility (Merch, DAO)" },
            { question: "Is there a token or staking?", answer: "Yes, coming soon! AlienNFT holders will be able to stake their NFTs to earn $ALIEN tokens. More details will be announced in Discord." }
        ]
    },
    {
        id: "troubleshooting",
        icon: <WrenchIcon />,
        title: "Troubleshooting",
        description: "NFT not showing, mint issues, scam warnings",
        qas: [
            { question: "My NFT is not showing in my wallet", answer: "• Wait 10–15 minutes after minting — it may still be processing\n• Refresh your wallet's NFT section\n• Import the NFT manually using the contract address\n• Check on OpenSea using your wallet address" },
            { question: "The mint button is not working", answer: "• Make sure your wallet is connected\n• Check you're on the correct network\n• Try refreshing the page or clearing your browser cache\n• Disable any ad blockers or VPNs temporarily\n• Try a different browser (Chrome recommended)" },
            { question: "I connected the wrong wallet", answer: "Disconnect your current wallet on the website and reconnect with the correct wallet address." },
            { question: "I was scammed / sent my NFT to the wrong address", answer: "Unfortunately, blockchain transactions are irreversible. AlienNFT cannot recover lost or stolen NFTs. Always double-check wallet addresses before sending.\nWarning: The AlienNFT team will never DM you first, ask for your seed phrase, or ask you to send crypto to 'verify' your wallet. These are always scams." },
            { question: "How do I contact support?", answer: "Open a ticket in our Discord server or DM us on Twitter/X. The colony responds fast." }
        ]
    }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current?.scrollHeight}px`);
        } else {
            setHeight('0px');
        }
    }, [isOpen]);

    return (
        <div className="border-b border-[#222] overflow-hidden">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
            >
                <span className="fi text-lg font-medium text-white group-hover:text-[#00FF88] transition-colors pr-8">
                    {question}
                </span>
                <span className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDownIcon />
                </span>
            </button>
            <div
                style={{
                    maxHeight: height,
                    opacity: isOpen ? 1 : 0
                }}
                className="transition-all duration-300 ease-in-out"
            >
                <div ref={contentRef} className="pb-6 pt-2 text-gray-400 fi leading-relaxed whitespace-pre-line">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default function HelpCenter() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [openAccordionIdx, setOpenAccordionIdx] = useState(null);
    const searchRef = useRef(null);
    const [modal, setModal] = useState(null);


    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsDropdownVisible(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    const handleSearch = (query) => {
        setSearchQuery(query);

        if (!query.trim()) {
            setIsDropdownVisible(false);
            setSearchResults([]);
            return;
        }

        const q = query.toLowerCase();
        const results = [];

        faqData.forEach(category => {
            category.qas.forEach((qa, idx) => {
                if (qa.question.toLowerCase().includes(q) || qa.answer.toLowerCase().includes(q)) {
                    results.push({
                        categoryId: category.id,
                        categoryTitle: category.title,
                        question: qa.question,
                        answer: qa.answer,
                        qaIndex: idx
                    });
                }
            });
        });

        setSearchResults(results);
        setIsDropdownVisible(true);
    };


    const handleResultClick = (categoryId, qaIndex) => {
        const category = faqData.find(c => c.id === categoryId);
        if (category) {
            setSearchQuery('');
            setIsDropdownVisible(false);
            setActiveCategory(category);
            setOpenAccordionIdx(qaIndex);
        }
    };

    return (
        <div>
            <div className="min-h-screen pb-24 text-white">

                <Header />

                <section className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 hero-bg transition-all duration-500 ease-in-out"
                    style={{ padding: activeCategory ? "4rem 1rem" : "8rem 1rem" }}>
                    <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none"></div>
                    <div className="absolute inset-0 hero-glow opacity-60 pointer-events-none"></div>

                    <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center afu w-full">
                        {!activeCategory ? (
                            <>
                                <h1 className="fc text-5xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight text-white/85 drop-shadow-md">
                                    AlienNFT <span className="text-[#00FF88]">Help Center</span>
                                </h1>
                                <p className="fi text-white/80 text-lg md:text-xl max-w-4xl mb-10 leading-relaxed font-light">
                                    Our support team has compiled a list of common questions and answers to help you find tips, insights, and troubleshooting advice.
                                </p>

                                <div className="relative w-full max-w-lg mb-4" ref={searchRef}>
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/80">
                                        <SearchIcon />
                                    </div>
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => handleSearch(e.target.value)}
                                        onFocus={() => { if (searchQuery) setIsDropdownVisible(true) }}
                                        placeholder="Ask a question..."
                                        className="w-full placeholder:text-white bg-[#111] border border-[#333] rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FF88] transition-colors ch"
                                    />


                                    {isDropdownVisible && searchQuery.trim() !== '' && (
                                        <div className="w-full mt-2 bg-[#111] border border-[#333] rounded-xl shadow-2xl overflow-hidden max-h-50 overflow-y-auto text-left afu">
                                            {searchResults.length > 0 ? (
                                                <ul className="py-2">
                                                    {searchResults.map((result, i) => (
                                                        <li key={i}>
                                                            <button
                                                                onClick={() => handleResultClick(result.categoryId, result.qaIndex)}
                                                                className="w-full text-left px-4 py-3 hover:bg-[#1a1a1a] transition-colors border-b border-[#222] last:border-0 group"
                                                            >
                                                                <div className="text-xs text-[#00FF88] font-semibold mb-1 uppercase tracking-wider">{result.categoryTitle}</div>
                                                                <div className="text-white text-sm font-medium mb-1 group-hover:text-[#00FF88] transition-colors">{result.question}</div>
                                                                <div className="text-gray-500 text-xs line-clamp-1">{result.answer}</div>
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <div className="p-6 text-center text-gray-400 fi text-sm">
                                                    No results found for &quot;{searchQuery}&quot;. <br />
                                                    <a href="#" className="text-[#00FF88] hover:underline mt-2 inline-block">Try joining our Discord for help.</a>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="w-full flex items-center justify-between pb-6 border-b border-[#333] slideIn">
                                <button
                                    onClick={() => {
                                        setActiveCategory(null);
                                        setOpenAccordionIdx(null);
                                    }}
                                    className="flex items-center gap-2 text-gray-400 hover:text-[#00FF88] transition-colors fi text-sm uppercase tracking-widest font-semibold bg-[#111] py-2 px-4 rounded-full border border-[#333] hover:border-[#00FF88]"
                                >
                                    <ArrowLeftIcon /> Back
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className="text-[#00FF88]">{activeCategory.icon}</div>
                                    <h2 className="fc text-3xl md:text-4xl font-bold tracking-tight">{activeCategory.title}</h2>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <section className="relative z-10 max-w-6xl mx-auto px-4 -mt-10 md:-mt-16">
                    {!activeCategory ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 afu" style={{ animationDelay: '0.2s' }}>
                            {faqData.map((topic, idx) => (
                                <div
                                    key={topic.id}
                                    onClick={() => setActiveCategory(topic)}
                                    className="group bg-[#0a0a0a] border border-[#222] rounded-xl p-6 flex flex-col items-start text-left cursor-pointer ch relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all"
                                >
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00FF88] opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"></div>

                                    <div className="mb-5 p-3 rounded-lg bg-[#111] border border-[#222] text-gray-300 group-hover:text-[#00FF88] group-hover:border-[rgba(0,255,136,0.3)] transition-colors relative z-10">
                                        {topic.icon}
                                    </div>

                                    <h3 className="fi text-xl font-semibold text-white mb-2 group-hover:text-[#00FF88] transition-colors relative z-10">
                                        {topic.title}
                                    </h3>

                                    <p className="fi text-sm text-white/80 leading-relaxed font-light relative z-10">
                                        {topic.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="max-w-3xl mx-auto bg-[#0a0a0a] border border-[#222] rounded-2xl p-6 md:p-10 shadow-xl slideIn mt-16 md:mt-24 mb-16 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF88] opacity-5 rounded-full blur-3xl pointer-events-none"></div>

                            <p className="text-gray-400 fi text-sm md:text-base leading-relaxed mb-8 border-b border-[#222] pb-8">
                                {activeCategory.description}
                            </p>

                            <div className="flex flex-col relative z-10">
                                {activeCategory.qas.map((qa, idx) => (
                                    <AccordionItem
                                        key={idx}
                                        question={qa.question}
                                        answer={qa.answer}
                                        isOpen={openAccordionIdx === idx}
                                        onClick={() => setOpenAccordionIdx(openAccordionIdx === idx ? null : idx)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="mt-12 pt-8 border-t border-[#222] flex flex-row items-center justify-between">
                        <p className="fi text-white/80 text-sm">
                            Last updated: <span className="text-white/60">March 2026</span>
                        </p>

                        <div className="flex items-center gap-3">
                            <span className="fi text-white/80 text-sm">Was this helpful?</span>
                            <button
                                onClick={() => setModal('positive')}
                                className="flex items-center gap-1 px-4 py-2 rounded-full border border-[#333] text-gray-400 hover:border-[#00FF88] hover:text-[#00FF88] transition-all text-sm fi"
                            >
                                👍 Yes
                            </button>
                            <button
                                onClick={() => setModal('negative')}
                                className="flex items-center gap-1 px-4 py-2 rounded-full border border-[#333] text-gray-400 hover:border-red-500 hover:text-red-500 transition-all text-sm fi"
                            >
                                👎 No
                            </button>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />

            {modal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={() => setModal(null)}
                >
                    <div
                        className="bg-[#111] border border-[#333] rounded-2xl p-8 max-w-sm w-full mx-4 flex flex-col items-center gap-4 shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="text-4xl">
                            {modal === 'positive' ? '👍' : '👎'}
                        </div>
                        <h2 className="text-white/80 text-xl font-semibold fi">
                            {modal === 'positive' ? 'Thanks for the feedback!' : 'Sorry to hear that.'}
                        </h2>
                        <p className="text-white/80 text-sm text-center fi">
                            {modal === 'positive'
                                ? "We're glad this was helpful to you."
                                : 'Join our Discord for help and support!'}
                        </p>
                        {modal === 'negative' && (
                            <a
                                href="#"
                                className="px-5 py-2 rounded-full bg-[#00FF88] text-black text-sm font-semibold hover:opacity-80 transition-all fi"
                            >
                                Join Discord 👽
                            </a>
                        )}
                        <button
                            onClick={() => setModal(null)}
                            className="mt-1 px-5 py-2 rounded-full border border-[#333] text-gray-400 hover:border-white hover:text-white transition-all text-sm fi"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}