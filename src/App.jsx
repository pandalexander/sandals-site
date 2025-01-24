import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="flex flex-col items-stretch">
        <Hero />
        <div id="services section" className="flex">
          <div className=" flex-1 flex justify-center">
            {/* These two divs define a full width container that use flexbox to justify the contents of the children to the center */}
            <div className="w-full max-w-7xl text-left mx-3">
              {/* This container is centered and has a max width of 7xl to keep it in line with the above hero image, but its background is full width */}{" "}
              <h2>Discipleship App </h2>
              <p>Description of discipleship app</p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold underline bg-primary">Hello world!</h1>
      <div className="bg-primaryMain text-baseLight">primaryMain</div>
      <div className="bg-primaryDark text-baseLight">primaryDark</div>
      <div className="bg-baseDark text-baseLight">baseDark</div>
      <div className="bg-baseLight">baseLight</div>
      <div className="bg-accentTertiary text-baseLight">accentTertiary</div>
      <div className="bg-accentMuted">accentMuted</div>
      <div className="bg-accentLight">accentLight</div>
      <div className="bg-highlight text-baseLight">highlight</div>
      <div className="text-5xl font-personality">personality font</div>
      <div className="text-3xl font-accent">accent</div>
      <div className="text-xl font-main">main font</div>
    </>
  );
}

export default App;
