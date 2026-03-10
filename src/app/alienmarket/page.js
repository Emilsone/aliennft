"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadersBoard from '../components/LeadersBoard';

// ✅ Separate named export — NOT default
export function CountdownTimer({ endTime, isDetail = false }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isUrgent, setIsUrgent] = useState(false);

    useEffect(() => {
        if (!endTime) return;

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const hoursTotal = distance / (1000 * 60 * 60);
            setIsUrgent(hoursTotal < 1 && distance > 0);

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, [endTime]);

    if (!endTime) return null;

    if (isDetail) {
        return (
            <div className="text-right">
                <p className={`text-[10px] uppercase tracking-wider mb-1 ${isUrgent ? 'text-red-400' : 'text-white/50'}`}>Ends In</p>
                <p className={`font-mono text-sm font-bold ${isUrgent ? 'text-red-500 animate-[pulse_1s_ease-in-out_infinite]' : 'text-white/90'}`}>
                    {timeLeft.days > 0 && `${timeLeft.days}d `}
                    {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
                </p>
            </div>
        );
    }

    return (
        <div className={`absolute bottom-3 right-3 backdrop-blur-md px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider border flex items-center gap-1.5 transition-colors ${isUrgent ? 'bg-red-500/20 text-red-500 border-red-500/50' : 'bg-black/70 text-white border-white/10'}`}>
            <svg className={`w-3 h-3 ${isUrgent ? 'animate-[pulse_1s_ease-in-out_infinite]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-mono pt-0.5">
                {timeLeft.days > 0 && `${timeLeft.days}d `}
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
        </div>
    );
}

// ✅ Data and constants outside the component — that's fine
const marketplaceItems = [
    {
        id: "am-01",
        name: "Nebula Glider #01",
        collection: "Stellar Vehicles",
        description: "A customized nebula glider used by intergalactic smugglers to traverse the dense dust clouds of the Orion arm. Features enhanced stealth capabilities and a twin-ion propulsion unit.",
        image: "/avatar-1.png",
        price: 1.25,
        status: "Auction",
        rarity: "Legendary",
        endTimeOffset: 1000 * 60 * 45,
        traits: [
            { type: "Engine", value: "Twin-Ion" },
            { type: "Chassis", value: "Stealth" },
            { type: "Propulsion", value: "Hyper-drive" },
            { type: "Condition", value: "Mint" }
        ]
    },
    {
        id: "am-02",
        name: "Cosmic Relic #88",
        collection: "Ancient Artifacts",
        description: "An ancient relic from the forgotten civilization of Xylar. It pulses with an unknown energy source and is said to grant the bearer visions of the future.",
        image: "/avatar-2.png",
        price: 4.50,
        status: "Buy Now",
        rarity: "Mythic",
        traits: [
            { type: "Origin", value: "Xylar" },
            { type: "Energy", value: "Unknown" },
            { type: "Age", value: "Eons" }
        ]
    },
    {
        id: "am-03",
        name: "Void Trooper Armor",
        collection: "Galactic Armory",
        description: "Heavy assault armor designed for surviving the harsh conditions of deep space combat. Equipped with experimental energy shielding.",
        image: "/avatar-3.png",
        price: 0.85,
        status: "Auction",
        rarity: "Epic",
        endTimeOffset: 1000 * 60 * 60 * 25,
        traits: [
            { type: "Material", value: "Titanium Alloy" },
            { type: "Shielding", value: "Energy" },
            { type: "Class", value: "Heavy" },
            { type: "Visor", value: "Tactical UI" }
        ]
    },
    {
        id: "am-04",
        name: "Plasma Cutter V2",
        collection: "Utility Tools",
        description: "A high-powered plasma cutter originally designed for asteroid mining, later modified for personal defense. Extremely dangerous in close quarters.",
        image: "/avatar-4.png",
        price: 0.30,
        status: "Buy Now",
        rarity: "Rare",
        traits: [
            { type: "Power", value: "High Yield" },
            { type: "Range", value: "Close" },
            { type: "Safety", value: "Disabled" }
        ]
    },
    {
        id: "am-05",
        name: "Starborn Pet: Zorblax",
        collection: "Exotic Companions",
        description: "A rare and highly intelligent creature from the swamps of Vega 5. Zorblaxes are known for their loyalty and ability to sense emotional states.",
        image: "/avatar-5.png",
        price: 2.10,
        status: "Auction",
        rarity: "Legendary",
        endTimeOffset: 1000 * 60 * 15,
        traits: [
            { type: "Species", value: "Zorblax" },
            { type: "Habitat", value: "Swamp" },
            { type: "Temperament", value: "Loyal" }
        ]
    },
    {
        id: "am-06",
        name: "Quantum Data Drive",
        collection: "Cybernetics",
        description: "A high-capacity data storage unit containing classified blueprints for a planetary terraforming engine.",
        image: "/avatar-6.png",
        price: 5.00,
        status: "Sold",
        rarity: "Epic",
        traits: [
            { type: "Capacity", value: "Yottabytes" },
            { type: "Encryption", value: "Quantum" },
            { type: "Contents", value: "Classified" }
        ]
    },
    {
        id: "am-07",
        name: "Holographic Emitter",
        collection: "Tech Gadgets",
        description: "A portable device capable of projecting highly realistic, interactive 3D holograms for communication or deception.",
        image: "/avatar-7.png",
        price: 0.55,
        status: "Buy Now",
        rarity: "Uncommon",
        traits: [
            { type: "Resolution", value: "16K" },
            { type: "Battery", value: "Nuclear Micro-cell" },
            { type: "Features", value: "Interactive" }
        ]
    },
    {
        id: "am-08",
        name: "Cyborg Eye Implant",
        collection: "Cybernetics",
        description: "Advanced optical implant offering thermal imaging, vital scanning, and augmented reality overlays. A popular upgrade among bounty hunters.",
        image: "/avatar-8.png",
        price: 1.75,
        status: "Auction",
        rarity: "Rare",
        endTimeOffset: 1000 * 60 * 60 * 3,
        traits: [
            { type: "Vision", value: "Thermal" },
            { type: "UI", value: "Augmented" },
            { type: "Installation", value: "Surgical" }
        ]
    },
    {
        id: "am-09",
        name: "Ion Blaster Mk IV",
        collection: "Galactic Armory",
        description: "Standard issue energy weapon for planetary militia. High rate of fire, subject to overheating.",
        image: "/avatar-1.png",
        price: 0.40,
        status: "Buy Now",
        rarity: "Uncommon",
        traits: [
            { type: "Weapon Type", value: "Energy" },
            { type: "Fire Rate", value: "High" }
        ]
    },
    {
        id: "am-10",
        name: "Void Crystal",
        collection: "Ancient Artifacts",
        description: "A glowing crystal found floating perfectly still in deep space. It slowly drains heat from everything within a 5-meter radius.",
        image: "/avatar-2.png",
        price: 8.50,
        status: "Auction",
        rarity: "Mythic",
        endTimeOffset: 1000 * 60 * 5,
        traits: [
            { type: "Origin", value: "Unknown Void" },
            { type: "Property", value: "Endothermic" }
        ]
    },
    {
        id: "am-11",
        name: "Scrap Speeder",
        collection: "Stellar Vehicles",
        description: "Cobbled together from decommissioned fighter jets. Fast, unpredictable, and completely uninsured.",
        image: "/avatar-3.png",
        price: 0.20,
        status: "Sold",
        rarity: "Common",
        traits: [
            { type: "Speed", value: "Reckless" },
            { type: "Safety", value: "None" }
        ]
    },
    {
        id: "am-12",
        name: "Nebula Core",
        collection: "Ancient Artifacts",
        description: "Captured essence of a dying star, contained in a magnetic bottle.",
        image: "/avatar-4.png",
        price: 2.80,
        status: "Buy Now",
        rarity: "Legendary",
        traits: [
            { type: "Energy output", value: "Stellar" }
        ]
    }
];

const rarityColors = {
    Common: "text-gray-400 bg-gray-400/10 border-gray-400/20",
    Uncommon: "text-green-400 bg-green-400/10 border-green-400/20",
    Rare: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    Epic: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    Legendary: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    Mythic: "text-red-400 bg-red-400/10 border-red-400/20"
};

// ✅ DEFAULT EXPORT wrapping ALL hooks, logic, and JSX
export default function AlienMarket() {

    // ✅ All hooks are now correctly inside the component
    const [selectedItem, setSelectedItem] = useState(null);
    const [isMounted, setIsMounted] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [priceRange, setPriceRange] = useState("All");
    const [rarityFilter, setRarityFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [sortBy, setSortBy] = useState("Recently Listed");
    const [viewMode, setViewMode] = useState("grid");
    const [visibleCount, setVisibleCount] = useState(8);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const hydratedItems = useMemo(() => {
        return marketplaceItems.map(item => ({
            ...item,
            endTime: item.endTimeOffset ? Date.now() + item.endTimeOffset : null
        }));
    }, []);

    const filteredAndSortedItems = useMemo(() => {
        let result = [...hydratedItems];

        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(item =>
                item.name.toLowerCase().includes(q) ||
                item.collection.toLowerCase().includes(q)
            );
        }

        if (priceRange === "Under 1 ETH") {
            result = result.filter(item => item.price < 1);
        } else if (priceRange === "1-5 ETH") {
            result = result.filter(item => item.price >= 1 && item.price <= 5);
        } else if (priceRange === "Over 5 ETH") {
            result = result.filter(item => item.price > 5);
        }

        if (rarityFilter !== "All") {
            result = result.filter(item => item.rarity === rarityFilter);
        }

        if (statusFilter !== "All") {
            result = result.filter(item => item.status === statusFilter);
        }

        if (sortBy === "Price: Low-High") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === "Price: High-Low") {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === "Ending Soon") {
            const withTime = result.filter(i => i.endTime).sort((a, b) => a.endTime - b.endTime);
            const withoutTime = result.filter(i => !i.endTime);
            result = [...withTime, ...withoutTime];
        }

        return result;
    }, [hydratedItems, searchQuery, priceRange, rarityFilter, statusFilter, sortBy]);

    const displayedItems = filteredAndSortedItems.slice(0, visibleCount);
    const hasMore = visibleCount < filteredAndSortedItems.length;

    const resetFilters = () => {
        setSearchQuery("");
        setPriceRange("All");
        setRarityFilter("All");
        setStatusFilter("All");
        setSortBy("Recently Listed");
        setVisibleCount(8);
    };

    // ✅ Single return inside the component
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 font-sans">
            <Header />

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="flex flex-col gap-4 mb-10">
                    <div className="flex items-center gap-3">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">Alien Market</h1>
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#00FF88]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                    </div>
                    <p className="text-white/60 text-sm sm:text-base max-w-2xl leading-relaxed">
                        Discover, bid, and mint exclusive alien-themed assets, vehicles, and artifacts across the cosmos.
                        Expand your inventory and prepare for the ultimate intergalactic journey.
                    </p>
                </div>

                {/* Search + Filter Bar */}
                <div className="bg-[#111] border border-white/10 rounded-xl p-4 sm:p-5 mb-8 flex flex-col lg:flex-row gap-4 lg:items-center">
                    <div className="relative flex-1">
                        <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search assets, items, collections..."
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(8); }}
                            className="w-full bg-white/5 border border-white/5 rounded-lg pl-12 pr-4 py-2.5 text-sm outline-none focus:border-[#00FF88]/50 focus:bg-white/10 transition-colors"
                        />
                    </div>

                    <div className="flex flex-wrap sm:flex-nowrap gap-3 items-center">
                        <select
                            value={statusFilter}
                            onChange={(e) => { setStatusFilter(e.target.value); setVisibleCount(8); }}
                            className="flex-1 lg:flex-none uppercase text-xs font-bold tracking-wider bg-white/5 border border-white/5 rounded-lg px-4 py-3 outline-none focus:border-[#00FF88]/50 appearance-none cursor-pointer text-white/80"
                        >
                            <option value="All">All Status</option>
                            <option value="Buy Now">Buy Now</option>
                            <option value="Auction">On Auction</option>
                            <option value="Sold">Sold</option>
                        </select>
                        <select
                            value={priceRange}
                            onChange={(e) => { setPriceRange(e.target.value); setVisibleCount(8); }}
                            className="flex-1 lg:flex-none uppercase text-xs font-bold tracking-wider bg-white/5 border border-white/5 rounded-lg px-4 py-3 outline-none focus:border-[#00FF88]/50 appearance-none cursor-pointer text-white/80"
                        >
                            <option value="All">Any Price</option>
                            <option value="Under 1 ETH">Under 1 ETH</option>
                            <option value="1-5 ETH">1 - 5 ETH</option>
                            <option value="Over 5 ETH">Over 5 ETH</option>
                        </select>
                        <select
                            value={rarityFilter}
                            onChange={(e) => { setRarityFilter(e.target.value); setVisibleCount(8); }}
                            className="flex-1 lg:flex-none uppercase text-xs font-bold tracking-wider bg-white/5 border border-white/5 rounded-lg px-4 py-3 outline-none focus:border-[#00FF88]/50 appearance-none cursor-pointer text-white/80"
                        >
                            <option value="All">Any Rarity</option>
                            <option value="Common">Common</option>
                            <option value="Uncommon">Uncommon</option>
                            <option value="Rare">Rare</option>
                            <option value="Epic">Epic</option>
                            <option value="Legendary">Legendary</option>
                            <option value="Mythic">Mythic</option>
                        </select>

                        {(searchQuery || statusFilter !== "All" || priceRange !== "All" || rarityFilter !== "All") && (
                            <button
                                onClick={resetFilters}
                                className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors border border-transparent hover:border-red-400/20"
                            >
                                Reset
                            </button>
                        )}
                    </div>
                </div>

                {/* Sort & View Toggle */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">{filteredAndSortedItems.length} Assets Found</p>

                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <select
                            value={sortBy}
                            onChange={(e) => { setSortBy(e.target.value); setVisibleCount(8); }}
                            className="flex-1 sm:flex-none uppercase text-xs font-bold tracking-wider bg-transparent border-none text-white/70 hover:text-white cursor-pointer outline-none text-right appearance-none"
                        >
                            <option value="Recently Listed">Sort: Recently Listed</option>
                            <option value="Ending Soon">Sort: Ending Soon</option>
                            <option value="Price: Low-High">Sort: Price (Low - High)</option>
                            <option value="Price: High-Low">Sort: Price (High - Low)</option>
                        </select>

                        <div className="flex bg-[#111] rounded-lg p-1 border border-white/10 shrink-0">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white/80'}`}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white/10 text-white shadow-sm' : 'text-white/40 hover:text-white/80'}`}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cards Grid / List */}
                {displayedItems.length === 0 ? (
                    <div className="bg-[#111] rounded-2xl border border-white/5 p-16 flex flex-col items-center justify-center text-center">
                        <svg className="w-12 h-12 text-white/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-bold mb-2">No Items Found</h3>
                        <p className="text-white/40 max-w-md mx-auto mb-6">We couldn't find any items matching your current filters. Try adjusting your search or clearing filters.</p>
                        <button onClick={resetFilters} className="bg-[#00FF88] text-black font-bold uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-white transition-colors">
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    <>
                        {viewMode === 'grid' ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {displayedItems.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => setSelectedItem(item)}
                                        className="group cursor-pointer relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-[#00FF88]/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,255,136,0.1)] flex flex-col"
                                    >
                                        <div className="relative aspect-square w-full overflow-hidden bg-[#1a1a1a]">
                                            <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />

                                            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-wider text-white border border-white/10 flex items-center gap-2">
                                                {item.status === 'Auction' && <><span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-[pulse_2s_ease-in-out_infinite]"></span> On Auction</>}
                                                {item.status === 'Buy Now' && <><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Buy Now</>}
                                                {item.status === 'Sold' && <><span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Sold</>}
                                            </div>

                                            <div className={`absolute top-3 left-3 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider border ${rarityColors[item.rarity]} backdrop-blur-md`}>
                                                {item.rarity}
                                            </div>

                                            {item.status === 'Auction' && isMounted && <CountdownTimer endTime={item.endTime} />}
                                        </div>

                                        <div className="p-5 flex flex-col flex-1">
                                            <p className="text-[#00FF88] text-[10px] uppercase font-bold tracking-widest mb-1">{item.collection}</p>
                                            <div className="w-full truncate pr-4">
                                                <h3 className="font-bold text-lg mb-2 group-hover:text-[#00FF88] transition-colors truncate">{item.name}</h3>
                                            </div>
                                            <p className="text-white/50 text-xs line-clamp-2 mb-4 flex-1">{item.description}</p>

                                            <div className="flex justify-between items-end mt-auto pt-4 border-t border-white/5">
                                                <div className="flex flex-col">
                                                    <span className="text-white/40 text-[10px] uppercase font-semibold tracking-wider mb-1">Price</span>
                                                    <div className="flex items-center gap-1.5">
                                                        <svg className="w-3 h-3 text-white/70" viewBox="0 0 320 512" fill="currentColor">
                                                            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                                                        </svg>
                                                        <span className="font-bold text-lg">{item.price}</span>
                                                    </div>
                                                </div>
                                                <span className="text-white/30 text-[10px] font-bold uppercase tracking-wider">
                                                    {item.status === 'Sold' ? 'Unavailable' : 'Click to view'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {displayedItems.map((item) => (
                                    <div key={item.id} onClick={() => setSelectedItem(item)} className="group cursor-pointer bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#00FF88]/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,255,136,0.1)] flex flex-col sm:flex-row items-center gap-0 sm:gap-6 p-4">
                                        <div className="relative w-full sm:w-48 h-48 sm:h-48 shrink-0 rounded-xl overflow-hidden bg-[#1a1a1a] mb-4 sm:mb-0">
                                            <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                            {item.status === 'Auction' && isMounted && <CountdownTimer endTime={item.endTime} />}
                                            <div className={`absolute top-2 left-2 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider border ${rarityColors[item.rarity]} backdrop-blur-md`}>
                                                {item.rarity}
                                            </div>
                                        </div>
                                        <div className="flex-1 flex flex-col w-full">
                                            <div className="flex justify-between items-start mb-2 gap-4">
                                                <div className="w-full sm:w-auto overflow-hidden">
                                                    <p className="text-[#00FF88] text-[10px] uppercase font-bold tracking-widest mb-1">{item.collection}</p>
                                                    <h3 className="font-bold text-xl mb-2 group-hover:text-[#00FF88] transition-colors truncate">{item.name}</h3>
                                                </div>
                                                <div className="flex-col items-end shrink-0 hidden sm:flex">
                                                    <span className="text-white/40 text-[10px] uppercase font-semibold tracking-wider mb-1">Price</span>
                                                    <div className="flex items-center gap-1.5">
                                                        <svg className="w-4 h-4 text-[#00FF88]" viewBox="0 0 320 512" fill="currentColor"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" /></svg>
                                                        <span className="font-black text-xl">{item.price}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-white/50 text-xs sm:text-sm line-clamp-2 mb-4 max-w-2xl">{item.description}</p>

                                            <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-white/5 gap-4 sm:gap-0">
                                                <div className="flex flex-wrap gap-2">
                                                    {item.traits.slice(0, 3).map((t, i) => (
                                                        <span key={i} className="text-[10px] uppercase tracking-wider font-semibold border border-white/10 bg-white/5 rounded-md px-2 py-1 text-white/70">
                                                            {t.value}
                                                        </span>
                                                    ))}
                                                    {item.traits.length > 3 && (
                                                        <span className="text-[10px] border border-white/10 bg-white/5 rounded-md px-2 py-1 text-white/50">+{item.traits.length - 3}</span>
                                                    )}
                                                </div>

                                                <div className="flex justify-between w-full sm:w-auto items-center sm:hidden mb-2">
                                                    <span className="text-white/40 text-[10px] uppercase font-semibold tracking-wider">Price</span>
                                                    <div className="flex items-center gap-1.5">
                                                        <svg className="w-3 h-3 text-[#00FF88]" viewBox="0 0 320 512" fill="currentColor"><path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" /></svg>
                                                        <span className="font-bold text-base">{item.price}</span>
                                                    </div>
                                                </div>

                                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/5 ${item.status === 'Auction' ? 'text-[#00FF88]' : item.status === 'Buy Now' ? 'text-blue-400' : 'text-red-400'}`}>
                                                    {item.status === 'Buy Now' ? 'Available' : item.status === 'Auction' ? 'Live Auction' : 'Sold Out'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Pagination / Load More */}
                        <div className="mt-12 flex flex-col items-center justify-center gap-4">
                            <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
                                Showing {displayedItems.length} of {filteredAndSortedItems.length} items
                            </p>

                            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-2">
                                <div
                                    className="h-full bg-gradient-to-r from-transparent to-[#00FF88] transition-all duration-500 rounded-full"
                                    style={{ width: `${(displayedItems.length / filteredAndSortedItems.length) * 100}%` }}
                                ></div>
                            </div>

                            {hasMore && (
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 4)}
                                    className="px-8 py-3 bg-transparent border-2 border-[#00FF88] text-[#00FF88] font-bold uppercase tracking-widest rounded-xl hover:bg-[#00FF88] hover:text-black transition-colors focus:ring-4 focus:ring-[#00FF88]/20 group"
                                >
                                    Load More
                                    <svg className="w-4 h-4 inline-block ml-2 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>

            {/* Top Collectors Leaderboard Section */}
            <div>
                <LeadersBoard />
            </div>

            {/* Modal Detail View */}
            {selectedItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedItem(null)}></div>
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in zoom-in-95 duration-200">

                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute z-10 top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-white/10 rounded-full border border-white/10 text-white/70 hover:text-white transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        {/* Image Panel */}
                        <div className="w-full md:w-1/2 relative bg-[#111] min-h-[300px] md:min-h-full">
                            <Image
                                src={selectedItem.image}
                                alt={selectedItem.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
                        </div>

                        {/* Content Panel */}
                        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col">
                            <div className="flex gap-2 mb-3">
                                <span className="bg-[#00FF88]/10 text-[#00FF88] px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider border border-[#00FF88]/20">
                                    {selectedItem.collection}
                                </span>
                                <span className={`px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider border ${rarityColors[selectedItem.rarity]}`}>
                                    {selectedItem.rarity}
                                </span>
                            </div>

                            <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">{selectedItem.name}</h2>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">{selectedItem.description}</p>

                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {selectedItem.traits.map((trait, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/5 rounded-lg p-3">
                                        <p className="text-white/40 text-[10px] uppercase font-semibold tracking-wider mb-1">{trait.type}</p>
                                        <p className="font-medium text-sm text-white/90 truncate">{trait.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto bg-[#111] rounded-xl p-5 border border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF88]/5 rounded-full blur-2xl pointer-events-none"></div>
                                <div className="flex justify-between items-end mb-5">
                                    <div>
                                        <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                                            {selectedItem.status === 'Auction' ? 'Current Bid' : selectedItem.status === 'Buy Now' ? 'Mint Price' : 'Last Sale'}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-[#00FF88]" viewBox="0 0 320 512" fill="currentColor">
                                                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                                            </svg>
                                            <span className="text-3xl font-black">{selectedItem.price}</span>
                                        </div>
                                    </div>
                                    {selectedItem.status === 'Auction' && isMounted && (
                                        <CountdownTimer endTime={selectedItem.endTime} isDetail={true} />
                                    )}
                                </div>
                                <button
                                    disabled={selectedItem.status === 'Sold'}
                                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 ${selectedItem.status === 'Sold'
                                        ? "bg-white/5 text-white/30 border-2 border-white/10 cursor-not-allowed"
                                        : selectedItem.status === 'Auction'
                                            ? "bg-transparent text-[#00FF88] border-2 border-[#00FF88] hover:bg-[#00FF88] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                                            : "bg-[#00FF88] text-black border-2 border-[#00FF88] hover:bg-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                        }`}>
                                    {selectedItem.status === 'Auction' ? 'Place Bid' : selectedItem.status === 'Buy Now' ? 'Mint Now' : 'Sold Out'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}