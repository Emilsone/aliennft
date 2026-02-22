
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-[#000000] py-16 lg:py-18 lg:px-8  ">
      <div className="rounded-t-xl overflow-hidden px-6 relative">
        <div className=" flex items-center justify-center mb-8">
          <Image src="/alienlogo.svg" alt="AlienNFT Logo" width={170} height={120} className="h-10 w-auto" />
        </div>
        <nav className="flex flex-col md:flex-row flex-wrap justify-center gap-x-12 gap-y-3 text-white/85 font-semibold hover:text-white no-underline uppercase" aria-label="Footer">
          <a href="#" className="">Home</a>
          <a href="#" className="">About</a>
          <a href="#" className="">Blog</a>
          <a href="#" className="">Privacy Policy</a>
          <a href="#" className="">Contact</a>
        </nav>
        <p className="text-center pt-8 capitalize">&copy; {new Date().getFullYear()} AlienNFT  All rights reserved.</p>


      </div>
    </footer>
  );
}
