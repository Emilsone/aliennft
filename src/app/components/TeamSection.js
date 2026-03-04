"use client";
import Image from "next/image";

export default function TeamSection() {
    const team = [
        { img: '/team/david.png', name: 'David Zyon', role: 'Founder & CEO', bio: 'Blockchain pioneer and fashion visionary. Previously built three DeFi protocols.' },
        { img: '/team/nara.png', name: 'Nara Skis', role: 'Lead Artist', bio: '3D artist with 10+ years crafting surreal characters for global brands.' },
        { img: '/team/kel.png', name: 'Kael Mx', role: 'Smart Contract Dev', bio: 'Solidity expert. Built and audited contracts holding $200M+ TVL.' },
        { img: '/team/zoy.png', name: 'Zoya Rin', role: 'Community Lead', bio: 'Grew three NFT communities to 50k+ holders each. Galaxy-brain strategist.' },
    ]
    const socials = ['𝕏', 'in', '🔗']

    return (
        <section className="py-15 px-10 max-w-[1200px] mx-auto">
            <h2 className="fc font-extrabold uppercase tracking-wide leading-tight text-[clamp(2rem,4vw,3rem)]">
                MEET THE <span className="text-[#00FF88]">TEAM</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mt-3 max-w-lg">
                A diverse squad of blockchain builders, creative directors, and community architects from across the galaxy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
                {team.map((m) => (
                    <div key={m.name} className="ch tl relative bg-[#111111] border border-[#1e1e1e] overflow-hidden">
                        <div className="w-full aspect-square relative overflow-hidden">
                            <Image src={m.img} alt={m.name} fill className="object-cover" />
                        </div>
                        <div className="p-4">
                            <div className="fc font-bold text-base tracking-wide uppercase">{m.name}</div>
                            <div className="text-[#00FF88] text-sm font-semibold tracking-widest uppercase mt-1">{m.role}</div>
                            <p className="text-white/70 text-base leading-relaxed mt-2.5">{m.bio}</p>
                            <div className="flex gap-2 mt-3">
                                {socials.map((s) => (
                                    <button key={s} className="w-7 h-7 rounded-full border border-[#1e1e1e] bg-[#1a1a1a] flex items-center justify-center text-sm text-white/70 cursor-pointer transition-all duration-200 hover:border-[#00FF88] hover:text-[#00FF88]">
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}