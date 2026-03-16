"use client";
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="relative min-h-[100dvh] bg-[#0f0f0f] flex flex-col items-center justify-center overflow-hidden font-[family-name:var(--font-geist-sans)]">

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(0,255,136,0.03),transparent_60%)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#00FF88] opacity-[0.015] blur-[100px] rounded-full pointer-events-none" />
            <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-0"></div>

            <div className="relative z-10 text-center flex flex-col items-center px-6">

                {/* Animated 404 Header */}
                <div className="relative mb-8">
                    <h1 className="text-[120px] sm:text-[160px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-[#00FF88] text-xl sm:text-2xl tracking-[0.5em] uppercase font-bold bg-[#0f0f0f] px-6 py-2 border border-[#00FF88]/30 shadow-[0_0_20px_rgba(0,255,136,0.1)]">
                            System Error
                        </span>
                    </div>
                </div>

                {/* CSS Animated Alien Concept */}
                <div className="relative w-40 h-40 sm:w-56 sm:h-56 mb-12">

                    {/* Stranded Platform */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full blur-[2px]"></div>

                    {/* Astronaut / Alien Figure */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-28 sm:h-40 animate-[float_4s_ease-in-out_infinite]">

                        {/* Glowing Aura */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-16 sm:h-24 bg-[#00FF88]/20 blur-[20px] rounded-full animate-[pulse_3s_ease-in-out_infinite]"></div>

                        {/* Head / Helmet */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-b from-white/90 to-white/60 rounded-[30px] border-2 border-white/20 shadow-[0_5px_15px_rgba(0,0,0,0.5)] overflow-hidden">
                            {/* Visor */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[80%] h-[50%] bg-[#0a0a0a] rounded-[15px] border border-white/20 shadow-inner overflow-hidden">
                                {/* Visor Reflection */}
                                <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent transform -skew-y-12"></div>
                                {/* Scanning LED */}
                                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#00FF88] shadow-[0_0_8px_#00FF88] animate-[scan_2s_linear_infinite]"></div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="absolute top-12 sm:top-16 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-14 sm:h-20 bg-gradient-to-b from-white/80 to-white/40 rounded-t-[20px] rounded-b-[10px] border-x-2 border-b-2 border-white/20">
                            {/* Chest Plate Component */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 sm:w-12 h-8 sm:h-12 bg-[#0a0a0a] rounded-lg border border-white/20 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                            </div>
                        </div>

                        {/* Left Arm */}
                        <div className="absolute top-14 sm:top-20 -left-2 sm:-left-4 w-6 sm:w-8 h-12 sm:h-16 bg-gradient-to-b from-white/70 to-white/30 rounded-full border border-white/20 origin-top transform rotate-[15deg] animate-[wave_3s_ease-in-out_infinite]"></div>

                        {/* Right Arm */}
                        <div className="absolute top-14 sm:top-20 -right-2 sm:-right-4 w-6 sm:w-8 h-12 sm:h-16 bg-gradient-to-b from-white/70 to-white/30 rounded-full border border-white/20 origin-top transform -rotate-[10deg]"></div>

                        {/* Left Leg */}
                        <div className="absolute bottom-0 left-[20%] w-5 sm:w-7 h-10 sm:h-14 bg-gradient-to-b from-white/50 to-white/20 rounded-b-md border-x border-b border-white/20"></div>

                        {/* Right Leg */}
                        <div className="absolute bottom-0 right-[20%] w-5 sm:w-7 h-10 sm:h-14 bg-gradient-to-b from-white/50 to-white/20 rounded-b-md border-x border-b border-white/20"></div>
                    </div>

                    {/* Orbiting Satellite/Debris */}
                    <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite]">
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/40 rounded-full shadow-[0_0_5px_white]"></div>
                        <div className="absolute bottom-10 right-0 w-1.5 h-1.5 bg-[#00FF88]/50 rounded-full shadow-[0_0_10px_#00FF88]"></div>
                    </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 uppercase tracking-wide">
                    Lost in the void
                </h2>
                <p className="text-[#888888] text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    Hey! Looks like this page wandered off. Let's get you back home.
                </p>

                <Link href="/" className="relative inline-flex overflow-hidden group border border-[#00FF88] bg-transparent text-white hover:text-black transition-colors duration-300 font-bold uppercase tracking-widest text-sm px-10 py-5 rounded-sm">
                    <span className="relative z-10 flex items-center gap-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Return to Back Home
                    </span>
                    <div className="absolute inset-0 h-full w-full bg-[#00FF88] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 z-0"></div>
                </Link>
            </div>




        </div>
    );
}
