import Header from './components/Header';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import NFTCollection from './components/NFTCollection';
import StorySection from './components/StorySection';
import Marketplace from './components/Marketplace';
import HolderBenefits from './components/HolderBenefits';
import TeamSection from './components/TeamSection';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function Home() {

  return (
    <div className="relative font-[family-name:var(--font-geist-sans)] bg-black overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none z-50"></div>

      <Header />
      <Hero />
      <HowWeWork />
      <NFTCollection />

      {/* Transition Matrix Separator */}
      <div className="w-full relative py-12 bg-black">
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FF88]/20 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00FF88] shadow-[0_0_15px_#00FF88]"></div>
      </div>

      <StorySection />

      {/* Spacer between Story and Marketplace */}
      <div className="w-full h-16 bg-black"></div>

      <Marketplace />

      {/* Spacer between Marketplace and Holder Benefits */}
      <div className="w-full h-16 bg-black"></div>

      <HolderBenefits />

      {/* Spacer between Holder Benefits and Team */}
      <div className="w-full h-16 bg-black"></div>

      <TeamSection />

      {/* Spacer between Team and FAQ */}
      <div className="w-full h-16 bg-black"></div>

      <FAQ />

      {/* Spacer between FAQ and Newsletter */}
      <div className="w-full h-16 bg-black"></div>

      <Newsletter />
      <Footer />
    </div>
  );
}
