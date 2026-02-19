export default function StorySection() {
    return (
        <section className="relative w-full bg-[#000000] py-24 px-6">
            <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* LEFT CONTENT */}
                <div className="max-w-xl">
                    <h2 className="text-white text-4xl font-semibold mb-6">
                        THE STORY
                    </h2>

                    <p className="text-[#F5F5F5] leading-relaxed mb-10">
                        Our collection’s priority is to reward NFT holders by developing utilities
                        they can use in their current everyday life. Not in a hypothetical future.
                    </p>

                    <div className="flex gap-16 mb-10 flex-wrap">
                        <div>
                            <p className="text-[#F5F5F5]  text-sm mb-1">Total Item</p>
                            <p className="text-white text-4xl font-bold">2240+</p>
                        </div>

                        <div>
                            <p className="text-[#F5F5F5] text-sm mb-1">Profiles Whitelisted</p>
                            <p className="text-white text-4xl font-bold">1000+</p>
                        </div>
                    </div>

                    <button className="border border-e[#21E786] text-[#21E786] px-6 py-3 text-sm font-semibold hover:bg-[#21E786] hover:text-black transition">
                        READ MORE
                    </button>
                </div>

                {/* RIGHT CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                    <FeatureCard
                        number="01"
                        title="Daily Tokens"
                        text="Earn interstellar tokens passively by staking your collectible NFT."
                        active
                    />
                    <FeatureCard
                        number="02"
                        title="Exclusive Discounts"
                        text="Tokens and NFTs can be used for discounts at top fashion brands."
                    />
                    <FeatureCard
                        number="03"
                        title="Galactic Merch"
                        text="Members-only merch designed by David and other world-renowned artists."
                    />
                    <FeatureCard
                        number="04"
                        title="Limited-Edition Collabs"
                        text="Get limited-edition items from Alienverse collabs with fashion and luxury brands."
                    />
                </div>
            </div>
        </section>
    );
}

/* CARD COMPONENT */
function FeatureCard({ number, title, text }) {
    return (
        <div
            className={`relative h-[197px] p-8 bg-[#141B22] overflow-hidden relative group`}
        >
            <span className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#21E786] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            <span className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#21E786] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            {/* BACK NUMBER */}
            <span className="absolute top-6 right-6 text-[86px] font-bold text-[#21E786]/23 leading-none pointer-events-none">
                {number}
            </span>

            {/* CONTENT */}
            <h3 className="relative text-[#FFFFFF] text-md font-bold mb-4">
                {title}
            </h3>

            <p className="relative text-[#FFFFFF] text-sm leading-relaxed max-w-[90%]">
                {text}
            </p>
        </div>
    );
}
