import Image from 'next/image';

export default function HowItWorks() {
    const steps = [
        {
            step: "STEP 1",
            title: "Connect Your Wallet",
            icon: "/icons/nfticon.svg",
        },
        {
            step: "STEP 2",
            title: "Select Your Quaility",
            icon: "/icons/qualityicon.svg",
        },
        {
            step: "STEP 3",
            title: "Confirm The Transaction",
            icon: "/icons/transactionicon.svg",
        },
        {
            step: "STEP 4",
            title: "Receive Your NFTs",
            icon: "/icons/nfticon.svg",
        },
    ];

    return (
        <section className="bg-black py-20 px-6">
            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
                    HOW {" "}
                    <span className="text-[#21E786]">NFTALIEN</span> WORK
                </h2>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {steps.map((item, index) => (
                    <div
                        key={index}
                        className="relative group bg-[#0f1b25] rounded-sm px-8 py-8 text-center overflow-hidden transition-all duration-300"
                    >
                        {/* Hover Borders */}
                        <span className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#21E786]  opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                        <span className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#21E786] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>

                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <Image
                                src={item.icon}
                                alt="icon"
                                className=" object-contain"
                                width={64}
                                height={64}
                            />
                        </div>

                        {/* Step */}
                        <p className="text-[#21E786] font-bold tracking-wide mb-3">
                            {item.step}
                        </p>

                        {/* Title */}
                        <h3 className="text-white text-lg font-semibold">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
