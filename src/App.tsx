import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Product from './components/Product';
import Benefits from './components/Benefits';
import Urgency from './components/Urgency';
import Offers from './components/Offers';
import Guarantee from './components/Guarantee';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Offers />
      <PainPoints />
      <Product />
      <Benefits />
      <Testimonials />
      <Urgency />
      <Offers />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
