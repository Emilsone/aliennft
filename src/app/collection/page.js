"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

import Header from '../components/Header';
import Footer from '../components/Footer';

const collectionStats = {
    items: "10,000",
    owners: "4,231",
    floor: "0.85 ETH",
    volume: "12.4K ETH",
};

const nfts = [
    { id: "8921", name: "Alien #8921", image: "/avatar-1.png", price: "0.85", status: "Buy Now", background: "Cosmic Void", clothing: "Space Suit", eyes: "Laser" },
    { id: "4432", name: "Alien #4432", image: "/avatar-2.png", price: "0.92", status: "On Auction", background: "Neon City", clothing: "Cyber Jacket", eyes: "Normal" },
    { id: "1024", name: "Alien #1024", image: "/avatar-3.png", price: "1.20", status: "Buy Now", background: "Deep Space", clothing: "Holographic", eyes: "Cyborg" },
    { id: "0776", name: "Alien #0776", image: "/avatar-4.png", price: "2.50", status: "New", background: "Toxic Green", clothing: "None", eyes: "Hypnotic" },
    { id: "9833", name: "Alien #9833", image: "/avatar-5.png", price: "0.88", status: "Buy Now", background: "Cosmic Void", clothing: "Cyber Jacket", eyes: "Normal" },
    { id: "0231", name: "Alien #0231", image: "/avatar-hero.png", price: "3.40", status: "On Auction", background: "Deep Space", clothing: "Space Suit", eyes: "Laser" },
    { id: "5542", name: "Alien #5542", image: "/avatar-6.png", price: "1.05", status: "Buy Now", background: "Neon City", clothing: "Holographic", eyes: "Cyborg" },
    { id: "8899", name: "Alien #8899", image: "/avatar-7.png", price: "0.95", status: "New", background: "Toxic Green", clothing: "Space Suit", eyes: "Normal" },
    { id: "0112", name: "Alien #0112", image: "/avatar-8.png", price: "5.00", status: "On Auction", background: "Deep Space", clothing: "None", eyes: "Hypnotic" },
    { id: "4321", name: "Alien #4321", image: "/ape.png", price: "0.89", status: "Buy Now", background: "Cosmic Void", clothing: "Cyber Jacket", eyes: "Laser" },
    { id: "7654", name: "Alien #7654", image: "/avatar-1.png", price: "1.10", status: "Buy Now", background: "Neon City", clothing: "Space Suit", eyes: "Normal" },
    { id: "9999", name: "Alien #9999", image: "/avatar-2.png", price: "0.86", status: "New", background: "Toxic Green", clothing: "Holographic", eyes: "Cyborg" },
    { id: "1122", name: "Alien #1122", image: "/avatar-3.png", price: "1.45", status: "Buy Now", background: "Deep Space", clothing: "Cyber Jacket", eyes: "Hypnotic" },
    { id: "3344", name: "Alien #3344", image: "/avatar-4.png", price: "0.90", status: "On Auction", background: "Cosmic Void", clothing: "None", eyes: "Laser" },
    { id: "5566", name: "Alien #5566", image: "/avatar-5.png", price: "2.10", status: "Buy Now", background: "Neon City", clothing: "Space Suit", eyes: "Cyborg" },
    { id: "7788", name: "Alien #7788", image: "/avatar-6.png", price: "1.75", status: "New", background: "Toxic Green", clothing: "Cyber Jacket", eyes: "Normal" },
];

const filtersData = [
    { id: "status", name: "Status", options: ["Buy Now", "On Auction", "New"] },
    { id: "background", name: "Background", options: ["Cosmic Void", "Neon City", "Deep Space", "Toxic Green"] },
    { id: "clothing", name: "Clothing", options: ["Space Suit", "Cyber Jacket", "Holographic", "None"] },
    { id: "eyes", name: "Eyes", options: ["Laser", "Cyborg", "Hypnotic", "Normal"] },
];

export default function CollectionPage() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState("items");
    const [expandedFilterGroups, setExpandedFilterGroups] = useState(["Status", "Background"]);


    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [visibleCount, setVisibleCount] = useState(10);

    const toggleFilterGroup = (groupName) => {
        setExpandedFilterGroups(prev =>
            prev.includes(groupName)
                ? prev.filter(f => f !== groupName)
                : [...prev, groupName]
        );
    };

    const handleCheckboxToggle = (groupId, option) => {
        setSelectedFilters(prev => {
            const exists = prev.find(f => f.groupId === groupId && f.option === option);
            if (exists) {
                return prev.filter(f => !(f.groupId === groupId && f.option === option));
            } else {
                return [...prev, { groupId, option }];
            }
        });

        setVisibleCount(10);
    };

    const clearAllFilters = () => {
        setSelectedFilters([]);
        setSearchQuery("");
        setVisibleCount(10);
    };

    const removeFilter = (groupId, option) => {
        setSelectedFilters(prev => prev.filter(f => !(f.groupId === groupId && f.option === option)));
        setVisibleCount(10);
    };


    const filteredNFTs = useMemo(() => {
        let result = nfts;


        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            result = result.filter(nft =>
                nft.name.toLowerCase().includes(query) ||
                nft.id.includes(query)
            );
        }


        if (selectedFilters.length > 0) {

            const groupedFilters = selectedFilters.reduce((acc, curr) => {
                if (!acc[curr.groupId]) acc[curr.groupId] = [];
                acc[curr.groupId].push(curr.option);
                return acc;
            }, {});


            result = result.filter(nft => {
                return Object.entries(groupedFilters).every(([groupId, options]) => {
                    return options.includes(nft[groupId]);
                });
            });
        }

        return result;
    }, [searchQuery, selectedFilters]);


    const displayedNFTs = filteredNFTs.slice(0, visibleCount);
    const hasMore = visibleCount < filteredNFTs.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 10);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 font-sans">
            <Header />
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">


                <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">AlienNFT Genesis</h1>
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#00FF88]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <p className="text-white/60 mb-1 max-w-2xl">By <span className="text-white font-medium hover:text-[#00FF88] cursor-pointer transition-colors">Alien Labs</span></p>
                        <p className="text-white/70 max-w-3xl text-sm sm:text-base leading-relaxed mt-4">
                            The Genesis collection of 10,000 uniquely generated alien avatars exploring the Ethereum blockchain.
                            Each alien grants access to the mothership, exclusive drops, and community governance.
                        </p>
                    </div>


                    <div className="flex flex-wrap gap-4 sm:gap-8 bg-[#111] p-4 sm:p-6 rounded-2xl border border-white/5 w-full md:w-auto shrink-0">
                        {Object.entries(collectionStats).map(([key, value]) => (
                            <div key={key} className="flex flex-col gap-1 pr-4 sm:pr-8 border-r border-white/10 last:border-0 last:pr-0">
                                <span className="text-white/50 text-xs sm:text-sm font-semibold uppercase tracking-wider">{key}</span>
                                <span className="text-lg sm:text-xl font-bold">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="w-full border-b border-white/10 mb-6"></div>


            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex justify-between items-center flex-wrap gap-4">
                <div className="flex gap-6 sm:gap-10 overflow-x-auto scrollbar-hide">
                    {['items', 'activity', 'analytics'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-base sm:text-lg font-bold capitalize transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
                        >
                            {tab}
                            {activeTab === tab && (
                                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#00FF88] rounded-t-full shadow-[0_-2px_10px_rgba(0,255,136,0.5)]"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Filter Toggle & Search */}
                <div className="flex gap-3 h-12 w-full sm:w-auto">
                    <div className="flex-1 sm:flex-initial flex items-center bg-[#111] border border-white/10 rounded-xl px-4 py-2 sm:w-64 focus-within:border-white/30 transition-colors">
                        <svg className="w-5 h-5 text-white/50 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by name or #"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setVisibleCount(10);
                            }}
                            className="bg-transparent border-none outline-none text-sm w-full text-white placeholder:text-white/40 focus:ring-0"
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery("")} className="text-white/40 hover:text-white ml-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        )}
                    </div>

                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="flex items-center justify-center w-12 h-12 bg-[#111] border border-white/10 rounded-xl hover:bg-white/5 transition-colors group shrink-0"
                    >
                        <svg className={`w-5 h-5 text-white/80 transition-transform duration-300 ${isSidebarOpen ? '' : 'rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </button>
                </div>
            </div>


            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-8 transition-all duration-300">


                {isSidebarOpen && (
                    <div className="hidden lg:block w-72 shrink-0 animate-in slide-in-from-left-8 duration-300">
                        <div className="sticky top-24 flex flex-col gap-2">
                            {filtersData.map((filter) => {
                                const isExpanded = expandedFilterGroups.includes(filter.name);
                                return (
                                    <div key={filter.id} className="border border-white/10 rounded-xl bg-[#0a0a0a] overflow-hidden transition-all">
                                        <button
                                            onClick={() => toggleFilterGroup(filter.name)}
                                            className="w-full flex justify-between items-center p-5 hover:bg-white/[0.02] transition-colors"
                                        >
                                            <span className="font-bold">{filter.name}</span>
                                            <svg className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {isExpanded && (
                                            <div className="p-5 pt-0 flex flex-col gap-3 border-t border-white/5 bg-[#080808]">
                                                {filter.options.map((option) => {
                                                    const isChecked = selectedFilters.some(f => f.groupId === filter.id && f.option === option);

                                                    return (
                                                        <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isChecked ? 'bg-[#00FF88] border-[#00FF88]' : 'border-white/20 group-hover:border-[#00FF88]'}`}>
                                                                <svg className={`w-3 h-3 text-black transition-opacity ${isChecked ? 'opacity-100' : 'opacity-0'} group-hover:opacity-30`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                                </svg>
                                                            </div>
                                                            <input
                                                                type="checkbox"
                                                                className="hidden"
                                                                checked={isChecked}
                                                                onChange={() => handleCheckboxToggle(filter.id, option)}
                                                            />
                                                            <span className={`text-sm transition-colors ${isChecked ? 'text-white font-medium' : 'text-white/70 group-hover:text-white'}`}>{option}</span>
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}


                <div className={`flex-1 transition-all duration-300 ${activeTab === 'items' ? 'opacity-100 block' : 'opacity-0 hidden'}`}>


                    {(selectedFilters.length > 0 || searchQuery) && (
                        <div className="flex gap-2 mb-6 flex-wrap items-center">
                            <span className="text-white/40 text-sm mr-2">{filteredNFTs.length} Results</span>

                            {selectedFilters.map((filter, idx) => (
                                <div key={idx} onClick={() => removeFilter(filter.groupId, filter.option)} className="px-4 py-2 rounded-full bg-white/10 text-white/90 text-xs font-semibold flex items-center gap-2 cursor-pointer hover:bg-white/15 transition-colors border border-white/5 hover:border-white/20">
                                    <span className="opacity-50 font-normal">{filtersData.find(f => f.id === filter.groupId)?.name}:</span> {filter.option}
                                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </div>
                            ))}

                            {(selectedFilters.length > 0 || searchQuery) && (
                                <button onClick={clearAllFilters} className="text-[#00FF88] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors px-3 py-2">Clear All</button>
                            )}
                        </div>
                    )}

                    {filteredNFTs.length > 0 ? (
                        <>
                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
                                {displayedNFTs.map((nft, idx) => (
                                    <div
                                        key={idx}
                                        className="group relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-[#00FF88]/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,255,136,0.1)]"
                                    >

                                        <div className="relative aspect-square w-full overflow-hidden bg-[#1a1a1a]">
                                            <Image
                                                src={nft.image}
                                                alt={nft.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {nft.status !== 'Buy Now' && (
                                                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider text-white border border-white/10">
                                                    {nft.status}
                                                </div>
                                            )}

                                            <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                                                <button className="w-full py-2.5 bg-[#00FF88] text-black font-bold text-sm rounded-lg hover:bg-white transition-colors focus:ring-2 focus:ring-[#00FF88]/50 focus:outline-none">
                                                    {nft.status === 'Buy Now' ? 'Buy Now' : 'Place Bid'}
                                                </button>
                                            </div>
                                        </div>


                                        <div className="p-4 sm:p-5">
                                            <h3 className="font-bold text-base sm:text-lg mb-1 group-hover:text-[#00FF88] transition-colors truncate">{nft.name}</h3>
                                            <div className="flex justify-between items-end mt-3">
                                                <div className="flex flex-col">
                                                    <span className="text-white/40 text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-1">Price</span>
                                                    <div className="flex items-center gap-1.5">
                                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white/70" viewBox="0 0 320 512" fill="currentColor">
                                                            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                                                        </svg>
                                                        <span className="font-bold">{nft.price}</span>
                                                    </div>
                                                </div>
                                                <span className="text-white/30 text-xs truncate max-w-[50%] text-right">Last: --</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            {hasMore && (
                                <div className="mt-12 flex justify-center pb-20">
                                    <button
                                        onClick={handleLoadMore}
                                        className="px-10 py-4 bg-transparent border-2 border-white/10 text-white rounded-full font-bold hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-95"
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 border border-white/5 rounded-2xl bg-white/[0.01]">
                            <svg className="w-12 h-12 text-white/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <h3 className="text-xl font-bold mb-2">No items found</h3>
                            <p className="text-white/50 text-center max-w-md">We couldn't find any NFTs matching your active filters. Try clearing some filters or searching a different term.</p>
                            <button onClick={clearAllFilters} className="mt-6 px-6 py-2 bg-[#00FF88] text-black font-semibold rounded-lg hover:bg-white transition-colors">
                                Clear Filters
                            </button>
                        </div>
                    )}

                </div>
                {activeTab !== 'items' && (
                    <div className="flex-1 flex flex-col items-center justify-center py-32 opacity-100 animate-in fade-in duration-500 border border-white/5 rounded-2xl bg-white/[0.01]">
                        <svg className="w-16 h-16 text-white/20 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <h3 className="text-2xl font-bold mb-2 capitalize">{activeTab} Data Unavailable</h3>
                        <p className="text-white/50 text-center max-w-sm">Global metrics and {activeTab} data will populate here once there is enough decentralized network activity.</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
