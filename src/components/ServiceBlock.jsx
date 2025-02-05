import PropTypes from "prop-types";

export default function ServiceBlock({
  image,
  imageAlt,
  title,
  subheading,
  Icon,
  paragraphContent,
  imageOnLeft,
}) {
  return (
    <section id="services section" className="flex my-12">
      {/* Wrapper for the services section with a max width */}
      <div className=" flex-1 flex justify-center ">
        <div className="w-full max-w-7xl text-left mx-3 ">
          {/* Content container with responsive layout */}{" "}
          <div
            className={`${
              imageOnLeft ? "flex-col-reverse" : "flex-col"
            } gap-12 md:flex-row flex items-center justify-center lg:gap-24 md:gap-12 px-6`}
          >
            {imageOnLeft && (
              <figure className="w-80 md:w-1/2 lg:p-8  ">
                <img src={image} alt={imageAlt} />
              </figure>
            )}

            <article className="md:w-1/2 w-auto">
              <header className="flex items-center gap-6">
                <Icon className=" text-primaryMain lg:min-w-12 lg:min-h-12 min-w-10 min-h-10" />

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryMain">
                  {title}
                </h2>
              </header>
              <hr className="my-3 w-full h-2 border-0 rounded-xl  bg-highlight" />
              <h3 className="my-6">{subheading}</h3>
              <p
                className=" lg:leading-loose
                    leading-relaxed"
              >
                {paragraphContent}
              </p>
            </article>
            {!imageOnLeft && (
              <figure className="w-80 md:w-1/2 lg:p-8  ">
                <img src={image} alt={imageAlt} />
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

ServiceBlock.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
  paragraphContent: PropTypes.string.isRequired,
  imageOnLeft: PropTypes.bool.isRequired,
};
