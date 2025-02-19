import MockupImage from "../assets/app-mockup-web.webp";
import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [heroIsLoaded, setHeroLoaded] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const heroUrl = MockupImage;
  const root = useRef();
  const heroTriggerRef = useRef(null);
  const heroImageRef = useRef(null);

  // This will run one time after the component mounts
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      setPageLoaded(true);
      console.log("page loaded");
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = heroUrl;
    img.onload = () => setHeroLoaded(true);
  }, [heroUrl]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const el = heroTriggerRef.current;

      gsap.fromTo(
        ".background",
        { yPercent: -0, autoAlpha: 0 },
        {
          yPercent: 0,
          duration: 1,
          autoAlpha: 1,
          ease: "sine.out",
        }
      );

      gsap.fromTo(
        ".box",
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          duration: 1.5,
          autoAlpha: 1,
          stagger: 0.2,
          ease: "sine.out",
          force3D: true,
          scrollTrigger: { trigger: el },
        }
      );

      gsap.fromTo(
        ".image",
        { x: 0, y: -70, autoAlpha: 0 },
        {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 1.5,
          autoAlpha: 1,
          ease: "sine.out",
          force3D: true,
        }
      );

      gsap.fromTo(
        ".float",
        {
          yPercent: -3,
          yoyo: true,
          duration: 1.5,
          repeat: -1,
        },
        {
          yPercent: 3,
          yoyo: true,
          duration: 1.5,
          repeat: -1,
          ease: "Sine.easeInOut",
        }
      );
    }, root);

    return () => ctx.revert();
  }, [pageLoaded, heroIsLoaded]);

  return (
    <div ref={root} className="">
      <div className="background invisible self-center bg-accentMuted flex md:min-h-hero-min md:h-hero-dynamic rounded-2xl py-6 px-8 md:px-12 mt-6">
        <section
          className="
              flex flex-col items-center gap-16
      
              md:flex-row md:justify-center md:items-center lg:gap-28 md:gap-16"
        >
          <header
            ref={heroTriggerRef}
            className="flex-1 flex flex-col md:gap-8 gap-6  "
          >
            <h1
              className={`${
                pageLoaded ? "box" : ""
              } invisible font-bold text-baseDark text-4xl md:text-5xl lg:text-6xl !leading-snug text-balance`}
            >
              Empower Your Church to Grow Together in{" "}
              <span className="bg-gradient-to-br from-primaryMain to-primaryDark bg-clip-text text-transparent">
                Discipleship
              </span>
            </h1>
            <p
              className={`${
                pageLoaded ? "box" : ""
              } invisible text-baseDar leading-loose text-lg md:text-xl text-balance text-center md:text-left`}
            >
              Discover the next generation of ministry technology—where biblical
              discipleship meets the power of AI.
            </p>
            <div className={`${pageLoaded ? "box" : ""} invisible`}>
              <a href="mailto:info@sandalsdisciple.com">
                <button
                  className=" flex items-center justify-between md:mx-0 mx-auto px-6 bg-baseLight rounded-full p-2 text-baseDark font-bold text-lg max-w-64 hover:bg-primaryMain hover:text-baseLight hover:-translate-y-1 transition-all duration-200"
                  aria-label="Download the app today"
                >
                  Get in touch today{" "}
                  <span className="ml-4">
                    <Rocket />
                  </span>
                </button>
              </a>
            </div>
          </header>
          <div
            ref={heroImageRef}
            className={`${
              heroIsLoaded ? "image" : ""
            } float invisible flex-1 md:max-w-md max-w-96`}
          >
            <img src={heroUrl} alt="Mockup of the app showcasing features" />
          </div>
        </section>
      </div>
    </div>
  );
}
