'use client'
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useState, useEffect, useRef } from 'react'

const faqs = [
    {
        id: '01',
        category: 'MINTING',
        question: 'How do I mint an NFTAlien?',
        answer: 'Connect your MetaMask or WalletConnect-compatible wallet to nftalien.io. Ensure you have sufficient ETH to cover the mint price plus gas fees. During the public mint, navigate to the Mint page, select the number of aliens (max 5 per transaction), and confirm the transaction in your wallet. Whitelisted wallets receive priority access 24 hours before public mint opens.',
    },
    {
        id: '02',
        category: 'MINTING',
        question: 'What is the total supply and mint price?',
        answer: 'The total NFTAlien collection consists of 2525 unique aliens on the Ethereum blockchain. The whitelist mint price is 0.055 ETH per alien. The public mint price is 0.075 ETH per alien. Each wallet is limited to 5 aliens per transaction during public mint. Whitelist wallets may mint up to 2 aliens at the reduced rate.',
    },
    {
        id: '03',
        category: 'MINTING',
        question: 'How were the traits generated?',
        answer: 'Each NFTAlien is uniquely generated from over 200 hand-crafted 3D traits across 8 categories: Body Type, Skin Texture, Head Accessory, Eye Type, Outfit, Background, Weapon, and Special Aura. Trait rarity was determined algorithmically with specific probabilities assigned to each trait. Legendary traits appear in fewer than 1% of the collection. All randomisation was performed via Chainlink VRF to ensure provable fairness.',
    },
    {
        id: '04',
        category: 'UTILITY',
        question: 'What utility do NFTAlien holders get?',
        answer: 'Holding an NFTAlien grants access to: $ALIEN token staking rewards (passive income proportional to alien rarity), exclusive merchandise drops redeemable through the holder portal, voting rights in the NFTAlien DAO for treasury and roadmap decisions, priority access to future collection mints and partner drops, access to the private holder Discord channels, and discounts with 24+ BINABOX ecosystem partners including DeFi protocols and crypto services.',
    },
    {
        id: '05',
        category: 'UTILITY',
        question: 'How does $ALIEN token staking work?',
        answer: "Connect your wallet to the NFTAlien staking portal and deposit your alien NFT(s) into the staking contract. You will begin accruing $ALIEN tokens daily based on your alien's rarity tier. Common aliens earn 5 $ALIEN/day, Uncommon earn 8 $ALIEN/day, Rare earn 12 $ALIEN/day, Epic earn 20 $ALIEN/day, and Legendary aliens earn 35 $ALIEN/day. You can claim accumulated tokens at any time and unstake your alien without penalty. Staked aliens cannot be transferred or listed for sale while staked.",
    },
    {
        id: '06',
        category: 'UTILITY',
        question: 'What can I do with $ALIEN tokens?',
        answer: '$ALIEN tokens are the native utility currency of the NFTAlien ecosystem. They can be used to: purchase exclusive NFTAlien merchandise in the holder store, vote on DAO governance proposals (1 token = 1 vote), access premium features in the upcoming AlienVerse metaverse platform, participate in limited raffles and auctions for 1-of-1 collector pieces, and trade on supported decentralised exchanges.',
    },
    {
        id: '07',
        category: 'TECHNICAL',
        question: 'What blockchain and token standard is used?',
        answer: 'NFTAlien is deployed on the Ethereum mainnet using the ERC-721A token standard, which provides gas-efficient batch minting. The smart contract was audited by a third-party security firm prior to deployment. Contract ownership is governed by a multi-sig wallet requiring 3-of-5 team signatures for any administrative action. The contract address is publicly verifiable on Etherscan.',
    },
    {
        id: '08',
        category: 'TECHNICAL',
        question: 'Is the smart contract audited?',
        answer: 'Yes. The NFTAlien smart contract underwent a full security audit before mainnet deployment. The audit covered reentrancy vulnerabilities, integer overflow/underflow, access control logic, mint price and supply enforcement, and withdrawal security. The audit report is publicly available in our GitHub repository. We also maintain a bug bounty programme — any critical vulnerabilities responsibly disclosed to security@nftalien.io are rewarded.',
    },
    {
        id: '09',
        category: 'MARKETPLACE',
        question: 'Where can I buy or sell NFTAliens?',
        answer: 'NFTAliens can be traded on any ERC-721 compatible NFT marketplace including OpenSea, Blur, LooksRare, and X2Y2. The official verified collection link is available on our website. Always verify the contract address before purchasing — our official contract address is pinned in our Discord server and listed on our website. Beware of impersonators and fake collections.',
    },
    {
        id: '10',
        category: 'MARKETPLACE',
        question: 'Is there a creator royalty on secondary sales?',
        answer: 'Yes. A 5% creator royalty applies to all secondary sales on marketplaces that enforce creator fees. These royalties fund ongoing development, community rewards, partnership programmes, and the NFTAlien DAO treasury. We chose 5% to balance sustainable funding with an attractive trading environment for holders. Royalty collection is enforced at the contract level on supported platforms.',
    },
    {
        id: '11',
        category: 'COMMUNITY',
        question: 'How do I get on the whitelist?',
        answer: 'Whitelist spots are distributed through our community activities including: participating in Discord events and contests, being active in community discussions, completing tasks on our partner platforms, holding NFTs from select partner collections, and early newsletter sign-ups. Whitelist status is announced via our official Discord and Twitter. We do not sell whitelist spots — any account claiming to sell WL access is a scam.',
    },
    {
        id: '12',
        category: 'COMMUNITY',
        question: 'How does DAO governance work?',
        answer: 'The NFTAlien DAO allows holders to vote on key decisions affecting the project including treasury fund allocation, new partnership approvals, roadmap priority adjustments, and community programme launches. Any holder with at least 1 NFTAlien can submit a proposal. Proposals require a minimum 5% quorum to pass. Voting power is weighted by the number of aliens held. DAO votes are conducted on-chain via Snapshot and results are binding on the team.',
    },
]

const categories = ['ALL', 'MINTING', 'UTILITY', 'TECHNICAL', 'MARKETPLACE', 'COMMUNITY']

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>[]{}!?'

function useScramble(target, duration = 1800, delay = 0) {
    const [display, setDisplay] = useState(() => Array.from(target).map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(''))
    const started = useRef(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            started.current = true
            const startTime = Date.now()
            const interval = setInterval(() => {
                const elapsed = Date.now() - startTime
                const progress = Math.min(elapsed / duration, 1)
                const resolved = Math.floor(progress * target.length)
                setDisplay(
                    Array.from(target).map((char, i) => {
                        if (i < resolved) return char
                        if (char === ' ') return ' '
                        return CHARS[Math.floor(Math.random() * CHARS.length)]
                    }).join('')
                )
                if (progress >= 1) clearInterval(interval)
            }, 40)
            return () => clearInterval(interval)
        }, delay)
        return () => clearTimeout(timeout)
    }, [target, duration, delay])

    return display
}

export default function FAQPage() {
    const [activeCategory, setActiveCategory] = useState('ALL')
    const [openItems, setOpenItems] = useState({})
    const [cursorVisible, setCursorVisible] = useState(true)

    const faqTitle = useScramble('FREQUENTLY ASKED', 1600, 200)
    const faqSub = useScramble('QUESTIONS', 1400, 800)

    useEffect(() => {
        const interval = setInterval(() => setCursorVisible(v => !v), 530)
        return () => clearInterval(interval)
    }, [])

    const toggle = (id) => setOpenItems(prev => ({ ...prev, [id]: !prev[id] }))

    const filtered = activeCategory === 'ALL' ? faqs : faqs.filter(f => f.category === activeCategory)

    return (
        <main className="bg-[#080808] text-white overflow-x-hidden min-h-screen">

            <Header />


            <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.025) 2px, rgba(0,0,0,0.025) 4px)' }} />


            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, #001508 0%, #080808 65%)' }} />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(0,255,136,0.06)] animate-[spin_40s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[rgba(0,255,136,0.04)] animate-[spin_25s_linear_infinite_reverse]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-[rgba(0,255,136,0.08)] animate-[spin_15s_linear_infinite]" />

                <div className="absolute top-8 left-8 w-10 h-10 border-t-2 border-l-2 border-[rgba(0,255,136,0.4)]" />
                <div className="absolute top-8 right-8 w-10 h-10 border-t-2 border-r-2 border-[rgba(0,255,136,0.4)]" />
                <div className="absolute bottom-8 left-8 w-10 h-10 border-b-2 border-l-2 border-[rgba(0,255,136,0.4)]" />
                <div className="absolute bottom-8 right-8 w-10 h-10 border-b-2 border-r-2 border-[rgba(0,255,136,0.4)]" />

                <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
                    {[40, 60, 80, 100, 80, 60, 40].map((h, i) => (
                        <div key={i} className="w-1 rounded-full bg-[#00FF88] animate-pulse" style={{ height: `${h * 0.3}px`, opacity: h / 100 * 0.6, animationDelay: `${i * 0.1}s` }} />
                    ))}
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
                    {[40, 60, 80, 100, 80, 60, 40].map((h, i) => (
                        <div key={i} className="w-1 rounded-full bg-[#00FF88] animate-pulse" style={{ height: `${h * 0.3}px`, opacity: h / 100 * 0.6, animationDelay: `${i * 0.15}s` }} />
                    ))}
                </div>

                {/* main hero content */}
                <div className="relative z-10 text-center">
                    <div className="fc font-black uppercase leading-none mb-2 text-[clamp(2.2rem,7vw,5.5rem)] text-white/90 tracking-tight">
                        {faqTitle}
                    </div>
                    <div className="fc font-black uppercase leading-none mb-10 text-[clamp(3rem,12vw,9rem)] text-[#00FF88] tracking-tighter">
                        {faqSub}
                    </div>

                    <div className="inline-flex items-center bg-[rgba(0,255,136,0.05)] border border-[rgba(0,255,136,0.2)] rounded-sm px-5 py-3 mb-4">
                        <span className="text-[#00FF88]/60 font-mono text-sm mr-2">›</span>
                        <span className="font-mono text-sm text-white/80">WHAT DO YOU WANT TO KNOW?</span>
                        <span className={`ml-1 inline-block w-2 h-4 bg-[#00FF88] transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
                    </div>

                    <div className="font-mono text-[0.58rem] tracking-[3px] text-white/80 uppercase mt-6 flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-white/10" />
                        SCROLL TO EXPLORE
                        <div className="h-px w-12 bg-white/10" />
                    </div>
                </div>
            </section>

            <section className="relative z-10 px-4 sm:px-8 lg:px-16 pb-20 sm:pb-32 max-w-[960px] mx-auto">

                <div className="flex items-center gap-3 py-6 sm:py-16 border-b border-[#1a1a1a] mb-8 sm:mb-12">
                    <div className="h-px flex-1 bg-[#1a1a1a] hidden sm:block" />
                    <span className="font-mono text-[0.52rem] sm:text-[0.6rem] tracking-[2px] sm:tracking-[4px] uppercase text-white/80 text-center">
                        {faqs.length} QUESTIONS
                    </span>
                    <div className="h-px flex-1 bg-[#1a1a1a] hidden sm:block" />
                </div>


                <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`font-mono text-[0.6rem] tracking-[2px] uppercase px-3 sm:px-4 py-2 rounded-sm border transition-all duration-200
                ${activeCategory === cat
                                    ? 'bg-[#00FF88] text-black border-[#00FF88]'
                                    : 'bg-transparent text-white/80 border-[#1a1a1a] hover:border-[rgba(0,255,136,0.3)] hover:text-white/60'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="space-y-3">
                    {filtered.map((faq) => {
                        const isOpen = openItems[faq.id]
                        return (
                            <div
                                key={faq.id}
                                className={`border rounded-sm overflow-hidden transition-all duration-300 ${isOpen ? 'border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.03)]' : 'border-[#1a1a1a] bg-[#0f0f0f] hover:border-[#2a2a2a]'}`}
                            >

                                <button
                                    onClick={() => toggle(faq.id)}
                                    className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-start gap-3 sm:gap-5 group"
                                >

                                    <div className="flex-shrink-0 mt-0.5 hidden sm:block">
                                        <div className={`font-mono text-[0.85rem] tracking-[2px] uppercase px-2 py-1 rounded-sm border transition-colors duration-200 ${isOpen ? 'text-[#00FF88] border-[rgba(0,255,136,0.4)] bg-[rgba(0,255,136,0.1)]' : 'text-white/80 border-[#1a1a1a]/90'}`}>
                                            {faq.id}
                                        </div>
                                        <div className="font-mono text-[0.5rem] tracking-[1px] uppercase text-white/80 mt-1.5 text-center">{faq.category}</div>
                                    </div>


                                    <div className="flex-1 min-w-0">

                                        <div className={`font-mono text-[0.8rem] tracking-[2px] uppercase mb-1.5 sm:hidden ${isOpen ? 'text-[#00FF88]/60' : 'text-white/80'}`}>
                                            {faq.category}
                                        </div>
                                        <div className={`fc font-bold text-base sm:text-lg uppercase tracking-wide leading-snug transition-colors duration-200 ${isOpen ? 'text-[#00FF88]' : 'text-white/80 group-hover:text-white'}`}>
                                            {faq.question}
                                        </div>
                                    </div>


                                    <div className={`flex-shrink-0 mt-0.5 font-mono text-[0.52rem] sm:text-[0.58rem] tracking-[1px] sm:tracking-[2px] uppercase border px-2 sm:px-3 py-1.5 rounded-sm transition-all duration-200 whitespace-nowrap ${isOpen ? 'text-black bg-[#00FF88] border-[#00FF88]' : 'text-white/80 border-[#1a1a1a] group-hover:border-[rgba(0,255,136,0.3)] group-hover:text-white/50'}`}>
                                        {isOpen ? '[ CLOSE ]' : '[ OPEN ]'}
                                    </div>
                                </button>


                                {isOpen && (
                                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 sm:pl-[88px]">
                                        <p className="text-white/80 text-sm sm:text-[13.5px] leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className="mt-12 sm:mt-20 border border-[#1a1a1a] rounded-sm p-6 sm:p-8 bg-[#0f0f0f]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                        <div className="flex-1">
                            <div className="font-mono text-[0.6rem] tracking-[3px] uppercase text-[#00FF88]/60 mb-2">
                                NEED MORE HELP?
                            </div>
                            <div className="fc font-bold text-lg sm:text-xl uppercase">
                                Still have questions?
                            </div>
                            <p className="text-white/80 text-sm mt-1 leading-relaxed">
                                Open a support ticket in our Discord. The colony responds fast. Or read our documentation
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sm:flex-shrink-0">
                            <button className="bp text-center">JOIN DISCORD</button>
                            <button className="bo text-center">SEND EMAIL</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}