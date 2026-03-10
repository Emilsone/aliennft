"use client";

import { useState } from "react";
import Image from "next/image";
import Header from '../components/Header';
import Footer from '../components/Footer';

const marketplaceItems = [
    {
        id: "am-01",
        name: "Nebula Glider #01",
        collection: "Stellar Vehicles",
        description: "A customized nebula glider used by intergalactic smugglers to traverse the dense dust clouds of the Orion arm. Features enhanced stealth capabilities and a twin-ion propulsion unit.",
        image: "/avatar-1.png",
        price: "1.25",
        status: "Auction",
        rarity: "Legendary",
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
        price: "4.50",
        status: "Mint",
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
        price: "0.85",
        status: "Auction",
        rarity: "Epic",
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
        price: "0.30",
        status: "Mint",
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
        price: "2.10",
        status: "Auction",
        rarity: "Legendary",
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
        price: "5.00",
        status: "Mint",
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
        price: "0.55",
        status: "Mint",
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
        price: "1.75",
        status: "Auction",
        rarity: "Rare",
        traits: [
            { type: "Vision", value: "Thermal" },
            { type: "UI", value: "Augmented" },
            { type: "Installation", value: "Surgical" }
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

const topCollectors = [
    { rank: 1, name: "Zorblax Prime", handle: "@zorblax", volume: "1,245.50", nfts: 42, avatar: "/team/david.png", trend: "+12.4%" },
    { rank: 2, name: "Neon Stalker", handle: "@neonstalker", volume: "982.10", nfts: 18, avatar: "/avatar-2.png", trend: "+5.2%" },
    { rank: 3, name: "Cosmic Voyager", handle: "@voyager", volume: "756.80", nfts: 56, avatar: "/team/nara.png", trend: "-2.1%" },
    { rank: 4, name: "Quantum Phantom", handle: "@qphantom", volume: "512.45", nfts: 12, avatar: "/avatar-4.png", trend: "+18.7%" },
    { rank: 5, name: "Star Forge", handle: "@starforge", volume: "445.00", nfts: 8, avatar: "/avatar-5.png", trend: "+1.5%" }
];

export default function AlienMarketPage() {
    const [selectedItem, setSelectedItem] = useState(null);

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

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {marketplaceItems.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className="group cursor-pointer relative bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-[#00FF88]/30 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,255,136,0.1)] flex flex-col"
                        >
                            <div className="relative aspect-square w-full overflow-hidden bg-[#1a1a1a]">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Status Badge */}
                                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-wider text-white border border-white/10 flex items-center gap-2">
                                    {item.status === 'Auction' ? (
                                        <><span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse"></span> On Auction</>
                                    ) : (
                                        <><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Minting</>
                                    )}
                                </div>

                                {/* Rarity Badge */}
                                <div className={`absolute top-3 left-3 px-2 py-1 rounded text-[10px] uppercase font-bold tracking-wider border ${rarityColors[item.rarity]} backdrop-blur-md`}>
                                    {item.rarity}
                                </div>
                            </div>

                            <div className="p-5 flex flex-col flex-1">
                                <p className="text-[#00FF88] text-[10px] uppercase font-bold tracking-widest mb-1">{item.collection}</p>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-[#00FF88] transition-colors line-clamp-1">{item.name}</h3>
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

                                    <span className="text-white/30 text-xs font-medium">
                                        Click to view
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Top Collectors Leaderboard Section */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-16">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 border-b border-white/10 pb-4 gap-4">
                    <div>
                        <span className="text-[#00FF88] text-sm font-bold tracking-[0.3em] uppercase block mb-2">Elite Roster</span>
                        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">Top Collectors</h2>
                    </div>
                    <button className="text-white/50 hover:text-[#00FF88] text-sm font-bold uppercase tracking-wider transition-colors flex items-center gap-2 pb-1">
                        View All
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>

                <div className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[600px]">
                            <thead>
                                <tr className="border-b border-white/5 bg-black/40">
                                    <th className="p-4 sm:p-6 text-white/40 text-xs font-bold uppercase tracking-wider font-mono w-20">Rank</th>
                                    <th className="p-4 sm:p-6 text-white/40 text-xs font-bold uppercase tracking-wider font-mono">Collector</th>
                                    <th className="p-4 sm:p-6 text-white/40 text-xs font-bold uppercase tracking-wider font-mono">Volume</th>
                                    <th className="p-4 sm:p-6 text-white/40 text-xs font-bold uppercase tracking-wider font-mono">Owned</th>
                                    <th className="p-4 sm:p-6 text-white/40 text-xs font-bold uppercase tracking-wider font-mono text-right">Trend</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topCollectors.map((collector) => (
                                    <tr key={collector.rank} className="border-b border-white/5 last:border-0 hover:bg-white/[0.04] transition-colors group">
                                        <td className="p-4 sm:p-6 text-white/60 font-mono text-sm">#{collector.rank}</td>
                                        <td className="p-4 sm:p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/10 group-hover:border-[#00FF88]/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] shrink-0">
                                                    <Image src={collector.avatar} alt={collector.name} fill className="object-cover" />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white group-hover:text-[#00FF88] transition-colors text-sm sm:text-base">{collector.name}</p>
                                                    <p className="text-[#00FF88]/60 text-xs font-mono mt-0.5">{collector.handle}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 sm:p-6">
                                            <div className="flex items-center gap-1.5 font-bold text-sm sm:text-base">
                                                <svg className="w-3.5 h-3.5 text-white/50" viewBox="0 0 320 512" fill="currentColor">
                                                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                                                </svg>
                                                {collector.volume}
                                                <span className="text-white/40 text-[10px] uppercase font-semibold tracking-wider ml-1">ETH</span>
                                            </div>
                                        </td>
                                        <td className="p-4 sm:p-6 font-medium text-white/80 text-sm sm:text-base">{collector.nfts}</td>
                                        <td className="p-4 sm:p-6 text-right font-medium">
                                            <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] uppercase font-bold tracking-wider ${collector.trend.startsWith('+') ? 'text-green-400 bg-green-400/10 border border-green-400/20' : 'text-red-400 bg-red-400/10 border border-red-400/20'}`}>
                                                {collector.trend.startsWith('+') ? (
                                                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m-7 7l7-7 7 7"></path></svg>
                                                ) : (
                                                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7l-7 7-7-7"></path></svg>
                                                )}
                                                {collector.trend}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
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
                                            {selectedItem.status === 'Auction' ? 'Current Bid' : 'Mint Price'}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-[#00FF88]" viewBox="0 0 320 512" fill="currentColor">
                                                <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                                            </svg>
                                            <span className="text-3xl font-black">{selectedItem.price}</span>
                                        </div>
                                    </div>
                                    {selectedItem.status === 'Auction' && (
                                        <div className="text-right">
                                            <p className="text-white/50 text-[10px] uppercase tracking-wider mb-1">Ends In</p>
                                            <p className="font-mono text-sm font-bold text-white/90">05h 22m 10s</p>
                                        </div>
                                    )}
                                </div>
                                <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 ${selectedItem.status === 'Auction'
                                    ? "bg-transparent text-[#00FF88] border-2 border-[#00FF88] hover:bg-[#00FF88] hover:text-black hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                                    : "bg-[#00FF88] text-black border-2 border-[#00FF88] hover:bg-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                    }`}>
                                    {selectedItem.status === 'Auction' ? 'Place Bid' : 'Mint Now'}
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
