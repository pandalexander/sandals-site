import MockupImage from "../assets/app-mockup.png";

export default function Hero() {
  return (
    <section
      className="self-center max-w-7xl bg-accentMuted rounded-2xl my-6 mx-3 py-14 px-8 md:px-12
            flex flex-col items-center gap-16
        
            md:flex-row md:justify-center md:items-center lg:gap-28 md:gap-16"
    >
      <header className=" flex-1 flex flex-col md:gap-8 gap-6">
        <h1 className="font-bold text-baseDark text-4xl md:text-5xl lg:text-6xl leading-relaxed text-balance">
          Empower Your Church to Grow Together in{" "}
          <span className="bg-gradient-to-br from-primaryMain to-primaryDark bg-clip-text text-transparent">
            Discipleship
          </span>
        </h1>
        <p className="text-baseDark leading-loose text-lg md:text-xl text-balance">
          Discover the next generation of ministry technology—where biblical
          discipleship meets the power of AI.
        </p>
        <button
          className="md:mx-0 mx-auto px-6 bg-baseLight rounded-full p-2 text-baseDark font-bold text-lg max-w-64 hover:bg-primaryMain hover:text-baseLight hover:-translate-y-1 transition-all duration-200"
          aria-label="Download the app today"
        >
          Get the app today 🚀
        </button>
      </header>
      <div className="flex-1 md:max-w-md max-w-96 ">
        <img
          src={MockupImage}
          alt="Mockup of the app showcasing features"
          loading="lazy"
          className=""
        />
      </div>
    </section>
  );
}
