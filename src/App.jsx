import Hero from "./components/Hero";
import Services from "./components/Services";
import ScrollSection from "./components/ScrollSection";
import Navbar from "./components/Navbar";
import CorePrinciples from "./components/CorePrinciples";

import WhyDisciple from "./components/WhyDisciple";
import Mission from "./components/Mission";
import CTA from "./components/CTA";

import Footer from "./components/Footer";
// import ServicesWithPhotos from "./components/ServiceSectionPhotos";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-stretch">
        <Hero />
        <ScrollSection />
        <WhyDisciple />
        <Mission />

        <CorePrinciples />

        <Services />
        <CTA />
        {/* <ServicesWithPhotos /> */}

        <Footer />
      </div>
    </>
  );
}

export default App;
