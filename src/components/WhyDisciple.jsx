import PropTypes from "prop-types";
import { TextQuote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Principle({ number, paragraph }) {
  return (
    <div className="animate-box invisible flex min-w-fit justify-between items-center gap-8 p-8 border-primaryMain bg-white border-[1px] text-primaryMain hover:text-amber-500 transition-all duration-300 ease-in-out hover:cursor-text ">
      <h1 className="font-accent text-5xl ">{number}</h1>

      <p className="text-primaryDark text-right">{paragraph}</p>
    </div>
  );
}

Principle.propTypes = {
  number: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

const WhyDisciple = () => {
  const root = useRef();
  const title = useRef();
  const cardContainer = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".animate-box");

      gsap.fromTo(
        title.current,
        { autoAlpha: 0, x: "-100vw" },
        {
          x: 0,
          autoAlpha: 1,
          scrollTrigger: {
            trigger: title.current, // Use el.current here as well
            start: "bottom bottom",
            end: "top center",
            scrub: true,
            markers: false,
          },
        }
      );

      gsap.fromTo(
        cards, // Target ALL boxes selected by '.animate-box'
        { autoAlpha: 0, y: "15vw", rotate: 15 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.2,
          rotate: 0,
          scrollTrigger: {
            trigger: title.current, // Use el.current here as well
            start: "top bottom",
            end: "top top+=200px",
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
    <>
      <div ref={root} className="self-center mt-12">
        <h1 ref={title} className="text-center my-6 text-primaryDark">
          Why Disciple?
        </h1>

        <div className="flex ">
          <div
            ref={cardContainer}
            className="self-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-6 md:grid-rows-3 xl:grid-rows-2 items-stretch flex-1  mt-6 border-[0.5px] border-primaryMain text-balance"
          >
            <Principle
              number={"1%"}
              paragraph={
                "Only 1% of pastors say, “today’s churches are doing very well at discipling new and young believers.” "
              }
            />{" "}
            <Principle
              number={"60%"}
              paragraph={
                '60% of pastors feel that churches are discipling "not too well".'
              }
            />{" "}
            <Principle
              number={"<1%"}
              paragraph={
                "Less than 1% of leaders report using a survey or other evaluation instrument to assess the results of their programs."
              }
            />{" "}
            <Principle
              number={"0.5%"}
              paragraph={
                "Less than 0.5% of adults ages 18-23 have a biblical worldview, compared to about one out of every nine older adults."
              }
            />{" "}
            <Principle
              number={"2%"}
              paragraph={
                "Just 2% of American parents of preteens have a biblical worldview."
              }
            />{" "}
            <Principle
              number={"<10%"}
              paragraph={
                'Less than 10% of born-again Christian parents have "any kind of spiritual development plan for their kids."'
              }
            />{" "}
          </div>
        </div>
        <div className="flex flex-col mt-2 gap-2 md:items-end items-stretch text-right ">
          <cite className="bg-primaryMain/20 p-3 border-r-4 border-primaryMain text-primaryDark flex items-center justify-between gap-4">
            <TextQuote className="text-accentTertiary w-6 h-6 min-w-6 min-h-6 md:min-h-5 md:min-w-5 md:h-5 md:w-5" />
            Barna: New Research on the State of Discipleship, December 2015
          </cite>
          <cite className="bg-highlight/20 p-3 border-r-4 border-highlight text-primaryDark flex items-center justify-between gap-4">
            <TextQuote className="text-accentTertiary w-6 h-6 min-w-6 min-h-6 md:min-h-5 md:min-w-5 md:h-5 md:w-5" />
            Christian Worldview Crisis? Dr.George Barna Reveals Disturbing
            Reality Behind Shocking Faith Stats, October 2023
          </cite>
        </div>
      </div>
    </>
  );
};

export default WhyDisciple;
