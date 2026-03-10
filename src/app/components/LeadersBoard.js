import Image from "next/image";

const topCollectors = [
    { rank: 1, name: "Zorblax Prime", handle: "@zorblax", volume: "1,245.50", nfts: 42, avatar: "/team/david.png", trend: "+12.4%" },
    { rank: 2, name: "Neon Stalker", handle: "@neonstalker", volume: "982.10", nfts: 18, avatar: "/avatar-2.png", trend: "+5.2%" },
    { rank: 3, name: "Cosmic Voyager", handle: "@voyager", volume: "756.80", nfts: 56, avatar: "/team/nara.png", trend: "-2.1%" },
    { rank: 4, name: "Quantum Phantom", handle: "@qphantom", volume: "512.45", nfts: 12, avatar: "/avatar-4.png", trend: "+18.7%" },
    { rank: 5, name: "Star Forge", handle: "@starforge", volume: "445.00", nfts: 8, avatar: "/avatar-5.png", trend: "+1.5%" }
];

export default function LeadersBoard() {
    return (
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 mb-20 mt-20">
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
                <div className="overflow-x-auto scrollbar-hide">
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
    );
}
