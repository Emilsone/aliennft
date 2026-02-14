import Image from "next/image";

export default function MusicCards() {
    const cards = [
        {
            title: "SKISIRS #02",
            artist: "Tycho",
            image: "/avatar-1.png",
        },
        {
            title: "SKELATON #01",
            artist: "Tycho",
            image: "/avatar-2.png",
        },
        {
            title: "Stake #07",
            artist: "Tycho",
            image: "/avatar-3.png",
        },
        {
            title: "Jlake #01",
            artist: "Tycho",
            image: "/avatar-4.png",
        },
        {
            title: "SKIman #02",
            artist: "Tycho",
            image: "/avatar-5.png",
        },
        {
            title: "Jeila #04",
            artist: "Tycho",
            image: "/avatar-6.png",
        },
        {
            title: "Junkie #04",
            artist: "Tycho",
            image: "/avatar-7.png",
        },
        {
            title: "Platone #05",
            artist: "Tycho",
            image: "/avatar-8.png",
        },
    ];

    return (
        <main className="grid place-items-center min-h-screen bg-black py-10">
            <div className="w-full max-w-7xl">
                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-gray-200 mb-8 py-12 sm:py-2 uppercase text-center lg:text-left">
                    Hot Collection
                </h1>


                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 shadow-lg  p-4 relative group"
                        >
                            {/* Hover Borders */}
                            <span className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#21E786] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                            <span className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#21E786] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                            <div className="relative w-full h-64">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="text-white text-xl font-bold uppercase">
                                    {card.title}
                                </h3>

                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
}
