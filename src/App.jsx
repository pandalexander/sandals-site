import Hero from "./components/Hero";
import Services from "./components/Services";
import ScrollSection from "./components/ScrollSection";
import Navbar from "./components/Navbar";
import CorePrinciples from "./components/CorePrinciples";
import WhyDisciple from "./components/WhyDisciple";
import Mission from "./components/Mission";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

// import ServicesWithPhotos from "./components/ServiceSectionPhotos";

function App() {
  return (
    <>
      <div className="lg:h-screen flex flex-col">
        {" "}
        {/* Apply h-screen on large screens and above */}
        <Navbar />
        <Element name="home" className="mx-3 max-w-7xl my-auto self-center">
          <Hero />
        </Element>
      </div>

      {/* <Navbar /> */}

      <div className="flex justify-center">
        <div className="flex flex-col items-stretch max-w-7xl mx-3">
          {/* <Element name="home">
            <Hero />
          </Element> */}
          <ScrollSection />
          <WhyDisciple />
          <Element name="about">
            <Mission />
          </Element>
          <CorePrinciples />
          <Element name="services">
            <Services />
          </Element>
          <Element name="contact">
            <CTA />
          </Element>
          {/* <ServicesWithPhotos /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
