import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#000000] text-white px-6 sm:px-10 md:px-14 pt-20 pb-10 fi overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FF88] to-transparent opacity-40 shadow-[0_0_15px_#00FF88]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00FF88] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-60 h-60 bg-[#00FF88] opacity-[0.02] blur-[80px] rounded-full pointer-events-none" />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-16 mb-20">
          <div className="flex-col items-center group">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative hover:scale-105 transition-transform duration-500 will-change-transform">
                <Image src="/alienlogo.svg" alt="AlienNFT Logo" width={170} height={120} className="h-12 w-auto filter drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]" />
              </div>
            </div>
            <p className="text-white/80 max-w-sm text-[14.5px] leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              Merging art and utility. The definitive NFT collection for the modern digital era, beautifully crafted for the future.
            </p>
            <div className="flex items-center gap-5 space-x-2">
              <a href="#" className="relative p-2.5 rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:-translate-y-1 hover:text-[#1DA1F2] hover:shadow-[0_4px_20px_rgba(29,161,242,0.4)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="relative p-2.5 rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:-translate-y-1 hover:text-[#5865F2] hover:shadow-[0_4px_20px_rgba(88,101,242,0.4)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.057a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>

              <a href="#" className="relative p-2.5 rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:-translate-y-1 hover:text-white hover:shadow-[0_4px_20px_rgba(255,255,255,0.4)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a href="#" className="relative p-2.5 rounded-full bg-white/5 text-white/80 hover:bg-white/10 hover:-translate-y-1 hover:text-[#FF4500] hover:shadow-[0_4px_20px_rgba(255,69,0,0.4)] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 sm:gap-x-20 gap-y-12">
            <div>
              <p className="text-white font-semibold text-[16px] mb-6 tracking-wide">Explore</p>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "Roadmap", href: "/roadmap" },
                  { label: "Collection", href: "/404" },
                  { label: "Alienmarket", href: "/404" },
                  { label: "Resources", href: "/404" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="group flex items-center text-[#aaaaaa] text-[14px] hover:text-white transition-colors duration-300">
                      <span className="w-0 h-[1px] bg-[#00FF88] transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold text-[16px] mb-6 tracking-wide">Quick links</p>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "About us", href: "/about-us" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Contact us", href: "/404" },
                  { label: "Help Center", href: "/404" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="group flex items-center text-[#aaaaaa] text-[14px] hover:text-white transition-colors duration-300">
                      <span className="w-0 h-[1px] bg-[#00FF88] transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold text-[16px] mb-6 tracking-wide">Legal</p>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "Terms of service", href: "/terms-of-service" },
                  { label: "Privacy policy", href: "/privacy-policy" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="group flex items-center text-[#aaaaaa] text-[14px] hover:text-white transition-colors duration-300">
                      <span className="w-0 h-[1px] bg-[#00FF88] transition-all duration-300 group-hover:w-4 group-hover:mr-2"></span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 mt-12 mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-[14px] text-center md:text-left tracking-wide">
            &copy; {new Date().getFullYear()} AlienNFT. All rights reserved.
          </p>
          <p className="text-[#00FF88] text-[10px] text-center md:text-left tracking-wide">
            Inspired by Nickelfox Design
          </p>
        </div>
      </div>
    </footer>
  );
}