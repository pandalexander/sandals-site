import PropTypes from "prop-types";

function Principle({ number, paragraph }) {
  return (
    <div className="flex min-w-fit justify-between items-center gap-8 p-8 border-primaryMain bg-white border-[1px] text-primaryMain hover:text-amber-500 transition-all duration-300 ease-in-out hover:cursor-default">
      <h1 className="font-accent text-5xl ">{number}</h1>

      <p className="text-primaryDark text-right">{paragraph}</p>
    </div>
  );
}

Principle.propTypes = {
  number: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

const WhyDisciple = () => {
  return (
    <>
      <div className="self-center max-w-7xl mx-3 mt-12">
        <h1 className="text-center my-6 text-primaryDark">Why Disciple?</h1>

        <div className="flex">
          <div className="self-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-6 md:grid-rows-3 xl:grid-rows-2 items-stretch flex-1  my-6 border-[0.5px] border-primaryMain text-balance">
            <Principle
              number={"1%"}
              paragraph={
                "Only 1% of pastors say, “today’s churches are doing very well at discipling new and young believers.” "
              }
            />{" "}
            <Principle
              number={"60%"}
              paragraph={
                '60% of pastors feel that churches are discipling "not too well".'
              }
            />{" "}
            <Principle
              number={"<1%"}
              paragraph={
                "Less than 1% of leaders report using a survey or other evaluation instrument to assess the results of their programs."
              }
            />{" "}
            <Principle
              number={"0.5%"}
              paragraph={
                "Less than 0.5% of adults ages 18-23 have a biblical worldview, compared to about one out of every nine older adults."
              }
            />{" "}
            <Principle
              number={"2%"}
              paragraph={
                "Just 2% of American parents of preteens have a biblical worldview."
              }
            />{" "}
            <Principle
              number={"<10%"}
              paragraph={
                'Less than 10% of born-again Christian parents have "any kind of spiritual development plan for their kids."'
              }
            />{" "}
          </div>
        </div>
        <div className="flex flex-col text-right">
          <cite>
            Barna: New Research on the State of Discipleship, December 2015
          </cite>
          <cite>
            Christian Worldview Crisis? Dr.George Barna Reveals Disturbing
            Reality Behind Shocking Faith Stats, October 2023
          </cite>
        </div>
      </div>
    </>
  );
};

export default WhyDisciple;
