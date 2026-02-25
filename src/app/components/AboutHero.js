"use client";

function ClockIcon() {
    return (
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    );
}

function EthereumIcon() {
    return (
        <svg width="13" height="20" viewBox="0 0 13 20" fill="none">
            <path d="M6.5 0L0 10.2L6.5 13.6L13 10.2L6.5 0Z" fill="#627EEA" />
            <path d="M6.5 13.6L0 10.2L6.5 20L13 10.2L6.5 13.6Z" fill="#627EEA" fillOpacity="0.7" />
            <path d="M6.5 0V8.7L13 10.2L6.5 0Z" fill="#627EEA" fillOpacity="0.55" />
            <path d="M6.5 0V8.7L0 10.2L6.5 0Z" fill="#627EEA" fillOpacity="0.85" />
            <path d="M6.5 10.6V13.6L0 10.2L6.5 10.6Z" fill="#627EEA" fillOpacity="0.55" />
            <path d="M6.5 10.6V13.6L13 10.2L6.5 10.6Z" fill="#627EEA" fillOpacity="0.8" />
        </svg>
    );
}

function FourPointStar({ size = 16, color = "#555" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
            <path d="M12 2 L13.8 10.2 L22 12 L13.8 13.8 L12 22 L10.2 13.8 L2 12 L10.2 10.2 Z" />
        </svg>
    );
}

const CARD_WIDTH = 280;
const SIDE_PADDING = 14;
const IMAGE_WIDTH = CARD_WIDTH - SIDE_PADDING * 2;
const IMAGE_HEIGHT = 290;
const OVERFLOW_TOP = 86;

const STATS = [
    ["432K+", "Collections"],
    ["200K+", "Artists"],
    ["10K+", "Community"],
];

function NFTCard({ image, title, likes, artist, avatar, bid, cardStyle }) {
    return (
        <div className="absolute" style={cardStyle}>

            <div
                className="absolute overflow-hidden rounded-2xl z-[2]"
                style={{
                    top: -OVERFLOW_TOP,
                    left: SIDE_PADDING,
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
            >
                <img src={image} alt={title} className="block w-full h-full object-cover object-top" />


                <div
                    className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-white text-[11px] font-medium tracking-widest backdrop-blur-md"
                    style={{ background: "rgba(0,0,0,0.52)", fontFamily: "'Courier New', monospace" }}
                >
                    <ClockIcon />
                    08 : 21 : 23
                </div>
            </div>


            <div
                className="relative z-[1] bg-white rounded-[20px] px-4 pb-[18px]"
                style={{
                    width: CARD_WIDTH,
                    paddingTop: IMAGE_HEIGHT - OVERFLOW_TOP + 14,
                    boxShadow: "0 28px 70px rgba(0,0,0,0.5)",
                }}
            >
                <div className="flex justify-between items-center mb-2.5">
                    <span className="font-extrabold text-base text-gray-900 tracking-tight">{title}</span>
                    <span className="text-xs text-gray-400">{likes}</span>
                </div>

                <div className="flex items-center gap-2 mb-3.5">
                    <img src={avatar} alt={artist} className="w-[22px] h-[22px] rounded-full object-cover" />
                    <span className="text-[12.5px] text-gray-500">{artist}</span>
                </div>

                <div className="h-px bg-gray-100 mb-3" />

                <div className="flex justify-between items-center">
                    <span className="text-[12.5px] text-gray-400 font-medium">Current Bid</span>
                    <div className="flex items-center gap-1.5">
                        <EthereumIcon />
                        <span className="font-extrabold text-sm text-gray-900">{bid}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

function NFTCardMobile({ image, title, likes, artist, avatar, bid }) {
    return (
        <div className="relative w-full max-w-[300px] mx-auto" style={{ paddingTop: OVERFLOW_TOP }}>

            {/* Image overflow */}
            <div
                className="absolute left-[14px] overflow-hidden rounded-2xl z-[2]"
                style={{
                    top: 0,
                    width: IMAGE_WIDTH,
                    height: IMAGE_HEIGHT,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                }}
            >
                <img src={image} alt={title} className="block w-full h-full object-cover object-top" />
                <div
                    className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-white text-[11px] font-medium tracking-widest backdrop-blur-md"
                    style={{ background: "rgba(0,0,0,0.52)", fontFamily: "'Courier New', monospace" }}
                >
                    <ClockIcon />
                    08 : 21 : 23
                </div>
            </div>


            <div
                className="relative z-[1] bg-white rounded-[20px] px-4 pb-[18px]"
                style={{
                    width: CARD_WIDTH,
                    paddingTop: IMAGE_HEIGHT - OVERFLOW_TOP + 14,
                    boxShadow: "0 28px 70px rgba(0,0,0,0.5)",
                    marginTop: OVERFLOW_TOP,
                }}
            >
                <div className="flex justify-between items-center mb-2.5">
                    <span className="font-extrabold text-base text-gray-900 tracking-tight">{title}</span>
                    <span className="text-xs text-gray-400">{likes}</span>
                </div>
                <div className="flex items-center gap-2 mb-3.5">
                    <img src={avatar} alt={artist} className="w-[22px] h-[22px] rounded-full object-cover" />
                    <span className="text-[12.5px] text-gray-500">{artist}</span>
                </div>
                <div className="h-px bg-gray-100 mb-3" />
                <div className="flex justify-between items-center">
                    <span className="text-[12.5px] text-gray-400 font-medium">Current Bid</span>
                    <div className="flex items-center gap-1.5">
                        <EthereumIcon />
                        <span className="font-extrabold text-sm text-gray-900">{bid}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
function SuperRareBadge({ style }) {
    return (
        <div className="absolute w-28 h-28" style={style}>
            <div className="absolute inset-0 rounded-full border border-gray-600" />
            <svg viewBox="0 0 112 112" className="absolute inset-0 w-full h-full badge-spin">
                <defs>
                    <path id="arc" d="M56,56 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
                </defs>
                <text fill="white" style={{ fontSize: 14.2, fontWeight: 900, letterSpacing: "3.8px" }}>
                    <textPath href="#arc">ALIEN NFT ARTWORK • </textPath>
                </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-[7px] rotate-45 flex items-center justify-center bg-white">
                    <div className="-rotate-45">
                        <EthereumIcon size={28} color="#1a1a1a" />
                    </div>
                </div>
            </div>
        </div>
    );
}
function CurlArrow({ style }) {
    return (
        <svg
            width="110" height="65" viewBox="0 0 110 65" fill="none"
            className="absolute opacity-75"
            style={style}
        >
            <path d="M12 56 Q4 64 9 55 Q14 46 20 55" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M18 55 Q40 18 78 32 Q90 36 98 42" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M91 35 L98 42 L91 47" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
    );
}
export default function NFTLanding() {

    const APE1 = "/aper.jpeg";
    const APE2 = "/ape.png";
    const AV1 = "/team/nara.png";
    const AV2 = "/team/nara.png";

    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
                <div className="absolute inset-0 hero-grid" />
                <div className="absolute inset-0 hero-glow" />


                <main className="hidden lg:flex relative z-10 items-start w-full max-w-[1400px] mx-auto px-16 pt-7 pb-20">

                    <div className="flex-none w-[555px] pt-5">

                        <div className="relative pointer-events-none">
                            <span className="absolute -top-3.5 right-[110px]"><FourPointStar size={13} color="#4b5563" /></span>
                            <span className="absolute top-[18px] right-[60px]"><FourPointStar size={10} color="#374151" /></span>
                            <span className="absolute -top-0.5 right-[62px]"><FourPointStar size={21} color="#4b5563" /></span>
                        </div>
                        <h1
                            className="fc text-white/80 font-extrabold uppercase leading-none tracking-wide  mb-5 letter-spacing-2"
                            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                        >
                            ABOUT <span className="text-[#00FF88]">ALIENNFT</span><br />UNIVERSE
                        </h1>

                        <p className="pc text-white/70 text-[14.5px] leading-relaxed max-w-[430px] mb-[34px]">
                            We are a team of visionary creators, blockchain architects, and digital artists
                            building the most fashionable alien civilisation on the ETH blockchain.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-14">
                            <button className=" bp  text-[#111] font-bold text-[15px] uppercase tracking-[0.05em] px-8 py-[13px] rounded-md border-none cursor-pointer">
                                JOIN THE COLONY
                            </button>
                            <button className=" bo  text-white font-bold text-[15px] uppercase tracking-[0.05em] px-8 py-[13px] rounded-md border border-gray-600 cursor-pointer">
                                VIEW COLLECTION
                            </button>
                        </div>

                        <div className="flex gap-14">
                            {STATS.map(([value, label]) => (
                                <div key={label}>
                                    <div className="text-[34px] font-black text-white leading-none tracking-[-1px]">{value}</div>
                                    <div className="text-[13px] text-gray-500 mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative flex-1 h-[660px] ml-6 pt-10">
                        <NFTCard
                            image={APE1} title="3 Eye Ape" likes="21,5K Likes"
                            artist="@n_alisson" avatar={AV1} bid="8.12 ETH"
                            cardStyle={{ top: 60, left: 20, zIndex: 10 }}
                        />
                        <NFTCard
                            image={APE2} title="King Ape" likes="21,5K Likes"
                            artist="@nm_esnon" avatar={AV2} bid="8.12 ETH"
                            cardStyle={{ top: 300, left: 320, zIndex: 20 }}
                        />
                        <SuperRareBadge style={{ bottom: 28, left: 10, zIndex: 25 }} />
                        <CurlArrow style={{ bottom: 44, left: 118, zIndex: 5 }} />
                    </div>

                </main>
                {/* moblie menu code section */}
                <main className="flex lg:hidden relative z-10 flex-col items-center w-full max-w-[600px] mx-auto px-6 pt-14 pb-16 gap-10">
                    <div className="text-center w-full">
                        <h1
                            className="text-white font-extrabold uppercase leading-[1.06] tracking-[-1.5px] mb-4"
                            style={{ fontSize: "clamp(2.4rem, 10vw, 3.8rem)" }}
                        >
                            ABOUT <span className="text-[#00FF88]">ALIENNFT</span><br />UNIVERSE
                        </h1>

                        <p className="text-white/70 text-sm leading-relaxed max-w-[400px] mx-auto mb-7">
                            We are a team of visionary creators, blockchain architects, and digital artists
                            building the most fashionable alien civilisation on the ETH blockchain.
                        </p>

                        <div className=" flex flex-wrap justify-center gap-3 mb-10">
                            <button className="bp text-[#111] font-bold text-[13px] uppercase tracking-[0.05em] px-6 py-3 rounded-xl border-none cursor-pointer">
                                JOIN THE COLONY
                            </button>
                            <button className=" bo text-white font-bold text-[13px] uppercase tracking-[0.05em] px-6 py-3 rounded-xl border border-gray-600 cursor-pointer">
                                VIEW COLLECTION
                            </button>
                        </div>


                        <div className="flex justify-center gap-8">
                            {STATS.map(([value, label]) => (
                                <div key={label} className="text-center">
                                    <div className="text-[26px] font-black text-white leading-none tracking-tight">{value}</div>
                                    <div className="text-[12px] text-gray-500 mt-1">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-24 w-full pb-8">
                        <NFTCardMobile
                            image={APE1} title="3 Eye Ape" likes="21,5K Likes"
                            artist="@n_alisson" avatar={AV1} bid="8.12 ETH"
                        />
                        <NFTCardMobile
                            image={APE2} title="King Ape" likes="21,5K Likes"
                            artist="@nm_esnon" avatar={AV2} bid="8.12 ETH"
                        />
                    </div>

                </main>

            </section>
        </>
    );
}