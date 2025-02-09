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

      <div className="flex justify-center">
        <div className="flex flex-col items-stretch max-w-7xl mx-3">
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
      </div>
    </>
  );
}

export default App;
