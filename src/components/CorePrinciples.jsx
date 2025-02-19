import BearWitness from "../assets/BearWitness.svg";
import BeHoly from "../assets/BeHoly.svg";
import KnowChrist from "../assets/KnowChrist.svg";
import LiveSpirit from "../assets/LiveSpirit.svg";
import ObeyWord from "../assets/ObeyWord.svg";
import Pray from "../assets/Pray.svg";
import ServeOthers from "../assets/ServeOthers.svg";
import WorshipGod from "../assets/WorshipGod.svg";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
gsap.registerPlugin(ScrollTrigger);

function Principle({ Icon, title, paragraph }) {
  return (
    <div className="animate-card">
      <div
        className=" min-w-fit
      p-6 flex flex-col gap-3 bg-baseLight to-primaryDark text-baseDark rounded-2xl transition-transform duration-300 ease-in-out hover:bg-baseLight hover:cursor-default border-accentMuted border-2 hover:border-primaryMain hover:shadow-xl hover:-translate-y-1"
      >
        <div className="flex items-center justify-start gap-4">
          <div className="h-12 w-12 flex justify-center items-center p-1">
            <img src={Icon} alt="" className={`min-w-2 min-h-2`} />
          </div>
          <h3>{title}</h3>
        </div>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

Principle.propTypes = {
  Icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

const CorePrinciples = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const root = useRef();
  const title = useRef();
  const cardContainer = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".animate-card");

      if (!isMobile) {
        gsap.fromTo(
          title.current,
          { autoAlpha: 0, x: "-50vw" },
          {
            x: 0,
            autoAlpha: 1,
            ease: "power1.inOut",
            duration: 1.5,
            scrollTrigger: {
              trigger: title.current, // Use el.current here as well
              start: "bottom bottom",
              scrub: false,
              markers: false,
            },
          }
        );

        gsap.fromTo(
          cards, // Target ALL boxes selected by '.animate-box'
          { autoAlpha: 0, y: "100vh", rotate: -270 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.2,
            rotate: 0,
            ease: "power1.inOut",
            duration: 2,
            scrollTrigger: {
              trigger: cardContainer.current, // Use el.current here as well
              start: "top bottom",
              scrub: false,
              markers: false,
            },
          }
        );
      } else {
        gsap.fromTo(
          title.current,
          { autoAlpha: 0, x: "-50vw" },
          {
            x: 0,
            autoAlpha: 1,
            ease: "power1.inOut",
            duration: 1.5,
            scrollTrigger: {
              trigger: title.current, // Use el.current here as well
              start: "bottom bottom",
              scrub: false,
              markers: false,
            },
          }
        );

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              x: "25vw",
              rotation: -15,
              autoAlpha: 0,
              force3D: true,
            }, // Target ALL boxes selected by '.animate-box'
            {
              x: 0,
              rotation: 0,
              autoAlpha: 1,
              duration: 1.5,
              ease: "elastic.out(1,0.3)",
              force3D: true,
              scrollTrigger: {
                trigger: card, // Use el.current here as well
                start: "bottom bottom",
                scrub: false,
                markers: false,
              },
            }
          );
        });
      }
    }, root);

    return () => {
      ctx.revert();
    };
  }, [isMobile]);

  return (
    <>
      <div ref={root} className="self-center my-12">
        <h1
          ref={title}
          className="text-center my-6 text-primaryDark text-balance"
        >
          The Eight Facets of Spiritual Maturity
        </h1>
        <div ref={cardContainer} className="flex">
          <div className="self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch  gap-6 flex-1  rounded-2xl my-6">
            <Principle
              Icon={WorshipGod}
              title={"Worship God"}
              paragraph={
                "Engage in authentic worship practices to connect deeply with God's presence."
              }
            />
            <Principle
              Icon={KnowChrist}
              title={"Know Christ"}
              paragraph={
                "Grow in understanding and intimacy with Jesus, allowing Him to transform your life."
              }
            />{" "}
            <Principle
              Icon={ObeyWord}
              title={"Obey the Word"}
              paragraph={
                "Follow biblical teachings as a guide for living faithfully and righteously."
              }
            />{" "}
            <Principle
              Icon={Pray}
              title={"Pray Continuously"}
              paragraph={
                "Maintain an ongoing dialogue with God through prayer, seeking His guidance and strength."
              }
            />{" "}
            <Principle
              Icon={LiveSpirit}
              title={"Live in the Spirit"}
              paragraph={
                "Foster a relationship with the Holy Spirit to empower spiritual growth and maturity."
              }
            />{" "}
            <Principle
              Icon={BearWitness}
              title={"Bear Witness"}
              paragraph={
                "Share your faith journey and Christ’s message authentically with others."
              }
            />{" "}
            <Principle
              Icon={ServeOthers}
              title={"Serve One Another"}
              paragraph={
                "Embrace servant leadership by supporting and uplifting fellow believers."
              }
            />{" "}
            <Principle
              Icon={BeHoly}
              title={"Be Holy"}
              paragraph={
                "Strive for holiness as a reflection of God's character, separating from worldly influences."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CorePrinciples;
