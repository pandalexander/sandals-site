import AppIllustration from "../assets/app-watch.svg";
import { TabletSmartphone } from "lucide-react";

export default function Services() {
  return (
    <section id="services section" className="flex mt-12">
      <div className=" flex-1 flex justify-center">
        {/* Wrapper for the services section with a max width */}

        <div className="w-full max-w-7xl text-left mx-3">
          {/* Content container with responsive layout */}{" "}
          <div className="flex-col-reverse gap-12 md:flex-row flex items-center justify-center lg:gap-24 md:gap-12 px-6">
            <figure className="w-80 md:w-1/2 lg:p-8  ">
              <img
                src={AppIllustration}
                alt="Illustration of an app interface"
              />
            </figure>
            <article className="md:w-1/2 w-auto">
              <header className="flex items-center gap-6">
                <TabletSmartphone className=" text-primaryMain lg:min-w-12 lg:min-h-12 min-w-10 min-h-10" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryMain">
                  The App{" "}
                </h2>
              </header>
              <hr className="my-3 w-full h-2 border-0 rounded-xl  bg-highlight" />
              <h3 className="mb-2 ">
                Discipleship Made Simple, Seamless, and Scalable
              </h3>
              <p
                className=" lg:leading-normal md:leading-snug
                  leading-relaxed"
              >
                Our app equips individuals with a personalized discipleship
                journey through guided pathways for spiritual growth tailored to
                every stage of faith. Leverage AI insights to deepen your
                understanding of Scripture with powerful analysis and
                personalized recommendations. Explore the full Bible using a
                semantic search for topical studies and AI-generated insights.
                Build community effortlessly with integrated group messaging
                tools designed for teams and small groups.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
