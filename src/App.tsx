import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import LocalSEO from './components/LocalSEO';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <LocalSEO />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
