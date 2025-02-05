import MockupImage from "../assets/app-mockup.png";
import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";
export default function Hero() {
  const [heroIsLoaded, setHeroLoaded] = useState(false);

  const heroUrl = MockupImage;

  useEffect(() => {
    const img = new Image();
    img.src = heroUrl;
    img.onload = () => setHeroLoaded(true);
  }, [heroUrl]);

  return (
    <section
      className="self-center max-w-7xl bg-accentMuted rounded-2xl my-6 mx-3 py-14 px-8 md:px-12
            flex flex-col items-center gap-16
        
            md:flex-row md:justify-center md:items-center lg:gap-28 md:gap-16"
    >
      <header className=" flex-1 flex flex-col md:gap-8 gap-6">
        <h1 className="font-bold text-baseDark text-4xl md:text-5xl lg:text-6xl !leading-snug text-balance">
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
          className="flex items-center justify-between md:mx-0 mx-auto px-6 bg-baseLight rounded-full p-2 text-baseDark font-bold text-lg max-w-64 hover:bg-primaryMain hover:text-baseLight hover:-translate-y-1 transition-all duration-200"
          aria-label="Download the app today"
        >
          Get the app today{" "}
          <span className="ml-4">
            <Rocket />
          </span>
        </button>
      </header>
      <div className="flex-1 md:max-w-md max-w-96 ">
        <img
          src={heroUrl}
          alt="Mockup of the app showcasing features"
          className={`${
            heroIsLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-9"
          } transition-all duration-700 ease-in-out`}
        />
      </div>
    </section>
  );
}
