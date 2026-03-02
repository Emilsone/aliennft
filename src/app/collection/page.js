"use client";
import Image from 'next/image'


export default function MetaTimeSection() {
    return (
        <div className="min-h-screen text-white/80  bg-[#000000]/80 border border-[rgba(0,255,136,0.15)]/60flex items-center justify-center p-8 text">
            <div
                className="w-ful"
                style={{
                    maxWidth: "1580px",
                    border: "1.5px solid #c8c8c8",
                    borderLeft: "9px solid #1a1a1a",
                    borderRadius: "3px",
                }}
            >
                <div className="flex" style={{ minHeight: "500px" }}>
                    <div
                        className="flex flex-col justify-center text-white/80 "
                        style={{
                            width: "45%",
                            padding: "52px 60px 52px 52px",
                            borderRight: "1.5px solid #d8d8d8",
                        }}
                    >

                        {/* Main heading */}
                        <h1
                            style={{
                                fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
                                fontWeight: 900,
                                fontSize: "40px",
                                lineHeight: 1.12,
                                letterSpacing: "-0.5px",

                                marginBottom: "30px",
                            }}
                        >
                            ALIENNFT STORY
                        </h1>

                        {/* ── Section 1 ── */}
                        <div style={{ marginBottom: "28px" }}>
                            {/* Bullet + subheading row */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    marginBottom: "14px",
                                }}
                            >

                                <div
                                    style={{
                                        width: "14px",
                                        height: "14px",
                                        borderRadius: "50%",
                                        backgroundColor: "#FFFFFF",
                                        flexShrink: 0,
                                    }}
                                />

                                <div
                                    style={{
                                        width: "26px",
                                        height: "2.5px",
                                        backgroundColor: "#FFFFFF",
                                        flexShrink: 0,
                                    }}
                                />

                                <span
                                    style={{
                                        fontWeight: 900,
                                        fontSize: "15.5px",
                                        lineHeight: 1,
                                    }}
                                    className="fi"
                                >
                                    Our Mission
                                </span>
                            </div>

                            <p
                                style={{

                                    fontSize: "13.5px",
                                    lineHeight: "1.72",
                                    marginBottom: "14px",
                                }}
                                className="fi"
                            >
                                Our collection’s priority is to reward NFT holders by developing utilities they can use in their current everyday life. Not in a hypothetical future.
                            </p>


                        </div>



                        {/* ── Section 2 ── */}
                        <div>

                            <div className="flex gap-16 mb-10 flex-wrap fi">
                                <div>
                                    <p className="text-[#F5F5F5]  text-sm mb-1">Total Item</p>
                                    <p className="text-white/85 text-4xl font-bold">2240+</p>
                                </div>

                                <div>
                                    <p className="text-[#F5F5F5] text-sm mb-1">Profiles Whitelisted</p>
                                    <p className="text-white/85 text-4xl font-bold">1000+</p>
                                </div>
                            </div>

                            <button className="border border-e[#21E786] text-[#21E786] px-6 py-3 text-sm font-semibold hover:bg-[#21E786] hover:text-black transition">
                                READ MORE
                            </button>



                        </div>
                    </div>


                    <div
                        style={{
                            width: "55%",
                            position: "relative",

                            overflow: "hidden",
                        }}
                    >

                        <div style={{
                            position: 'absolute', bottom: "25%", left: 0, right: 0,
                            display: 'flex', alignItems: 'flex-end', justifyContent: 'center'
                        }}>
                            <div style={{ position: 'relative', width: '390px', height: '470px' }}>
                                <Image src="/team/nara.png" alt="Ape 1" fill
                                    style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
                            </div>
                            <div style={{ position: 'relative', width: '390px', height: '470px', marginLeft: '-20px' }}>
                                <Image src="/team/nara.png" alt="Ape 2" fill
                                    style={{ objectFit: 'contain', objectPosition: 'bottom' }} priority />
                            </div>
                        </div>
                    </div>
                    {/* end right panel */}

                </div>
            </div>
        </div>
    );
}

