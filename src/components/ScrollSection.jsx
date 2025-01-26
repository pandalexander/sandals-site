import PropTypes from "prop-types";

export default function ScrollSection(props) {
  return (
    <div>
      <section
        id="scroll-wheel"
        className="flex my-12 bg-primaryMain justify-center
          "
      >
        {/* Wrapper for the services section with a max width */}
        <div className="w-full max-w-7xl text-center mx-3">
          {/* Content container with responsive layout */}
          <h2 className="text-4xl md:text-6xl my-6 text-accentLight">
            Discipleship is not...
          </h2>
          <div className="overflow-hidden my-6 py-4 bg-accentLight rounded-xl mx-6 flex ">
            <ul className="flex gap-10 text-primaryMain tracking-wider font-accent  animate-infinite-scroll">
              {[...props.notDiscipleshipList, ...props.notDiscipleshipList].map(
                (item, index) => {
                  return (
                    <li className="text-nowrap font-bold " key={index}>
                      {item}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

ScrollSection.propTypes = {
  notDiscipleshipList: PropTypes.array.isRequired,
};
