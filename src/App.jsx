import Hero from "./components/Hero";
import Services from "./components/Services";
import ScrollSection from "./components/ScrollSection";
import Navbar from "./components/Navbar";
import CorePrinciples from "./components/CorePrinciples";

import WhyDisciple from "./components/WhyDisciple";
import Mission from "./components/Mission";
import CTA from "./components/CTA";

import Footer from "./components/Footer";
import ServicesWithPhotos from "./components/ServiceSectionPhotos";

function App() {
  const notDiscipleshipList = [
    "Sunday Service",
    "Bible Studies",
    "Classes",
    "Programs",
    "Small Group",
    "Retreats",
    "Men's Groups",
    "Women's Groups",
    "Youth Ministries",
    "Recovery Ministries",
  ];

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-stretch">
        <Hero />
        <ScrollSection notDiscipleshipList={notDiscipleshipList} />
        <WhyDisciple />
        <Mission />

        <CorePrinciples />

        <Services />
        <CTA />
        <ServicesWithPhotos />

        <Footer />
      </div>

      {/* <h1 className="text-3xl font-bold underline bg-primary">Hello world!</h1>
      <div className="bg-primaryMain text-baseLight">primaryMain</div>
      <div className="bg-primaryDark text-baseLight">primaryDark</div>
      <div className="bg-baseDark text-baseLight">baseDark</div>
      <div className="bg-baseLight">baseLight</div>
      <div className="bg-accentTertiary text-baseLight">accentTertiary</div>
      <div className="bg-accentMuted">accentMuted</div>
      <div className="bg-accentLight">accentLight</div>
      <div className="bg-highlight text-baseLight">highlight</div>
      <div className="text-5xl font-personality">personality font</div>
      <div className="text-3xl font-accent">accent</div>
      <div className="text-xl font-main">main font</div> */}
    </>
  );
}

export default App;
