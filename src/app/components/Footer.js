import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#000000]/80 border border-[rgba(0,255,136,0.15)]/60 text-white px-6 sm:px-10 md:px-14 pt-14 pb-8 fi">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-14">


          <div className="flex items-center">
            <Image src="/alienlogo.svg" alt="AlienNFT Logo" width={170} height={120} className="h-10 w-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 sm:gap-x-16 md:gap-x-20 gap-y-10">

            <div>
              <p className="text-[#aaaaaa] text-[15px] mb-5">Explore</p>
              <ul className="flex flex-col gap-4">
                {["Roadmap", "Collection", "Alienmarket", "Resources"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white text-[13px] hover:text-[#aaaaaa] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#aaaaaa] text-[15px] mb-5">Quick links</p>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "About us", href: "/about" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Contact us", href: "/contact" },
                  { label: "Help Center", href: "/help" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white text-[13px] hover:text-[#aaaaaa] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#aaaaaa] text-[15px] mb-5">Legal</p>
              <ul className="flex flex-col gap-4">
                {[
                  { label: "Terms of service", href: "/terms" },
                  { label: "Privacy policy", href: "/privacy-policy" },
                  { label: "Cookie policy", href: "/cookies" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white text-[13px] hover:text-[#aaaaaa] transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-[#1a1a1a] pt-8">
          <p className="text-[#666666] text-[13px] sm:text-[15px] text-center">
            &copy; {new Date().getFullYear()} AlienNFT. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}