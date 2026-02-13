import Header from './components/Header';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import Footer from './components/Footer';

export default function Home() {

  return (
    <div className=" px-4 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <HowWeWork />
      <Footer />
    </div>
  );
}
