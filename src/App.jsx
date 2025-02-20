import Hero from "./components/Hero";
import Services from "./components/Services";
import ScrollSection from "./components/ScrollSection";
import Navbar from "./components/Navbar";
import CorePrinciples from "./components/CorePrinciples";
import WhyDisciple from "./components/WhyDisciple";
import Mission from "./components/Mission";
import CTA from "./components/CTA";
// import Footer from "./components/Footer";
import { Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "@react-hook/media-query";

// import ServicesWithPhotos from "./components/ServiceSectionPhotos";

function App() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <>
      <Navbar className="sticky top-0 z-50" />

      {/* <Navbar /> */}

      <div className="flex justify-center">
        <div className="flex flex-col items-stretch max-w-7xl mx-3">
          {isMobile && (
            <>
              <Element name="home">
                <Hero />
              </Element>

              <Fade delay={0} triggerOnce fraction={0.4}>
                <ScrollSection />
              </Fade>

              <div className="lg:my-12"></div>

              <Fade triggerOnce delay={500}>
                <WhyDisciple />
              </Fade>

              <div className="lg:my-12"></div>

              <Element name="about">
                <Fade triggerOnce delay={500}>
                  <Mission />
                </Fade>
              </Element>
              <div className="lg:my-12"></div>

              <Fade triggerOnce delay={500}>
                <CorePrinciples />
              </Fade>

              <div className="lg:my-12"></div>

              <Element name="services">
                <Fade triggerOnce delay={500}>
                  <Services />
                </Fade>
              </Element>
              <div className="lg:my-12"></div>

              <Element name="contact">
                <Fade triggerOnce delay={500}>
                  <CTA />
                </Fade>
              </Element>
              {/* <ServicesWithPhotos /> */}
              {/* <Footer /> */}
            </>
          )}
          {!isMobile && (
            <>
              <Element name="home">
                <Hero />
              </Element>
              <ScrollSection />
              <div className="lg:my-12"></div>

              <WhyDisciple />
              <div className="lg:my-12"></div>

              <Element name="about">
                <Mission />
              </Element>
              <div className="lg:my-12"></div>

              <CorePrinciples />
              <div className="lg:my-12"></div>

              <Element name="services">
                <Services />
              </Element>
              <div className="lg:my-12"></div>

              <Element name="contact">
                <CTA />
              </Element>
              {/* <ServicesWithPhotos /> */}
              {/* <Footer /> */}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
