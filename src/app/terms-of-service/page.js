import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfUsePage() {

    const lastUpdated = 'January 15, 2024'
    const sections = [
        {
            id: 'acceptance',
            title: 'Acceptance of Terms',
            content: `By accessing or using the AlienNFT platform, including our website, NFT marketplace, staking system, governance tools, merchandise rewards, and any related services (collectively, the "Platform"), you agree to be bound by these Terms of Use. If you do not agree, you must not access or use the Platform.\n\nThese Terms apply to all visitors, wallet holders, NFT owners, stakers, and any other participants in the AlienNFT ecosystem. Use of the Platform constitutes full acceptance of these Terms and our Privacy Policy.`,
        },
        {
            id: 'eligibility',
            title: 'Eligibility',
            content: `You must be at least 18 years of age to use the Platform. By using AlienNFT, you represent and warrant that you meet this age requirement and that your participation is permitted under the laws of your jurisdiction.\n\nCryptocurrency and NFT activity may be restricted or prohibited in certain countries. It is your sole responsibility to determine whether using our Platform is legal in your location. AlienNFT makes no representation that the Platform is appropriate or available for use in any particular jurisdiction.`,
        },
        {
            id: 'platform-access',
            title: 'Platform Access and Wallet Use',
            subsections: [
                {
                    title: 'Connecting a Wallet',
                    content: `To access holder-only features such as staking, governance, and merchandise rewards, you must connect a compatible cryptocurrency wallet. By connecting your wallet, you confirm that you are the authorized owner or controller of that wallet address. You are solely responsible for maintaining the security of your wallet, private keys, seed phrases, and any associated credentials.`,
                },
                {
                    title: 'No Custody',
                    content: `AlienNFT does not custody, hold, or control your digital assets at any time. We have no ability to recover lost wallets, reverse blockchain transactions, or retrieve stolen funds. All on-chain activity is final and irreversible by nature of the Ethereum blockchain.`,
                },
                {
                    title: 'Account Security',
                    content: `AlienNFT will never ask for your private keys, seed phrases, or passwords. Any communication requesting this information is fraudulent. You agree to notify us immediately if you suspect any unauthorized use of your wallet or account.`,
                },
            ],
        },
        {
            id: 'nft-ownership',
            title: 'NFT Ownership and Rights',
            content: `Purchasing an AlienNFT grants you ownership of the NFT token on the Ethereum blockchain. This ownership includes the right to hold, transfer, sell, or stake your NFT within the AlienNFT ecosystem, and to access holder-exclusive benefits tied to that token.\n\nOwnership of an NFT does not transfer intellectual property rights, copyright, or trademark rights in the underlying artwork or media. You may not use AlienNFT artwork for commercial purposes, reproduce it at scale, or represent it as your own creation without explicit written permission from AlienNFT.`,
            items: [
                'You may display your NFT for personal, non-commercial use',
                'You may sell or transfer your NFT on compatible secondary markets',
                'You may not use AlienNFT artwork to create derivative commercial products',
                'You may not claim trademark or copyright over any AlienNFT artwork',
                'Holder benefits tied to an NFT transfer with the token upon sale',
            ],
        },
        {
            id: 'staking-governance',
            title: 'Staking, Tokens, and Governance',
            content: `The AlienNFT ecosystem includes staking mechanisms and the $ALIEN token. Participation in staking, earning rewards, and governance voting is subject to the rules and parameters defined by the smart contracts governing these systems.\n\nAlienNFT makes no guarantees regarding token value, staking yield, or the continued availability of any reward programs. Governance outcomes are determined by community vote and are not guaranteed to reflect any individual's preferences. We reserve the right to update, pause, or discontinue staking or governance features with reasonable notice.`,
        },
        {
            id: 'merchandise',
            title: 'Merchandise and Physical Rewards',
            content: `Certain NFT holdings may unlock eligibility for physical merchandise through our rewards program. Redemption of physical items requires submission of a valid shipping address. AlienNFT is not responsible for delays caused by third-party fulfillment partners, customs processes, or circumstances outside our control.\n\nMerchandise offers are subject to availability and may change without notice. Redeemed items cannot be returned or exchanged unless they arrive damaged or defective.`,
        },
        {
            id: 'prohibited',
            title: 'Prohibited Conduct',
            content: `You agree not to engage in any of the following when using the Platform:`,
            items: [
                'Using the Platform for any unlawful purpose or in violation of applicable laws or regulations',
                'Attempting to manipulate NFT prices, staking rewards, or governance outcomes through deceptive means',
                'Impersonating AlienNFT, its team members, or other community participants',
                'Introducing malicious code, bots, scrapers, or automated tools that disrupt platform functionality',
                'Exploiting bugs or vulnerabilities rather than reporting them responsibly',
                'Engaging in harassment, hate speech, or threatening behaviour in community spaces',
                'Misrepresenting NFT ownership to gain unauthorized access to holder benefits',
                'Circumventing access controls, geographic restrictions, or eligibility requirements',
            ],
        },
        {
            id: 'intellectual-property',
            title: 'Intellectual Property',
            content: `All content on the AlienNFT platform, including but not limited to artwork, logos, branding, code, copy, and UI design, is the property of AlienNFT or its licensors and is protected by applicable intellectual property law.\n\nYou are granted a limited, non-exclusive, non-transferable licence to access and use the Platform for its intended purposes. Nothing in these Terms transfers any intellectual property rights to you beyond NFT token ownership as described above.`,
        },
        {
            id: 'third-party',
            title: 'Third-Party Services and Links',
            content: `The Platform may link to or integrate with third-party services, including secondary NFT marketplaces, wallet providers, Discord, and analytics tools. AlienNFT does not control these services and is not responsible for their content, availability, or data practices.\n\nYour use of third-party services is governed by their own terms and privacy policies. We encourage you to review them independently.`,
        },
        {
            id: 'risks',
            title: 'Risks and Disclaimers',
            content: `Participation in NFT and cryptocurrency markets carries significant risk. By using the Platform you acknowledge and accept the following:`,
            items: [
                'NFT and token values are highly volatile and may decrease to zero',
                'Blockchain transactions are irreversible and AlienNFT cannot undo or reverse them',
                'Smart contracts may contain undiscovered bugs or vulnerabilities despite auditing',
                'Regulatory changes may affect your ability to use the Platform in your jurisdiction',
                'Platform features, including staking and rewards, may be modified or discontinued',
                'AlienNFT is not a financial adviser and nothing on the Platform constitutes investment advice',
            ],
        },
        {
            id: 'limitation',
            title: 'Limitation of Liability',
            content: `To the maximum extent permitted by applicable law, AlienNFT and its team members, contributors, and partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform, including but not limited to loss of digital assets, loss of data, loss of profits, or any damages resulting from blockchain activity.\n\nOur total liability to you for any claim arising from these Terms or your use of the Platform shall not exceed the amount you paid, if any, to AlienNFT in the 90 days preceding the claim.`,
        },
        {
            id: 'indemnification',
            title: 'Indemnification',
            content: `You agree to indemnify, defend, and hold harmless AlienNFT and its team, contributors, and partners from any claims, damages, losses, or expenses, including reasonable legal fees, arising out of your use of the Platform, violation of these Terms, or infringement of any third-party rights.`,
        },
        {
            id: 'changes',
            title: 'Changes to These Terms',
            content: `We may update these Terms as the Platform evolves or as required by law. Significant changes will be announced through our website and official community channels. Continued use of the Platform after changes take effect constitutes acceptance of the revised Terms.\n\nThe date at the top of this page reflects the most recent update. We recommend reviewing these Terms periodically.`,
        },
        {
            id: 'governing-law',
            title: 'Governing Law',
            content: `These Terms are governed by and construed in accordance with applicable law. Any disputes arising under these Terms shall be resolved through good-faith negotiation where possible. AlienNFT reserves the right to seek injunctive relief in any jurisdiction where necessary to protect its rights or the integrity of the Platform.`,
        },
    ]
    return (
        <main className="bg-[#080808] text-white overflow-x-hidden font-[family-name:var(--font-geist-sans)]">
            <Header />
            <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }} />
            <section className="relative pt-36 pb-20 px-6 sm:px-16 overflow-hidden border-b border-[#1a1a1a]">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 60% at 100% 50%, rgba(0,255,136,0.04) 0%, transparent 60%)' }} />
                <div className="absolute right-0 top-0 bottom-0 w-[3px] opacity-40" style={{ background: 'linear-gradient(to bottom, transparent, #00FF88, transparent)' }} />

                <div className="relative z-10 max-w-[860px]">
                    <div className="inline-flex items-center gap-2 border border-[#1e1e1e] bg-[#111] text-white/40 px-3.5 py-1.5 rounded-sm mb-6">
                        <span className="font-mono text-[0.62rem] tracking-[2px] uppercase">aliennft.io</span>
                        <span className="text-white/20 mx-1">/</span>
                        <span className="font-mono text-[0.62rem] tracking-[2px] uppercase text-white/60">Terms of Use</span>
                    </div>

                    <h1 className="font-black uppercase leading-none tracking-tight mb-4 text-[clamp(3rem,7vw,6rem)]">
                        TERMS <span className="text-[#00FF88]">&</span><br />CONDITIONS
                    </h1>
                    <div className="w-16 h-[2px] bg-[#00FF88] mb-6 opacity-60" />
                    <div className="flex gap-8 flex-wrap mb-6">
                        <div>
                            <div className="font-mono text-[0.6rem] tracking-[2px] text-white/30 uppercase mb-1">Last Updated</div>
                            <div className="font-mono text-sm text-white/60">{lastUpdated}</div>
                        </div>
                        <div>
                            <div className="font-mono text-[0.6rem] tracking-[2px] text-white/30 uppercase mb-1">Applies To</div>
                            <div className="font-mono text-sm text-white/60">aliennft.io & all subdomains</div>
                        </div>
                        <div>
                            <div className="font-mono text-[0.6rem] tracking-[2px] text-white/30 uppercase mb-1">Version</div>
                            <div className="font-mono text-sm text-white/60">v1.0</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative z-10 max-w-[860px] mx-auto px-6 sm:px-16 py-20">
                <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-sm p-6 mb-16">
                    <div className="font-mono text-[0.62rem] tracking-[3px] uppercase text-[#00FF88] mb-4">Table of Contents</div>
                    <ol className="space-y-2">
                        {sections.map((s, i) => (
                            <li key={s.id}>
                                <a href={`#${s.id}`} className="flex items-center gap-3 text-white/60 hover:text-white/80 transition-colors duration-200 text-sm group">
                                    <span className="font-mono text-[0.6rem] text-white/20 group-hover:text-[#00FF88] w-5">{String(i + 1).padStart(2, '0')}</span>
                                    {s.title}
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="space-y-16">
                    {sections.map((s, i) => (
                        <div key={s.id} id={s.id} className="scroll-mt-20">
                            <div className="flex items-start gap-4 mb-6">
                                <span className="font-mono text-[0.6rem] text-[#00FF88] mt-1 flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                                <h2 className="fc font-bold text-2xl uppercase tracking-wide">{s.title}</h2>
                            </div>

                            {s.content && (
                                <div className="text-white/70 text-base leading-relaxed whitespace-pre-line mb-6 pl-8">
                                    {s.content}
                                </div>
                            )}

                            {s.subsections && (
                                <div className="pl-8 space-y-6">
                                    {s.subsections.map((sub) => (
                                        <div key={sub.title}>
                                            <h3 className="fc font-bold text-base uppercase tracking-wide text-white/80 mb-2">{sub.title}</h3>
                                            <p className="text-white/70 text-base leading-relaxed">{sub.content}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {s.items && (
                                <ul className="pl-8 space-y-3 mb-6">
                                    {s.items.map((item, ii) => (
                                        <li key={ii} className="flex gap-3 text-white/70 text-base leading-relaxed">
                                            <span className="text-[#00FF88] mt-1 flex-shrink-0 text-xs">⬡</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {s.footer && (
                                <p className="pl-8 text-white/40 text-sm leading-relaxed italic mt-4">{s.footer}</p>
                            )}
                            <div className="mt-12 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,255,136,0.15), transparent)' }} />
                        </div>
                    ))}
                </div>
                <div className="mt-20 bg-[rgba(0,255,136,0.04)] border border-[rgba(0,255,136,0.15)] rounded-sm p-6">
                    <div className="font-mono text-[0.62rem] tracking-[3px] uppercase text-[#00FF88] mb-3">Important Notice</div>
                    <p className="text-white/75 text-sm leading-relaxed">
                        These Terms of Use should be read alongside our <span className="text-white/80">Privacy Policy</span> and <span className="text-white/80">Information Collection Notice</span>. AlienNFT is a decentralised project and certain aspects of our platform operate on public blockchain infrastructure over which we have no control. These Terms cover only activity conducted through our own services and interfaces.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}