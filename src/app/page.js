import Header from './components/Header';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import NFTCollection from './components/NFTCollection';
import StorySection from './components/StorySection';
import Footer from './components/Footer';

export default function Home() {

  return (
    <div className=" px-4 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <HowWeWork />
      <NFTCollection />
      <StorySection />
      <Footer />
    </div>
  );
}
