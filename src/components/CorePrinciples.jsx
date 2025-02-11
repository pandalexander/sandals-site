import BearWitness from "../assets/BearWitness.svg";
import BeHoly from "../assets/BeHoly.svg";
import KnowChrist from "../assets/KnowChrist.svg";
import LiveSpirit from "../assets/LiveSpirit.svg";
import ObeyWord from "../assets/ObeyWord.svg";
import Pray from "../assets/Pray.svg";
import ServeOthers from "../assets/ServeOthers.svg";
import WorshipGod from "../assets/WorshipGod.svg";

import PropTypes from "prop-types";

function Principle({ Icon, title, paragraph }) {
  return (
    <div
      className="min-w-fit
    p-6 flex flex-col gap-3 bg-baseLight to-primaryDark text-baseDark rounded-2xl transition-all duration-300 ease-in-out hover:bg-baseLight hover:cursor-default border-accentMuted border-2 hover:border-primaryMain hover:shadow-xl"
    >
      <div className="flex items-center justify-start gap-4">
        <div className="h-12 w-12 flex justify-center items-center p-1">
          <img src={Icon} alt="" className={`min-w-2 min-h-2`} />
        </div>
        <h3>{title}</h3>
      </div>
      <p>{paragraph}</p>
    </div>
  );
}

Principle.propTypes = {
  Icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

const CorePrinciples = () => {
  return (
    <>
      <div className="self-center my-12">
        <h1 className="text-center my-6 text-primaryDark text-balance">
          The Eight Facets of Spiritual Maturity
        </h1>
        <div className="flex">
          <div className="self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch  gap-6 flex-1  rounded-2xl my-6">
            <Principle
              Icon={WorshipGod}
              title={"Worship God"}
              paragraph={
                "Engage in authentic worship practices to connect deeply with God's presence."
              }
            />
            <Principle
              Icon={KnowChrist}
              title={"Know Christ"}
              paragraph={
                "Grow in understanding and intimacy with Jesus, allowing Him to transform your life."
              }
            />{" "}
            <Principle
              Icon={ObeyWord}
              title={"Obey the Word"}
              paragraph={
                "Follow biblical teachings as a guide for living faithfully and righteously."
              }
            />{" "}
            <Principle
              Icon={Pray}
              title={"Pray Continuously"}
              paragraph={
                "Maintain an ongoing dialogue with God through prayer, seeking His guidance and strength."
              }
            />{" "}
            <Principle
              Icon={LiveSpirit}
              title={"Live in the Spirit"}
              paragraph={
                "Foster a relationship with the Holy Spirit to empower spiritual growth and maturity."
              }
            />{" "}
            <Principle
              Icon={BearWitness}
              title={"Bear Witness"}
              paragraph={
                "Share your faith journey and Christ’s message authentically with others."
              }
            />{" "}
            <Principle
              Icon={ServeOthers}
              title={"Serve One Another"}
              paragraph={
                "Embrace servant leadership by supporting and uplifting fellow believers."
              }
            />{" "}
            <Principle
              Icon={BeHoly}
              title={"Be Holy"}
              paragraph={
                "Strive for holiness as a reflection of God's character, separating from worldly influences."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CorePrinciples;
