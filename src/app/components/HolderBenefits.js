"use client";

export default function HolderBenefits() {
    const benefits = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Future Airdrops",
            description: "All Genesis holders automatically qualify for future ecosystem airdrops, including companion NFTs and limited edition gear."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "$ALIEN Staking",
            description: "Stake your NFTs in the Mothership vault to yield daily $ALIEN tokens, usable across our entire digital marketplace."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Exclusive Community",
            description: "Gain access to the Alpha channel in our Discord, featuring daily market analysis, whitelist spots, and project networking."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
            ),
            title: "Metaverse Ready",
            description: "Your 2D Avatar comes with a fully rigged 3D counterpart, ready to be exported and played in partnered Metaverse worlds."
        }
    ];

    return (
        <section className="relative bg-[#000000] py-15 px-6 sm:px-10 overflow-hidden">
           
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00FF88] opacity-[0.02] blur-[150px] rounded-[100%] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-16 sm:mb-24 relative">
                    <span className="text-[#00FF88] text-sm font-bold tracking-[0.3em] uppercase mb-4 block opacity-80">
                        Join The Invasion
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white/80 uppercase tracking-tight mx-auto max-w-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        Holder <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-white/70">Benefits</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#0a0a0a] border border-white/5 p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#00FF88]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden rounded-md"
                        >
                        
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF88]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[50px] rounded-full pointer-events-none" />
                            <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00FF88] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 z-20"></span>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00FF88] mb-8 group-hover:scale-110 group-hover:border-[#00FF88]/40 group-hover:bg-[#00FF88]/10 transition-all duration-500 shadow-[0_0_15px_rgba(0,255,136,0)] group-hover:shadow-[0_0_20px_rgba(0,255,136,0.15)]">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-black text-white/80 mb-4 tracking-wide uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00FF88] transition-all duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-[#888888] leading-relaxed text-[15px] group-hover:text-[#aaaaaa] transition-colors duration-300">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
