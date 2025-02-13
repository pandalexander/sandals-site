import { useState } from "react";
import {
  Crosshair,
  Telescope,
  Map,
  Footprints,
  ArrowRight,
  CornerRightUp,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const [selectedMission, setSelectedMission] = useState(0);
  const missionData = [
    {
      title: "Our Mission",
      copy: "We partner with churches, ministries, and faith organizations to integrate discipleship into every aspect of their mission. We are driven by a deep desire to strengthen Christ’s bride—the Church in all its forms. Our goal is to provide modern tools and methods that equip both disciples and the ministries that train and send them.",

      icon: Crosshair,
    },
    {
      title: "Vision for Empowerment",
      copy: "We empower the global Church to fulfill the Great Commission through authentic biblical discipleship. Rather than replicating the God-honoring work of those who came before us, we recognize their contributions and are blessed to build upon their foundation. Our mission is to equip them with the tools and guidance they need to disciple with confidence.",
      icon: Telescope,
    },
    {
      title: "Our Guiding Principle",
      copy: "We are committed to ensuring that everything we do fosters authentic conversion through meaningful interpersonal relationships. We are driven to facilitate intentional spiritual growth while equipping shepherds to actively engage and guide their sheep.",
      icon: Map,
    },
    {
      title: "Why 'Sandals'?",
      copy: "The name Sandals reflects our walk in discipleship, following Christ’s command to go and make disciples with faith in God’s provision. Throughout Scripture, sandals symbolize being sent, God’s sustaining care, the sealing of redemption, and Christ’s unmatched authority, calling us to walk humbly in His footsteps.",
      icon: Footprints,
    },
  ];

  const root = useRef();
  const body = useRef();
  const animationInitialized = useRef(false); // Ref to track animation initialization

  useLayoutEffect(() => {
    if (!animationInitialized.current) {
      // Check if animation is already initialized
      let ctx = gsap.context(() => {
        gsap.fromTo(
          body.current,
          { autoAlpha: 0, x: "50vh" },
          {
            autoAlpha: 1,
            x: 0,
            ease: "sine.inOut",
            scrollTrigger: {
              trigger: body.current,
              start: "top bottom",
              end: "center-=20% center",
              scrub: true,
              markers: false,
            },
          }
        );
      }, []);
      animationInitialized.current = true; // Set ref to true after initialization
    }
  }, []);

  return (
    <>
      <div ref={root} className="w-full flex justify-center my-12">
        <div ref={body} className="invisible">
          <section
            className="w-full bg-gradient-to-br from-baseDark/90 to-baseDark rounded-2xl my-6 py-14 px-8 md:px-12
                  flex flex-col-reverse items-center gap-8

                  lg:flex-row lg:justify-center lg:items-start xl:gap-28 lg:gap-16
                  "
          >
            <header className="flex-1 lg:max-w-md w-full flex flex-col lg:gap-8 gap-6">
              {missionData.map((item, index) => {
                return (
                  <>
                    <button
                      onClick={() => setSelectedMission(index)}
                      className={`${
                        selectedMission == index
                          ? "bg-baseLight text-primaryDark"
                          : "bg-baseLight/70 text-accentTertiary"
                      }  flex justify-between items-center font-bold rounded-full px-4 py-2 hover:-translate-y-1 lg:hover:translate-x-1 lg:hover:translate-y-0 duration-300 transition-all ease-in-out text-center`}
                    >
                      <div className="flex gap-6 items-center text-left">
                        <item.icon className="min-w-6 min-h-6" />
                        <span className="text-primaryDark">{item.title}</span>
                      </div>
                      <span className="hidden lg:block">
                        <ArrowRight
                          className={`${
                            selectedMission == index
                              ? " text-primaryDark opacity-100"
                              : "opacity-0"
                          } `}
                        />
                      </span>
                      <span className="block lg:hidden">
                        <CornerRightUp
                          className={`${
                            selectedMission == index
                              ? " text-primaryDark opacity-100"
                              : "opacity-0"
                          } `}
                        />
                      </span>
                    </button>
                  </>
                );
              })}
            </header>
            <div className="md:h-60 h-96 flex items-center lg:flex-1 text-baseLight leading-loose font-semibold text-lg">
              <p>{missionData[selectedMission].copy}</p>
            </div>
          </section>{" "}
        </div>
      </div>
    </>
  );
};

export default Mission;
