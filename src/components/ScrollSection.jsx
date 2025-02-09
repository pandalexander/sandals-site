import PropTypes from "prop-types";
import { CircleAlert, TreeDeciduous } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export default function ScrollSection() {
  return (
    <div>
      <section
        id="scroll-wheel"
        className="flex my-12  justify-center
          "
      >
        {/* Wrapper for the services section with a max width */}
        <div className="w-full text-center lg:text-left">
          {/* Content container with responsive layout */}
          <div className="flex lg:flex-row flex-col sm:justify-center lg:justify-start flex-wrap">
            <h2 className="text-5xl md:text-6xl mt-10 text-primaryDark text-wrap md:text-nowrap lg:my-10">
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
                  "men's group",
                  "women's group",
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
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </div>
          </div>

          {/* <h2 className="text-5xl md:text-6xl my-10 text-primaryDark">
            Discipleship is not...
          </h2>
          <div className="overflow-hidden mt-6 flex xl:rounded-full xl:mx-3">
            <ul className="flex gap-10 text-accentLight tracking-wider font-accent  animate-infinite-scroll">
              {[...props.notDiscipleshipList, ...props.notDiscipleshipList].map(
                (item, index) => {
                  return (
                    <li
                      className="text-nowrap font-bold bg-primaryMain rounded-full px-4 py-2 hover:cursor-default duration-300 transition-all hover:scale-95"
                      key={index}
                    >
                      {item}
                    </li>
                  );
                }
              )}
            </ul>
          </div> */}

          <div className="font-main text-left text-accentLight text-lg my-10 space-y-6 md:flex md:gap-6 md:justify-center md:items-stretch md:space-y-0">
            <div className="bg-primaryDark hover:bg-opacity-90 shadow-xl p-6 space-y-2 rounded-2xl hover:-translate-y-1 transition-all duration-300 ">
              <CircleAlert className="text-amber-600 w-6 h-6" />{" "}
              <p className="">
                While the efforts listed above can be valuable to believers and
                the church body as a whole, they should not be considered a
                replacement for authentic biblical discipleship.
              </p>
            </div>
            <div className="bg-accentMuted text-primaryDark hover:bg-opacity-90  p-6 space-y-2 rounded-2xl hover:-translate-y-1 transition-all duration-300">
              <TreeDeciduous className="text-primaryMain w-6 h-6" />{" "}
              <p className="">
                Biblical Discipleship is bringing people to Christ and leading
                them to maturity in him.{" "}
                <span className="text-highlight font-bold">
                  “growing in every way more and more like Christ”
                </span>{" "}
                -Ephesians 4:15 NLT
              </p>
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
