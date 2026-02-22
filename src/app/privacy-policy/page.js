export default function PrivacyPolicyPage() {

    const lastUpdated = 'January 15, 2024'
    const sections = [
        {
          id: 'overview',
          title: 'Overview',
          content: `NFTAlien is built with respect for privacy. This policy explains what information we collect, why we collect it, and how it is used when you visit our website, connect a wallet, buy or trade NFTs, or take part in our ecosystem such as staking, governance, or merchandise rewards.
      
      By using any part of the NFTAlien platform, you agree to the practices described here. If you are not comfortable with them, you should stop using the platform.`,
        },
      
        {
          id: 'information-we-collect',
          title: 'Information We Collect',
          subsections: [
            {
              title: 'Wallet and Blockchain Data',
              content: `When you connect a cryptocurrency wallet, we receive your public wallet address. Activity such as NFT purchases, transfers, staking actions, and token claims is recorded on the Ethereum blockchain and is publicly visible by design. We may review and analyze this on-chain data to operate and improve the platform.`,
            },
            {
              title: 'Information You Share With Us',
              content: `Some information is provided directly by you. This may include your email address when you join our newsletter or whitelist, your Discord username when participating in the community, your shipping details when redeeming physical rewards, or content submitted through governance or voting features.`,
            },
            {
              title: 'Automatically Collected Information',
              content: `When you browse our website, certain technical details are collected automatically. This may include your IP address, general location, browser type, device information, pages visited, time spent on the site, and referral sources. We use this information to understand usage patterns and improve performance.`,
            },
            {
              title: 'Third-Party Services',
              content: `If you connect external services such as Discord for verification or wallet providers like MetaMask or WalletConnect, those services may share limited information with us based on your settings. We recommend reviewing their privacy policies to understand how your data is handled.`,
            },
          ],
        },
      
        {
          id: 'how-we-use',
          title: 'How We Use Your Information',
          items: [
            'To confirm NFT ownership and unlock holder-only features such as staking and governance',
            'To process and deliver physical merchandise tied to your NFT holdings',
            'To send important updates like mint confirmations, whitelist notices, and platform alerts',
            'To share news, drops, and partner updates when you have chosen to receive them',
            'To understand how the platform is used and improve features and user experience',
            'To prevent fraud, abuse, or misuse of rewards and access systems',
            'To meet legal and regulatory requirements where applicable',
            'To enforce our Terms of Service and community rules',
          ],
        },
      
        {
          id: 'cookies',
          title: 'Cookies and Tracking',
          content: `We use cookies and similar tools to keep the platform running smoothly and to understand how it is used.
      
      Essential cookies support core features like wallet connections and security. Analytics cookies help us see how visitors interact with the site, such as which pages are viewed most. Preference cookies remember choices like theme or language.
      
      You can manage non-essential cookies through your browser settings, but some features may not work properly if cookies are disabled.`,
        },
      
        {
          id: 'blockchain-disclosure',
          title: 'Blockchain and Public Data',
          content: `NFTAlien runs on the Ethereum blockchain. Blockchain data is public and permanent by nature. Wallet addresses, NFT ownership, staking activity, token balances, and governance votes can be viewed by anyone on the network.
      
      We cannot change, hide, or remove blockchain records. If you link a wallet to our platform, that connection may be visible through blockchain analysis. For this reason, you should only use wallet addresses you are comfortable making publicly visible.
      
      All $ALIEN token transactions are also recorded on-chain and remain publicly accessible.`,
        },
      
        {
          id: 'sharing',
          title: 'Sharing Your Information',
          content: `We do not sell your personal information. In limited cases, information may be shared as outlined below.`,
          items: [
            'Service providers that help operate the platform, such as hosting, email delivery, analytics, and merchandise fulfillment partners',
            'Approved BINABOX ecosystem partners, only if you choose to opt in to partner benefits',
            'Authorities or regulators when disclosure is required by law',
            'New owners in the event of a merger, acquisition, or asset sale, under the same privacy commitments',
            'Relevant parties when necessary to protect the safety and integrity of the community',
          ],
        },
      
        {
          id: 'retention',
          title: 'Data Retention',
          content: `We keep personal information only for as long as it is needed. Email addresses are stored until you unsubscribe or request removal. Merchandise records are kept for accounting and tax purposes. Analytics data is stored in anonymized form for a limited time.
      
      Blockchain data cannot be deleted and will remain on the Ethereum network indefinitely.`,
        },
      
        {
          id: 'your-rights',
          title: 'Your Rights',
          content: `Depending on where you live, you may have rights related to your personal data.`,
          items: [
            'Request access to the information we hold about you',
            'Ask for corrections if your information is inaccurate',
            'Request deletion of personal data where legally possible',
            'Limit or object to certain uses of your data',
            'Receive your data in a portable format',
            'Withdraw consent where processing is based on consent',
          ],
          footer:
            'To make a request, contact us at privacy@nftalien.io. We aim to respond within 30 days. Some requests may be limited due to legal obligations or the public nature of blockchain data.',
        },
      
        {
          id: 'security',
          title: 'Security',
          content: `We use standard security practices to protect information, including encrypted connections and restricted access to systems. Regular reviews help us maintain a strong security posture.
      
      That said, no system is completely risk-free. You are responsible for keeping your wallet, private keys, and recovery phrases secure. NFTAlien will never ask for your private keys or seed phrases. Any request for them is fraudulent.`,
        },
      
        {
          id: 'children',
          title: "Children's Privacy",
          content: `NFTAlien is intended for adults only. We do not knowingly collect information from anyone under 18. If you believe a minor has shared personal data with us, please contact us so we can remove it.
      
      NFT and cryptocurrency activity may also be restricted by local laws. It is your responsibility to follow the rules in your jurisdiction.`,
        },
      
        {
          id: 'international',
          title: 'International Use',
          content: `NFTAlien operates globally. Your information may be processed in countries outside your own, where data protection laws may differ. When this happens, we take reasonable steps to ensure your data is handled responsibly.`,
        },
      
        {
          id: 'changes',
          title: 'Changes to This Policy',
          content: `We may update this policy as the platform evolves or legal requirements change. When important updates are made, we will share notices on our website and through official community channels.
      
      The date at the top of this page shows when the policy was last updated. Continued use of the platform means you accept the updated policy.`,
        },
      
        {
          id: 'contact',
          title: 'Contact Us',
          content: `If you have questions or concerns about privacy or data use, you can reach us through the following channels:`,
          contact: [
            { label: 'Email', value: 'privacy@nftalien.io' },
            { label: 'Discord', value: 'discord.gg/nftalien → #support' },
            { label: 'Twitter / X', value: '@NFTAlienHQ' },
          ],
          footer: 'We aim to reply to privacy-related messages within five business days.',
        },
      ]

    return (
        <main className="bg-[#080808] text-white overflow-x-hidden font-[family-name:var(--font-geist-sans)] ">

            <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }} />


            <section className="relative pt-36 pb-20 px-6 sm:px-16 overflow-hidden border-b border-[#1a1a1a]">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 70% at 50% 0%, rgba(0,255,136,0.04) 0%, transparent 60%)' }} />
                <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-50" style={{ background: 'linear-gradient(to bottom, transparent, #00FF88, transparent)' }} />

                <div className="relative z-10 max-w-[860px]">
                    <div className="inline-flex items-center gap-2 border border-[rgba(0,255,136,0.3)] bg-[rgba(0,255,136,0.06)] text-[#00FF88] px-3.5 py-1.5 rounded-sm mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                        <span className="font-mono text-[0.62rem] tracking-[2px] uppercase">Legal Document</span>
                    </div>

                    <h1 className="fc font-black uppercase leading-none tracking-tight mb-6 text-[clamp(3rem,7vw,6rem)]">
                        PRIVACY<br /><span className="text-[#00FF88]">POLICY</span>
                    </h1>

                    <div className="flex gap-8 flex-wrap mb-6">
                        <div>
                            <div className="font-mono text-[0.6rem] tracking-[2px] text-white/30 uppercase mb-1">Last Updated</div>
                            <div className="font-mono text-sm text-white/60">{lastUpdated}</div>
                        </div>
                        <div>
                            <div className="font-mono text-[0.6rem] tracking-[2px] text-white/30 uppercase mb-1">Applies To</div>
                            <div className="font-mono text-sm text-white/60">nftalien.io & all subdomains</div>
                        </div>
                        <div>
                            <div className="font-mono text-[0.6rem] tracking-[2px] text-white/30 uppercase mb-1">Version</div>
                            <div className="font-mono text-sm text-white/60">v2.1</div>
                        </div>
                    </div>

                    <p className="text-white/50 text-base leading-relaxed max-w-2xl border-l-2 border-[rgba(0,255,136,0.25)] pl-5">
                        This document governs how NFTAlien collects, uses, and protects your data across our NFT platform, staking ecosystem, and community channels. Please read it carefully before interacting with our services.
                    </p>
                </div>
            </section>


            <div className="relative z-10 max-w-[860px] mx-auto px-6 sm:px-16 py-20">


                <div className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-sm p-6 mb-16">
                    <div className="font-mono text-[0.62rem] tracking-[3px] uppercase text-[#00FF88] mb-4">Table of Contents</div>
                    <ol className="space-y-2">
                        {sections.map((s, i) => (
                            <li key={s.id}>
                                <a href={`#${s.id}`} className="flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors duration-200 text-sm group">
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


                            {s.contact && (
                                <div className="pl-8 mt-4 space-y-3">
                                    {s.contact.map((c) => (
                                        <div key={c.label} className="flex gap-4 items-center">
                                            <span className="font-mono text-[0.6rem] tracking-[2px] uppercase text-white/30 w-16 flex-shrink-0">{c.label}</span>
                                            <span className="text-[#00FF88] text-sm font-mono">{c.value}</span>
                                        </div>
                                    ))}
                                </div>
                            )}


                            <div className="mt-12 h-px" style={{ background: 'linear-gradient(90deg, rgba(0,255,136,0.15), transparent)' }} />
                        </div>
                    ))}
                </div>

                {/* bottom note */}
                <div className="mt-20 bg-[rgba(0,255,136,0.04)] border border-[rgba(0,255,136,0.15)] rounded-sm p-6">
                    <div className="font-mono text-[0.62rem] tracking-[3px] uppercase text-[#00FF88] mb-3">Important Notice</div>
                    <p className="text-white/75 text-sm leading-relaxed">
                        This Privacy Policy should be read alongside our <span className="text-white/80">Terms of Service</span> and <span className="text-white/80">Community Guidelines</span>. NFTAlien is a decentralised project and certain aspects of our platform operate on public blockchain infrastructure over which we have no control. This policy covers only data we directly collect and process through our own services.
                    </p>
                </div>

            </div>

        </main>
    )
}