// src/app/components/Footer.js
export default function Footer() {
  return (
<footer className="bg-[#000000] ">
  <div className="rounded-t-xl overflow-hidden px-6 py-16 lg:py-20 lg:px-8 relative">
    <nav className="flex flex-col md:flex-row flex-wrap justify-center gap-x-12 gap-y-3 text-neutral-100 font-semibold hover:text-white no-underline uppercase" aria-label="Footer">
      <a href="#" className="">Home</a>
      <a href="#" className="">About</a>
      <a href="#" className="">Collection</a>
      <a href="#" className="">Privacy Policy</a>
      <a href="#" className="">Contact</a>
    </nav>
    <p className="text-center pt-8">&copy; {new Date().getFullYear()} NFT Alien. All rights reserved.</p>
   

  </div>  
</footer>
  );
}
