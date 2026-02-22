import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image'

export default function AboutPage() {
    const missionIconCards = [
        { emoji: '🌌', title: 'ETH Blockchain', desc: 'Built on Ethereum for maximum security and liquidity.' },
        { emoji: '💎', title: 'Real Utility', desc: 'Token rewards, merch drops, and brand discounts.' },
        { emoji: '🤝', title: 'Community First', desc: 'Decisions driven by the holder community.' },
        { emoji: '🎨', title: '100% Original Art', desc: '2525 unique traits crafted by world-class artists.' },
    ]

    const stats = [
        { value: '2525', label: 'Total Items' },
        { value: '1000+', label: 'Whitelisted' },
        { value: '24+', label: 'Partners' },
    ]

    const team = [
        { img: '/team/david.png', name: 'David Zyon', role: 'Founder & CEO', bio: 'Blockchain pioneer and fashion visionary. Previously built three DeFi protocols.' },
        { img: '/team/nara.png', name: 'Nara Skis', role: 'Lead Artist', bio: '3D artist with 10+ years crafting surreal characters for global brands.' },
        { img: '/team/kel.png', name: 'Kael Mx', role: 'Smart Contract Dev', bio: 'Solidity expert. Built and audited contracts holding $200M+ TVL.' },
        { img: '/team/zoy.png', name: 'Zoya Rin', role: 'Community Lead', bio: 'Grew three NFT communities to 50k+ holders each. Galaxy-brain strategist.' },
    ]

    const values = [
        { number: '01', icon: '🌍', title: 'Transparency', desc: 'Every decision, every mint, every treasury move is on-chain and open for the community to verify. No hidden agendas.' },
        { number: '02', icon: '⚡', title: 'Real Utility', desc: "We reject the idea of NFTs as pure speculation. Every alien unlocks staking rewards, merch access, and luxury collabs." },
        { number: '03', icon: '🎨', title: 'Artistic Excellence', desc: '2525 hand-crafted 3D characters. No lazy generation. Every trait, every accessory, designed with obsessive detail.' },
        { number: '04', icon: '👥', title: 'Community Power', desc: 'Holders vote on treasury allocation, collaboration partners, and collection expansions. This universe belongs to everyone.' },
        { number: '05', icon: '🔐', title: 'Security First', desc: 'Audited smart contracts. Multi-sig treasury. Regular security reviews. Your assets are our priority.' },
        { number: '06', icon: '🚀', title: 'Long-Term Vision', desc: "We're building for the next decade, not the next pump. Sustainable tokenomics, real partnerships, lasting value." },
    ]

    const timeline = [
        { dot: 'Q1', year: '2022 — GENESIS', title: 'The Concept Is Born', desc: 'David and the founding team begin conceptualising a utility-first NFT collection bridging high fashion and blockchain. Early sketches of the alien characters are created.' },
        { dot: 'Q3', year: '2022 — FORMATION', title: 'Team Assembly & Art Production', desc: 'World-class 3D artists join the project. Over 200 unique traits designed and rendered. Smart contract architecture finalised with third-party security audit.' },
        { dot: 'Q1', year: '2023 — LAUNCH', title: 'NFTAlien Goes Live', desc: '2525 aliens minted on Ethereum. Whitelist fully subscribed within 48 hours. Community of 10,000+ Discord members formed organically.' },
        { dot: 'Q4', year: '2023 — EXPANSION', title: 'Partnerships & Staking Launch', desc: 'Interstellar token staking goes live. First luxury brand collaboration announced. BINABOX program grows to 24+ ecosystem partners.' },
        { dot: 'NOW', year: '2024 — FUTURE', title: 'The Alien-verse Continues', desc: 'Phase 2 collection in development. Metaverse integration on the horizon. The colony grows stronger every day.' },
    ]

    const partners = [
        // '⬡ NEAR', '🔶 Binance Chain', 'Coinbase Wallet', '◈ Zerion', '⚡ Zapper',
        // '📱 InstaApp', '∆ AToken', '🛡 Trust Wallet', '🎁 Giving Block', 'V Venly',
        // '⬡ Pillar', '📡 DappRadar', '◎ SYNTHETIX', '⬛ UNSTOPPABLE', '📺 Live Coin Watch',
        // '₿ bitpay', '🔷 Huobi Wallet',
    ]

    const socials = ['𝕏', 'in', '🔗']
    const divider = <div className="w-full h-px divider-bg" />

    return (
        <main className="bg-[#0a0a0a] text-white/80 overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
            <Header />

            <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 hero-grid" />
                <div className="absolute inset-0 hero-glow" />
                <div className="afu relative z-10 text-center max-w-3xl px-5">
                    <div className="agp inline-block border border-[rgba(0,255,136,0.35)] bg-[rgba(0,255,136,0.06)] text-[#00FF88] text-sm font-semibold tracking-[3px] uppercase px-5 py-1.5 rounded-full mb-7">
                        WHO WE ARE
                    </div>
                    <h1 className="fc font-extrabold uppercase leading-none tracking-wide mb-6 text-[clamp(3rem,8vw,6rem)]">
                        ABOUT <span className="text-[#00FF88]">NFTALIEN</span><br />UNIVERSE
                    </h1>
                    <p className="text-white/70 text-base leading-relaxed max-w-lg mx-auto mb-10">
                        We are a team of visionary creators, blockchain architects, and digital artists building the most fashionable alien civilisation on the ETH blockchain.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <button className="bp">JOIN THE COLONY</button>
                        <button className="bo">VIEW COLLECTION</button>
                    </div>
                </div>
            </section>


            <section className="py-24 px-10 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="fc text-sm tracking-[4px] uppercase text-[#00FF88] font-semibold mb-3">OUR MISSION</p>
                        <h2 className="fc font-extrabold uppercase tracking-wide leading-tight text-[clamp(2rem,4vw,3rem)]">
                            BUILDING THE<br /><span className="text-[#00FF88]">ALIEN-VERSE</span>
                        </h2>
                        <p className="text-white/70 text-base leading-relaxed mt-4 max-w-lg">
                            NFTAlien was born from a simple idea — that digital collectibles should offer real, tangible benefits to their holders. Not just art. Not just bragging rights. A complete ecosystem.
                        </p>
                        <p className="text-white/70 text-base leading-relaxed mt-3 max-w-lg">
                            Every alien in our collection is a passport to an expanding universe of utilities, exclusive merchandise, token rewards, and luxury brand collaborations.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7">
                            {missionIconCards.map((c) => (
                                <div key={c.title} className="bg-[rgba(0,255,136,0.04)] border border-[#1e1e1e] rounded-lg p-4 transition-colors duration-200 hover:border-[rgba(0,255,136,0.35)]">
                                    <div className="text-2xl mb-2">{c.emoji}</div>
                                    <div className="font-semibold text-base text-white/70">{c.title}</div>
                                    <div className="text-base text-white/70 mt-1 leading-relaxed">{c.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative border border-[rgba(0,255,136,0.35)] rounded-xl overflow-hidden bg-[#111111] p-6 sm:p-12 text-center">
                        <div className="absolute top-0 left-0 right-0 h-0.5 green-line-top" />
                        <div className="fc absolute top-5 right-5 font-extrabold text-[rgba(0,255,136,0.07)] leading-none select-none pointer-events-none hidden sm:block text-[8rem]">2525</div>
                        <div className="text-6xl sm:text-7xl mb-2 relative z-10">👽</div>
                        <div className="fc font-extrabold text-xl sm:text-2xl uppercase tracking-widest text-[#00FF88] relative z-10">THE COLLECTION</div>
                        <div className="text-white/70 text-base mt-2 mb-6 relative z-10">2525 unique aliens. One universe.</div>
                        <div className="flex justify-around gap-2 sm:gap-5 relative z-10">
                            {stats.map((s) => (
                                <div key={s.label} className="text-center">
                                    <div className="fc font-extrabold text-[#00FF88] leading-none text-3xl sm:text-[2.8rem]">{s.value}</div>
                                    <div className="text-white/70 text-xs sm:text-base tracking-widest uppercase mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {divider}


            <section className="py-24 px-10 max-w-[1200px] mx-auto">
                <p className="fc text-sm tracking-[4px] uppercase text-[#00FF88] font-semibold mb-3">THE CREW</p>
                <h2 className="fc font-extrabold uppercase tracking-wide leading-tight text-[clamp(2rem,4vw,3rem)]">
                    MEET THE <span className="text-[#00FF88]">TEAM</span>
                </h2>
                <p className="text-white/70 text-base leading-relaxed mt-3 max-w-lg">
                    A diverse squad of blockchain builders, creative directors, and community architects from across the galaxy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
                    {team.map((m) => (
                        <div key={m.name} className="ch tl relative bg-[#111111] border border-[#1e1e1e]  overflow-hidden">
                            <div className="w-full aspect-square relative overflow-hidden">
                                <Image src={m.img} alt={m.name} fill className="object-cover" />
                            </div>                            <div className="p-4">
                                <div className="fc font-bold text-base tracking-wide uppercase">{m.name}</div>
                                <div className="text-[#00FF88] text-sm font-semibold tracking-widest uppercase mt-1">{m.role}</div>
                                <p className="text-white/70 text-base leading-relaxed mt-2.5">{m.bio}</p>
                                <div className="flex gap-2 mt-3">
                                    {socials.map((s) => (
                                        <button key={s} className="w-7 h-7 rounded-full border border-[#1e1e1e] bg-[#1a1a1a] flex items-center justify-center text-sm text-white/70 cursor-pointer transition-all duration-200 hover:border-[#00FF88] hover:text-[#00FF88]">{s}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {divider}


            <section className="py-24 px-10 max-w-[1200px] mx-auto text-center">
                <p className="fc text-sm tracking-[4px] uppercase text-[#00FF88] font-semibold mb-3">WHAT WE STAND FOR</p>
                <h2 className="fc font-extrabold uppercase tracking-wide leading-tight text-[clamp(2rem,4vw,3rem)]">
                    OUR <span className="text-[#00FF88]">CORE VALUES</span>
                </h2>
                <p className="text-white/70 text-base leading-relaxed mt-3 max-w-lg mx-auto">
                    Every decision in the NFTAlien universe is guided by these principles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
                    {values.map((v) => (
                        <div key={v.number} className="relative bg-[#111111] border border-[#1e1e1e]  p-9 overflow-hidden transition-colors duration-200 hover:border-[rgba(0,255,136,0.35)]">
                            <div className="fc absolute top-4 right-5 font-extrabold text-[rgba(0,255,136,0.06)] leading-none select-none pointer-events-none text-[4rem]">{v.number}</div>
                            <div className="w-12 h-12 bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.35)] rounded-xl flex items-center justify-center text-2xl mb-5">{v.icon}</div>
                            <h3 className="fc font-bold text-lg uppercase tracking-wide mb-3">{v.title}</h3>
                            <p className="text-white/70 text-base leading-relaxed">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {divider}


            <section className="py-24 px-10 max-w-[1200px] mx-auto">
                <div className="text-center mb-12">
                    <p className="fc text-sm tracking-[4px] uppercase text-[#00FF88] font-semibold mb-3">HOW WE GOT HERE</p>
                    <h2 className="fc font-extrabold uppercase tracking-wide leading-tight text-[clamp(2rem,4vw,3rem)]">
                        OUR <span className="text-[#00FF88]">STORY</span>
                    </h2>
                </div>
                <div className="max-w-2xl mx-auto">
                    {timeline.map((item, i) => (
                        <div key={i} className="flex gap-7 mb-9 relative">
                            {i < timeline.length - 1 && (
                                <div className="absolute left-[19px] top-[42px] w-0.5 h-full timeline-connector" />
                            )}
                            <div className="fc relative z-10 flex-shrink-0 w-10 h-10 border-2 border-[rgba(0,255,136,0.35)] rounded-full bg-[#111111] flex items-center justify-center text-[#00FF88] text-xs font-bold">{item.dot}</div>
                            <div className="pt-1.5">
                                <div className="text-[#00FF88] text-sm font-bold tracking-[3px] uppercase mb-1.5">{item.year}</div>
                                <h3 className="fc font-bold text-lg uppercase tracking-wide mb-2">{item.title}</h3>
                                <p className="text-white/70 text-base leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* <div className="bg-[#0d0d0d] border-t border-b border-[#1e1e1e] py-16 px-10">
                <h2 className="fc font-extrabold text-3xl uppercase tracking-widest text-center mb-10">
                    <span className="text-[#00FF88]">BINABOX</span> PARTNER
                </h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-[1200px] mx-auto">
                    {partners.map((p) => (
                        <div key={p} className="bg-[#111111] border border-[#1e1e1e] rounded-lg px-6 py-3.5 text-white/70/70 text-base font-semibold tracking-wide uppercase transition-all duration-200 cursor-default hover:border-[rgba(0,255,136,0.35)]">{p}</div>
                    ))}
                </div>
            </div> */}



            <Footer />
        </main>
    )
}