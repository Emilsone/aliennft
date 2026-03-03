"use client";
import Image from 'next/image'

export default function StorySection() {
    return (
        <div className="relative px-4 py-10 sm:px-8 sm:py-14 md:p-20 bg-[#000000] overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00FF88] opacity-[0.03] blur-[100px] rounded-full pointer-events-none agp" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00FF88] opacity-[0.02] blur-[120px] rounded-full pointer-events-none agp" style={{ animationDelay: "1s" }} />

            <div
                className="relative w-full mx-auto bg-black/40 backdrop-blur-sm shadow-[0_0_40px_rgba(0,255,136,0.03)] ch z-10 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,136,0.08)]"
                style={{
                    maxWidth: "1480px",
                    border: "1px solid rgba(0,255,136,0.15)",
                    boxShadow: "inset 0 0 20px rgba(0,255,136,0.02), 0 10px 30px rgba(0,0,0,0.5)",
                    borderRadius: "8px",
                    overflow: "hidden"
                }}
            >
                {/* Glowing Left Border */}
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#00FF88] shadow-[0_0_15px_#00FF88]" />

                <div className="flex flex-col md:flex-row relative z-10" style={{ minHeight: "500px" }}>
                    <div
                        className="flex flex-col justify-center text-white/80 w-full md:w-[45%] border-b md:border-b-0 md:border-r border-[rgba(0,255,136,0.1)] relative"
                        style={{
                            padding: "clamp(28px, 5vw, 52px) clamp(20px, 5vw, 60px) clamp(28px, 5vw, 52px) clamp(30px, 4vw, 52px)",
                        }}
                    >
                        <h1
                            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 "
                            style={{
                                fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
                                fontWeight: 900,
                                fontSize: "clamp(28px, 5vw, 48px)",
                                lineHeight: 1.12,
                                letterSpacing: "-0.5px",
                                marginBottom: "30px",
                                textShadow: "0 0 40px rgba(255,255,255,0.1)"
                            }}
                        >
                            ALIENNFT STORY
                        </h1>

                        <div style={{ marginBottom: "32px" }}>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF88] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00FF88]"></span>
                                </span>
                                <span style={{ fontWeight: 700, fontSize: "16px", lineHeight: 1, letterSpacing: "1px", textTransform: "uppercase" }} className="fi text-[#00FF88]">
                                    Our Mission
                                </span>
                            </div>
                            <p style={{ fontSize: "clamp(14px, 1.8vw, 15px)", lineHeight: "1.8" }} className="fi text-white/70">
                                Our collection's priority is to reward NFT holders by developing utilities they can use in their current everyday life. Not in a hypothetical future.
                            </p>
                        </div>

                        <div>
                            <div className="flex gap-8 sm:gap-16 mb-8 sm:mb-12 flex-wrap fi">
                                <div className="group">
                                    <p className="text-[#00FF88] text-sm mb-1 font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">Total Item</p>
                                    <p className="text-white/80 text-3xl sm:text-5xl font-bold tracking-tight text-shadow-sm">2240+</p>
                                </div>
                                <div className="group">
                                    <p className="text-[#00FF88] text-sm mb-1 font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">Profiles Whitelisted</p>
                                    <p className="text-white/80 text-3xl sm:text-5xl font-bold tracking-tight text-shadow-sm">1000+</p>
                                </div>
                            </div>
                            <button className="bp w-fit relative overflow-hidden group">
                                <span className="relative z-10 group-hover:text-[#00FF88] transition-colors duration-300">READ MORE</span>
                                <div className="absolute inset-0 h-full w-full bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></div>
                            </button>
                        </div>
                    </div>

                    <div
                        className="relative w-full md:w-[55%] overflow-hidden hero-bg"
                        style={{ minHeight: "350px" }}
                    >
                        {/* Decorative Grid and Elements */}
                        <div className="absolute inset-0 hero-grid opacity-30 mix-blend-screen" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                        <div
                            style={{
                                position: "absolute",
                                bottom: "0",
                                left: 0,
                                right: 0,
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                                zIndex: 5
                            }}
                        >
                            <div
                                className="transition-transform duration-700 hover:scale-105"
                                style={{
                                    position: "relative",
                                    width: "clamp(250px, 45vw, 600px)",
                                    height: "clamp(280px, 50vw, 550px)",
                                    filter: "drop-shadow(0 -10px 30px rgba(0,255,136,0.15))"
                                }}
                            >
                                <Image
                                    src="/team/nara.png"
                                    alt="Ape"
                                    fill
                                    style={{ objectFit: "contain", objectPosition: "bottom" }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}