"use client";
import Image from 'next/image'

export default function StorySection() {
    return (
        <div className="px-4 py-10 sm:px-8 sm:py-14 md:p-20 bg-[#000000]">
            <div
                className="w-full mx-auto"
                style={{
                    maxWidth: "1480px",
                    border: "1.3px solid rgba(0,255,136,0.15)",
                    borderLeft: "9px solid rgba(0,255,136,0.15)",
                    borderRadius: "3px",
                }}
            >
                <div className="flex flex-col md:flex-row" style={{ minHeight: "500px" }}>

                    <div
                        className="flex flex-col justify-center text-white/80 w-full md:w-[45%] border-b md:border-b-0 md:border-r border-[rgba(0,255,136,0.15)]"
                        style={{
                            padding: "clamp(28px, 5vw, 52px) clamp(20px, 5vw, 60px) clamp(28px, 5vw, 52px) clamp(20px, 4vw, 52px)",
                        }}
                    >
                        <h1
                            style={{
                                fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
                                fontWeight: 900,
                                fontSize: "clamp(22px, 5vw, 40px)",
                                lineHeight: 1.12,
                                letterSpacing: "-0.5px",
                                marginBottom: "30px",
                            }}
                        >
                            ALIENNFT STORY
                        </h1>

                        <div style={{ marginBottom: "28px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                                <div style={{ width: "14px", height: "14px", borderRadius: "50%", backgroundColor: "#FFFFFF", flexShrink: 0 }} />
                                <div style={{ width: "26px", height: "2.5px", backgroundColor: "#FFFFFF", flexShrink: 0 }} />
                                <span style={{ fontWeight: 900, fontSize: "15.5px", lineHeight: 1 }} className="fi">
                                    Our Mission
                                </span>
                            </div>
                            <p style={{ fontSize: "clamp(12px, 1.8vw, 13.5px)", lineHeight: "1.72" }} className="fi">
                                Our collection's priority is to reward NFT holders by developing utilities they can use in their current everyday life. Not in a hypothetical future.
                            </p>
                        </div>

                        <div>
                            <div className="flex gap-8 sm:gap-16 mb-8 sm:mb-10 flex-wrap fi">
                                <div>
                                    <p className="text-[#F5F5F5] text-sm mb-1">Total Item</p>
                                    <p className="text-white/85 text-3xl sm:text-4xl font-bold">2240+</p>
                                </div>
                                <div>
                                    <p className="text-[#F5F5F5] text-sm mb-1">Profiles Whitelisted</p>
                                    <p className="text-white/85 text-3xl sm:text-4xl font-bold">1000+</p>
                                </div>
                            </div>
                            <button className="border border-[#21E786] text-[#21E786] px-6 py-3 text-sm font-semibold hover:bg-[#21E786] hover:text-black transition">
                                READ MORE
                            </button>
                        </div>
                    </div>

                    <div
                        className="relative w-full md:w-[55%] overflow-hidden"
                        style={{ minHeight: "300px" }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                bottom: "6%",
                                left: 0,
                                right: 0,
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                    width: "clamp(200px, 40vw, 570px)",
                                    height: "clamp(240px, 48vw, 500px)",
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