import AppIllustration from "../assets/app-watch.svg";
import PortalIllustration from "../assets/dashboard.svg";
import ResouceIllustration from "../assets/visionary-technology.svg";
import { TabletSmartphone, LayoutDashboard, Activity } from "lucide-react";
import ServiceBlock from "./ServiceBlock";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useLayoutEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const root = useRef();
  const title = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cardsRight = gsap.utils.toArray(".animate-from-right");
      const cardsLeft = gsap.utils.toArray(".animate-from-left");

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
              start: "center bottom",
              scrub: false,
              markers: false,
            },
          }
        );

        cardsRight.forEach((card) => {
          gsap.fromTo(
            card, // Target ALL boxes selected by '.animate-box'
            { autoAlpha: 0, x: "50vw" },
            {
              autoAlpha: 1,
              x: 0,
              stagger: 0.2,
              rotate: 0,
              ease: "elastic.out(1,0.5)",
              duration: 2,
              scrollTrigger: {
                trigger: card, // Use el.current here as well
                start: "center bottom",
                scrub: false,
                markers: false,
              },
            }
          );
        });

        cardsLeft.forEach((card) => {
          gsap.fromTo(
            card, // Target ALL boxes selected by '.animate-box'
            { autoAlpha: 0, x: "-50vw" },
            {
              autoAlpha: 1,
              x: 0,
              stagger: 0.2,
              rotate: 0,
              ease: "elastic.out(1,0.5)",
              duration: 2,
              scrollTrigger: {
                trigger: card, // Use el.current here as well
                start: "center bottom",
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
      <div ref={root} className="mt-12">
        <h1 ref={title} className="text-center text-primaryDark">
          Our Tools for Discipleship
        </h1>

        <div className="animate-from-right">
          <ServiceBlock
            image={AppIllustration}
            imageAlt={"Illustration of an app interface"}
            title={"The App"}
            subheading={"Discipleship Made Simple, Seamless, and Scalable"}
            Icon={TabletSmartphone}
            paragraphContent={
              "Our app equips individuals with a personalized discipleship journey through guided pathways for spiritual growth tailored to every stage of faith. Leverage AI insights to deepen your understanding of Scripture with powerful analysis and personalized recommendations. Explore the full Bible using a semantic search for topical studies and AI-generated insights. Build community effortlessly with integrated group messaging tools designed for teams and small groups."
            }
            imageOnLeft={true}
          />
        </div>
        <div className="animate-from-left">
          <ServiceBlock
            image={PortalIllustration}
            imageAlt={"Illustration of a dashboard interface"}
            title={"Shepherding Portal"}
            subheading={"Empower Leaders with Actionable Insights"}
            Icon={LayoutDashboard}
            paragraphContent={
              "The Shepherding Portal transforms raw data from congregational engagement into meaningful insights by leveraging AI-powered analytics to help you understand spiritual growth trends within your congregation. It offers decision-making tools that provide recommendations to support strategic discipleship initiatives and customizable dashboards that allow you to tailor reports to your ministry’s specific needs."
            }
            imageOnLeft={false}
          />
        </div>

        <div className="animate-from-right">
          <ServiceBlock
            image={ResouceIllustration}
            imageAlt={"Illustration of complex technology"}
            title={"Resources & Support"}
            subheading={
              "Everything You Need to Cultivate a Discipleship-Driven Culture"
            }
            Icon={Activity}
            paragraphContent={
              "Seamlessly integrate our tools with tailored onboarding and training support for your ministry team. Access a comprehensive library of discipleship curriculum featuring biblical resources aligned with eight core spiritual growth areas. Empower your leaders through conferences and coaching designed to equip them with the knowledge and skills for impactful discipleship."
            }
            imageOnLeft={true}
          />
        </div>
      </div>{" "}
    </>
  );
}
