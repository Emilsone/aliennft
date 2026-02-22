"use client";

import Link from "next/link";

function cx(...classes) {
    return classes.filter(Boolean).join(" ");
}

const phases = [
    {
        id: "phase1",
        num: "01",
        label: "GENESIS",
        status: "complete",
        date: "Q1 – Q2 · 2023",
        completion: 100,
        desc: "The origin mission. From concept to code — establishing the foundation of the NFTAlien universe. Smart contracts deployed, art generated, the colony founded.",
        missions: [
            { state: "done", num: "01", title: "Smart Contract Deployment", desc: "ERC-721A contract audited and deployed on Ethereum mainnet with gas optimisation." },
            { state: "done", num: "02", title: "2525 Aliens Minted", desc: "Full collection minted and revealed. All traits randomised on-chain via Chainlink VRF." },
            { state: "done", num: "03", title: "Whitelist Program", desc: "1000+ wallets whitelisted. Oversubscribed within 48 hours of announcement." },
            { state: "done", num: "04", title: "Discord Colony Launch", desc: "Community of 10,000+ holders assembled across Discord and Twitter in 30 days." },
        ],
    },
    {
        id: "phase2",
        num: "02",
        label: "COLONY",
        status: "complete",
        date: "Q3 – Q4 · 2023",
        completion: 100,
        desc: "Building the infrastructure of the colony. Staking, token rewards, and the first wave of luxury brand partnerships that set NFTAlien apart from every other project.",
        missions: [
            { state: "done", num: "01", title: "$ALIEN Token Launch", desc: "Native utility token deployed. Staking pools opened for all 2525 holders." },
            { state: "done", num: "02", title: "Merch Drop #1", desc: "Exclusive physical merchandise unlocked for top-tier holders. Sold out in 6 hours." },
            { state: "done", num: "03", title: "24 BINABOX Partners", desc: "Ecosystem partnerships signed including wallets, DeFi protocols, and launchpads." },
            { state: "done", num: "04", title: "DAO Governance", desc: "On-chain voting launched. First community treasury proposal passed with 78% approval." },
        ],
    },
    {
        id: "phase3",
        num: "03",
        label: "EXPANSION",
        status: "active",
        date: "Q1 – Q3 · 2024",
        completion: 55,
        desc: "The colony expands its reach. Cross-chain migration, luxury brand collaborations, and the first real-world NFTAlien activations are underway.",
        missions: [
            { state: "done", num: "01", title: "Cross-Chain Bridge", desc: "ETH ↔ Polygon bridge live. Holders can move assets across chains with zero fees." },
            { state: "done", num: "02", title: "Luxury Collab #1", desc: "First luxury fashion house partnership signed. Limited co-branded drop in production." },
            { state: "active", num: "03", title: "3D Avatar System", desc: "Interactive 3D versions of each alien being rendered. VRM file exports for metaverse use." },
            { state: "active", num: "04", title: "IRL Event — NYC", desc: "First physical holder event planned in New York. Exclusive access for top 500 holders." },
        ],
    },
    {
        id: "phase4",
        num: "04",
        label: "DOMINION",
        status: "locked",
        date: "Q4 · 2024 — BEYOND",
        completion: 0,
        desc: "The final mission phase. Details are locked pending Phase 03 completion. Holders who complete all prior missions will receive early access to classified information.",
        missions: [
            { state: "locked", num: "01", title: "Project Nebula", desc: "A new collection expansion introducing rare legendary-tier aliens with unique utility perks." },
            { state: "locked", num: "02", title: "AlienVerse Platform", desc: "Dedicated metaverse platform built exclusively for NFTAlien holders and their 3D avatars." },
            { state: "locked", num: "03", title: "Global IRL Tour", desc: "Multi-city holder events across 5 continents. Physical alien art installations." },
            { state: "locked", num: "04", title: "Token Exchange Listing", desc: "$ALIEN token listed on tier-1 centralised exchanges. Liquidity pools expanded." },
        ],
    },
];

function StatusBadge({ status }) {
    if (status === "complete")
        return (
            <span className="inline-block font-mono text-[0.65rem] tracking-[3px] uppercase px-3 py-1 rounded-sm mb-5 bg-[rgba(0,255,136,0.12)] text-[#00FF88] border border-[rgba(0,255,136,0.3)]">
                ✓ COMPLETE
            </span>
        );
    if (status === "active")
        return (
            <span className="inline-block font-mono text-[0.65rem] tracking-[3px] uppercase px-3 py-1 rounded-sm mb-5 bg-[rgba(255,200,0,0.1)] text-[#FFD700] border border-[rgba(255,215,0,0.3)]">
                ⬡ ACTIVE
            </span>
        );
    return (
        <span className="inline-block font-mono text-[0.65rem] tracking-[3px] uppercase px-3 py-1 rounded-sm mb-5 bg-[rgba(255,255,255,0.04)] text-[rgba(255,255,255,0.3)] border border-[#1a1a1a]">
            ⬡ LOCKED
        </span>
    );
}

function CompletionBar({ pct, status }) {
    const fillBg =
        status === "complete" ? "#00FF88" : status === "active" ? "#FFD700" : "rgba(255,255,255,0.15)";
    return (
        <div className="mt-6">
            <div className="flex justify-between font-mono text-[0.65rem] text-[rgba(255,255,255,0.3)] mb-2">
                <span>COMPLETION</span>
                <span>{pct}%</span>
            </div>
            <div className="h-[3px] bg-[#1a1a1a] rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${pct}%`, background: fillBg }}
                />
            </div>
        </div>
    );
}

function MissionCheck({ state }) {
    if (state === "done")
        return (
            <span className="absolute right-3.5 top-3.5 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[0.6rem] bg-[#00FF88] text-black">
                ✓
            </span>
        );
    if (state === "active")
        return (
            <span className="absolute right-3.5 top-3.5 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[0.5rem] bg-[rgba(255,215,0,0.2)] text-[#FFD700] border border-[rgba(255,215,0,0.4)]">
                ▶
            </span>
        );
    return (
        <span className="absolute right-3.5 top-3.5 w-[18px] h-[18px] rounded-full flex items-center justify-center text-[0.55rem] bg-[#1a1a1a] text-[rgba(255,255,255,0.2)]">
            ⬡
        </span>
    );
}

function MissionItem({ mission }) {
    const { state, num, title, desc } = mission;

    const accentColor =
        state === "done" ? "#00FF88" : state === "active" ? "#FFD700" : "#222";

    const titleColor =
        state === "done" ? "#fff" : state === "active" ? "#FFD700" : "rgba(255,255,255,0.25)";

    return (
        <div className="group relative flex flex-col h-full bg-[#0f0f0f] border border-[#1a1a1a] rounded-[4px] overflow-hidden pl-12 pr-10 py-5 transition-colors duration-200 hover:border-[rgba(0,255,136,0.3)]">
            {/* left accent bar */}
            <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: accentColor }} />

            {/* item number */}
            <span className="absolute left-4 top-5 font-mono text-[0.6rem] text-[rgba(255,255,255,0.2)] tracking-wide">
                {num}
            </span>

            <MissionCheck state={state} />

            {/* title */}
            <div
                className="font-['Barlow_Condensed'] font-bold text-[1rem] uppercase tracking-wide mb-2 leading-tight"
                style={{ color: titleColor }}
            >
                {title}
            </div>

            {/* description */}
            {state === "locked" ? (
                <div className="flex-1 overflow-hidden" style={{ margin: "0 -2px", padding: "0 2px" }}>
                    <p
                        className="text-[0.78rem] leading-relaxed text-white/85 select-none pointer-events-none"
                        style={{ filter: "blur(4px)" }}
                    >
                        {desc}
                    </p>
                </div>
            ) : (
                <p className="flex-1 text-[14px] leading-relaxed text-white/85">
                    {desc}
                </p>
            )}
        </div>
    );
}

function Phase({ phase, isEven }) {
    const { id, num, label, status, date, completion, desc, missions } = phase;

    const labelColor =
        status === "complete" ? "#00FF88" : status === "active" ? "#FFD700" : "rgba(255,255,255,0.2)";

    return (
        <div id={id} className="relative py-24 border-b border-[#1a1a1a] last:border-b-0">

            {/* ghost number */}
            <div
                className={cx(
                    "absolute font-['Barlow_Condensed'] font-black leading-none select-none pointer-events-none top-1/2 -translate-y-1/2 text-[rgba(255,255,255,0.012)]",
                    isEven ? "-left-10" : "-right-10"
                )}
                style={{ fontSize: "30vw" }}
            >
                {num}
            </div>

            {/* layout grid */}
            <div
                className={cx(
                    "relative z-10 grid items-start gap-16",
                    isEven
                        ? "grid-cols-1 lg:grid-cols-[1fr_260px]"
                        : "grid-cols-1 lg:grid-cols-[260px_1fr]"
                )}
            >
                {/* SIDEBAR */}
                <div className={cx("lg:sticky lg:top-20", isEven ? "lg:order-2" : "lg:order-1")}>
                    <div className="font-mono text-[0.65rem] text-[rgba(255,255,255,0.3)] tracking-[2px] uppercase mb-2">
                        MISSION PHASE
                    </div>
                    <div
                        className="font-['Barlow_Condensed'] font-black text-5xl uppercase leading-none tracking-wide mb-4"
                        style={{ color: labelColor }}
                    >
                        {label}
                    </div>
                    <StatusBadge status={status} />
                    <div className="font-mono text-[0.7rem] text-[rgba(255,255,255,0.3)] tracking-wide">
                        {date}
                    </div>
                    <CompletionBar pct={completion} status={status} />
                    {status === "locked" && (
                        <div className="inline-block mt-5 border-2 border-[rgba(255,0,0,0.3)] text-[rgba(255,0,0,0.4)] font-mono text-[0.7rem] tracking-[4px] px-3 py-1 -rotate-2 uppercase">
                            CLASSIFIED
                        </div>
                    )}
                </div>

                {/* BODY */}
                <div className={cx(isEven ? "lg:order-1" : "lg:order-2")}>

                    <p className={cx(
                        "text-base leading-[1.8] mb-10",
                        status === "locked" ? "text-white/25" : "text-white/85"
                    )}>
                        {desc}
                    </p>

                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        style={{ gridAutoRows: "1fr" }}
                    >
                        {missions.map((m) => (
                            <MissionItem key={m.num} mission={m} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function NFTAlienRoadmap() {
    return (
        <>
            <main className="bg-[#080808] overflow-x-hidden" style={{ fontFamily: "'Barlow', sans-serif" }}>

                {/* scanline overlay */}
                <div
                    className="fixed inset-0 z-0 pointer-events-none"
                    style={{
                        background:
                            "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px)",
                    }}
                />

                {/* ── HERO ── */}
                <section className="relative min-h-screen flex items-center px-6 md:px-[60px] pt-[120px] pb-20 overflow-hidden">
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "radial-gradient(ellipse 60% 80% at 80% 50%,rgba(0,255,136,0.04) 0%,transparent 60%),radial-gradient(ellipse 40% 60% at 10% 50%,rgba(0,255,136,0.03) 0%,transparent 50%),#080808",
                        }}
                    />
                    <div
                        className="absolute right-[-60px] top-1/2 -translate-y-1/2 font-['Barlow_Condensed'] font-black leading-none select-none rotate-[-8deg] whitespace-nowrap text-[rgba(255,255,255,0.015)]"
                        style={{ fontSize: "22vw" }}
                    >
                        MISSION
                    </div>
                    <div
                        className="absolute left-0 top-0 bottom-0 w-[3px] opacity-60"
                        style={{ background: "linear-gradient(to bottom,transparent,#00FF88,transparent)" }}
                    />

                    <div className="relative z-10 max-w-[700px]" style={{ animation: "slideIn 0.8s ease both" }}>
                        <div className="inline-flex items-center gap-2 font-mono text-[0.7rem] text-[#00FF88] border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.15)] px-3.5 py-1.5 rounded-sm mb-7 tracking-[2px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" style={{ animation: "blink 1.2s ease-in-out infinite" }} />
                            MISSION BRIEFING · CLASSIFIED
                        </div>

                        <h1 className="font-['Barlow_Condensed'] font-black uppercase leading-[0.9] tracking-tight mb-8 text-white" style={{ fontSize: "clamp(4rem,9vw,8rem)" }}>
                            ALIEN<br />
                            <span className="text-[#00FF88]">ROADMAP</span>
                        </h1>

                        <div className="flex gap-10 flex-wrap font-mono text-[0.7rem] text-[rgba(255,255,255,0.4)] mb-10 tracking-wide">
                            {[["TOTAL PHASES", "04"], ["COMPLETED", "02"], ["IN PROGRESS", "01"], ["MISSION YEAR", "2024"]].map(([lbl, val]) => (
                                <span key={lbl} className="flex flex-col gap-1">
                                    <span>{lbl}</span>
                                    <strong className="font-['Barlow_Condensed'] font-bold text-[1.1rem] text-[#00FF88]">{val}</strong>
                                </span>
                            ))}
                        </div>

                        <p className="text-white/85 text-base leading-[1.8] max-w-[520px] border-l-2 border-[rgba(0,255,136,0.3)] pl-5">
                            Four mission phases. One objective: build the most utility-rich NFT ecosystem in the galaxy. Track our progress, decode what&apos;s locked, and prepare for launch.
                        </p>
                    </div>
                </section>

                {/* ── STICKY NAV ── */}
                <nav
                    className="sticky top-0 z-50 border-b border-[#1a1a1a] flex items-stretch h-14 overflow-x-auto"
                    style={{ background: "rgba(8,8,8,0.95)", backdropFilter: "blur(12px)", scrollbarWidth: "none" }}
                >
                    {[
                        { href: "#phase1", label: "Phase 01 — Genesis", tabState: "done" },
                        { href: "#phase2", label: "Phase 02 — Colony", tabState: "done" },
                        { href: "#phase3", label: "Phase 03 — Expansion", tabState: "active" },
                        { href: "#phase4", label: "Phase 04 — Dominion", tabState: "locked" },
                    ].map(({ href, label, tabState }, i) => (
                        <a
                            key={href}
                            href={href}
                            className={cx(
                                "flex items-center gap-2.5 px-6 font-mono text-[0.68rem] tracking-wide uppercase whitespace-nowrap border-r border-[#1a1a1a] transition-colors duration-200",
                                i === 0 && "border-l border-[#1a1a1a]",
                                tabState === "done" && "text-[#00FF88]",
                                tabState === "active" && "text-white bg-[rgba(0,255,136,0.05)]",
                                tabState === "locked" && "text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.7)]"
                            )}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0"
                                style={tabState === "active" ? { animation: "blink 1.2s ease-in-out infinite" } : {}}
                            />
                            {label}
                        </a>
                    ))}
                </nav>

                {/* ── PHASES ── */}
                <div className="px-6 md:px-[60px] pb-[120px] max-w-[1400px] mx-auto">
                    {phases.map((phase, i) => (
                        <Phase key={phase.id} phase={phase} isEven={i % 2 !== 0} />
                    ))}
                </div>
            </main>


        </>
    );
}