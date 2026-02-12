export default function Home() {
    return (
        <main className="relative h-screen w-full overflow-hidden bg-black">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/avatar-hero.png')",
                    backgroundPosition: "center top",
                }}
            />

            {/* Dark Gradient Overlay */}
            <div
                className="
          absolute inset-0 
          bg-gradient-to-b 
          from-black/60 via-black/80 to-black/95
          md:from-black/10 md:via-black/35 md:to-black/65
        "
            />

            {/* Content Wrapper */}
            <div className="
        relative z-10 flex h-full justify-center text-center 
        items-start md:items-end
        px-6
        pt-[120px] md:pt-0
        pb-[40px] md:pb-[40px]
      ">
                <div className="max-w-[1000px] w-full">

                    {/* Heading */}
                    <h1 className="
            text-[38px] md:text-[64px]
            font-extrabold tracking-[2px] text-white 
            mb-6
            md:whitespace-nowrap
          ">
                        EXPLORE NFT COLLECTION
                    </h1>

                    {/* Paragraph */}
                    <p className="
            text-[16px] md:text-[18px]
            text-gray-300 leading-relaxed 
            max-w-[95%] md:max-w-[760px]
            mx-auto mb-8 md:mb-10
          ">
                        A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
                        Unique, <br className="hidden md:block" />
                        metaverse-ready, and designed to benefit their holders.
                    </p>

                    {/* Buttons */}
                    <div className="
            flex flex-col md:flex-row
            items-center justify-center
            gap-4 md:gap-5
          ">
                        <button className="
              w-full md:w-auto
              bg-[#14f195] text-black font-semibold 
              text-[14px] tracking-[1px] 
              px-7 py-3
            ">
                            CONNECT WALLET
                        </button>

                        <button className="
              w-full md:w-auto
              border-2 border-[#14f195] 
              text-white font-semibold 
              text-[14px] tracking-[1px] 
              px-7 py-[10px] bg-transparent
            ">
                            WHITELIST NOW
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
}
