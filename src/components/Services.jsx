import AppIllustration from "../assets/app-watch.svg";
import PortalIllustration from "../assets/dashboard.svg";
import ResouceIllustration from "../assets/visionary-technology.svg";

import { TabletSmartphone, LayoutDashboard, Activity } from "lucide-react";
import ServiceBlock from "./ServiceBlock";

export default function Services() {
  return (
    <>
      <div className="mt-12">
        <h1 className="text-center text-primaryDark">
          Our Tools for Discipleship
        </h1>

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
      </div>{" "}
    </>
  );
}
