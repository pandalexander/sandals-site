import PropTypes from "prop-types";
import { CircleAlert, TreeDeciduous } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
  const root = useRef();
  const typewriter = useRef();
  const cardContainer = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".animate-card");

      gsap.fromTo(
        typewriter.current,
        { autoAlpha: 0, x: "-100vw" },
        {
          x: 0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: typewriter.current, // Use el.current here as well
            start: "bottom bottom",
            end: "bottom center",
            scrub: true,
            markers: false,
          },
        }
      );

      gsap.fromTo(
        cards, // Target ALL boxes selected by '.animate-box'
        { autoAlpha: 0, x: "-100vw", rotate: 45 },
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.2,
          rotate: 0,
          scrollTrigger: {
            trigger: cardContainer.current, // Use el.current here as well
            start: "bottom bottom",

            end: "bottom center",
            scrub: true,
            markers: false,
          },
        }
      );
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root}>
      <section
        id="scroll-wheel"
        className="flex my-12  justify-center
          "
      >
        {/* Wrapper for the services section with a max width */}
        <div className="w-full text-center lg:text-left">
          {/* Content container with responsive layout */}
          <div
            ref={typewriter}
            className="invisible flex lg:flex-row flex-col sm:justify-center lg:justify-start flex-wrap"
          >
            <h2 className="header-trigger text-5xl md:text-6xl mt-10 text-primaryDark text-wrap md:text-nowrap lg:my-10">
              Discipleship is not&nbsp;
            </h2>
            <div className="font-personality text-5xl md:text-6xl my-10 text-primaryMain">
              <Typewriter
                words={[
                  "sunday service",
                  "bible studies",
                  "classes",
                  "programs",
                  "small group",
                  "retreats",
                  "men's groups",
                  "women's groups",
                  "youth ministries",
                  "recovery ministries",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                cursorBlinking={true}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>

          <div ref={cardContainer}>
            <div className=" font-main text-left text-accentLight text-lg my-10 space-y-6 md:flex md:gap-6 md:justify-center md:items-stretch md:space-y-0">
              <div className="animate-card">
                <div className=" bg-primaryDark hover:bg-opacity-90 shadow-xl p-6 space-y-2 rounded-2xl hover:-translate-y-1 transition-all duration-300 ">
                  <CircleAlert className="text-amber-600 w-6 h-6" />{" "}
                  <p className="">
                    While the efforts listed above can be valuable to believers
                    and the church body as a whole, they should not be
                    considered a replacement for authentic biblical
                    discipleship.
                  </p>
                </div>
              </div>
              <div className="animate-card">
                <div className=" bg-accentMuted text-primaryDark hover:bg-opacity-90  p-6 space-y-2 rounded-2xl hover:-translate-y-1 transition-all duration-300">
                  <TreeDeciduous className="text-primaryMain w-6 h-6" />{" "}
                  <p className="">
                    Biblical Discipleship is bringing people to Christ and
                    leading them to maturity in him.{" "}
                    <span className="text-highlight font-bold">
                      “growing in every way more and more like Christ”
                    </span>{" "}
                    -Ephesians 4:15 NLT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

ScrollSection.propTypes = {
  notDiscipleshipList: PropTypes.array.isRequired,
};
