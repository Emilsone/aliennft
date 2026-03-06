import Image from "next/image";

export default function MusicCards() {
    const cards = [
        {
            title: "SKISIRS #02",
            artist: "Tycho",
            image: "/avatar-1.png",
        },
        {
            title: "SKELATON #01",
            artist: "Tycho",
            image: "/avatar-2.png",
        },
        {
            title: "Stake #07",
            artist: "Tycho",
            image: "/avatar-3.png",
        },
        {
            title: "Jlake #01",
            artist: "Tycho",
            image: "/avatar-4.png",
        },
        {
            title: "SKIman #02",
            artist: "Tycho",
            image: "/avatar-5.png",
        },
        {
            title: "Jeila #04",
            artist: "Tycho",
            image: "/avatar-6.png",
        },
        {
            title: "Junkie #04",
            artist: "Tycho",
            image: "/avatar-7.png",
        },
        {
            title: "Platone #05",
            artist: "Tycho",
            image: "/avatar-8.png",
        },
    ];

    return (
        <main className="relative grid place-items-center min-h-screen bg-[#000000] py-24 overflow-hidden">

            <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#00FF88] opacity-[0.02] blur-[100px] rounded-full pointer-events-none agp" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00FF88] opacity-[0.03] blur-[120px] rounded-full pointer-events-none agp" style={{ animationDelay: "2s" }} />

            <div className="w-full max-w-[1400px] px-6 md:px-10 z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 py-2">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 uppercase tracking-tight text-center lg:text-left drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Hot Collection
                    </h1>
                    <div className="hidden md:flex items-center gap-3">
                        <span className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#00FF88]"></span>
                        <span className="text-[#00FF88] text-sm font-semibold tracking-widest uppercase">Latest Drops</span>
                    </div>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#0a0a0a] border border-[#1a1a1a] shadow-lg relative group overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-[#00FF88]/30 cursor-pointer rounded-sm"
                        >

                            <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#00FF88] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 z-20"></span>
                            <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00FF88] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 z-20"></span>


                            <div className="relative w-full h-80 overflow-hidden">
                                <div className="absolute inset-0 bg-[#00FF88]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter group-hover:brightness-110"
                                />
                            </div>


                            <div className="relative p-6 bg-gradient-to-t from-black via-black/95 to-transparent mt-[-60px] z-10 backdrop-blur-sm border-t border-white/5 group-hover:border-[#00FF88]/20 transition-colors duration-300">
                                <p className="text-[#00FF88] text-[11px] font-bold uppercase tracking-widest mb-1 opacity-80 group-hover:opacity-100">{card.artist}</p>
                                <h3 className="text-white/80 text-xl font-black uppercase tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00FF88] group-hover:to-white transition-all duration-300">
                                    {card.title}
                                </h3>

                                <div className="mt-4 flex justify-between items-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <span className="text-[#888888] text-xs">Current Bid</span>
                                    <span className="text-white font-bold text-sm">2.4 ETH</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <div className="mt-16 flex justify-center">
                    <button className="bp relative overflow-hidden group border-[#00FF88] bg-transparent text-white hover:text-black">
                        <span className="relative z-10 transition-colors duration-300">EXPLORE MORE</span>
                        <div className="absolute inset-0 h-full w-full bg-[#00FF88] transform scale-y-0 origin-bottom transition-transform duration-300 ease-in group-hover:scale-x-100 z-0"></div>
                    </button>
                </div>
            </div>
        </main>
    );
}
