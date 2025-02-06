import { Footprints } from "lucide-react";

const CTA = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-12">
        <section
          className="w-full max-w-7xl bg-accentMuted rounded-2xl my-6 mx-3 py-14 px-8 md:px-12
                flex flex-col items-stretch gap-8
                "
        >
          <div className="flex items-center">
            <h1 className="font-bold text-primaryDark text-4xl md:text-5xl lg:text-6xl !leading-snug text-balance">
              Start Transforming Discipleship in Your Church&nbsp;
              <span className="bg-gradient-to-br from-primaryMain to-highlight bg-clip-text text-transparent">
                Today
              </span>
            </h1>
          </div>
          <div className="flex items-center lg:flex-1 text-primaryDark leading-loose font-semibold text-lg">
            <p>
              Equip your ministry with the tools to foster authentic spiritual
              growth, deepen community, and empower leaders. Join a movement
              that integrates biblical discipleship with cutting-edge
              technology.
            </p>
          </div>
          <button
            className="flex items-center justify-between md:mx-0 mx-auto px-6 bg-white rounded-full p-2 text-primaryDark font-bold text-lg max-w-64 hover:bg-white hover:text-highlight hover:-translate-y-1 transition-all duration-200"
            aria-label="Download the app today"
          >
            Get started today{" "}
            <span className="ml-4">
              <Footprints />
            </span>
          </button>
        </section>{" "}
      </div>
    </>
  );
};

export default CTA;
