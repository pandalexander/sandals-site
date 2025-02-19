import PropTypes from "prop-types";
import { CircleAlert, TreeDeciduous } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect, useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollSection() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const root = useRef();
  const typewriter = useRef();
  const cardContainer = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".animate-card");

      // Common settings for both mobile and desktop
      const triggerSettings = {
        trigger: root.current,
        start: "top 80%", // This is more reliable across devices
        end: "bottom top",
        markers: true,
        invalidateOnRefresh: true, // Add this
        fastScrollEnd: true, // Add this for better mobile performance
      };

      gsap.fromTo(
        typewriter.current,
        { autoAlpha: 0, y: "-30px" },
        {
          y: 0,
          autoAlpha: 1,
          ease: "power1.inOut",
          duration: 1,
          scrollTrigger: triggerSettings,
        }
      );

      gsap.fromTo(
        cards,
        { autoAlpha: 0, x: isMobile ? "-50vw" : "-100vw", rotate: 45 },
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.2,
          rotate: 0,
          ease: "power1.inOut",
          duration: isMobile ? 1.5 : 2,
          scrollTrigger: triggerSettings,
        }
      );
    }, root);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, [isMobile]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      ScrollTrigger.refresh();
    });

    if (root.current) {
      resizeObserver.observe(root.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (isMobile) {
      // Small delay to ensure layout is complete on mobile
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <div ref={root} className="relative w-full overflow-visible">
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
