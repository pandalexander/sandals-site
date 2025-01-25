import AppIllustration from "../assets/app-watch.svg";
import { TabletSmartphone } from "lucide-react";
import ServiceBlock from "./ServiceBlock";

export default function Services() {
  return (
    <section id="services section" className="flex mt-12">
      <div className=" flex-1 flex justify-center ">
        {/* Wrapper for the services section with a max width */}
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
    </section>
  );
}
