import {
  Hand,
  Brain,
  BookOpenCheck,
  HandHelping,
  Flame,
  Volume2,
  HandPlatter,
  Smile,
} from "lucide-react";
import PropTypes from "prop-types";

function Principle({ Icon, title, paragraph }) {
  return (
    <div
      className="min-w-fit
    p-6 flex flex-col gap-3 bg-accentMuted to-primaryDark text-baseDark rounded-2xl transition-all duration-300 ease-in-out hover:bg-baseLight hover:cursor-default border-accentMuted border-2 hover:border-primaryMain hover:shadow-lg"
    >
      <div className="flex gap-3">
        <Icon className={`min-w-6 min-h-6 `} />
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
      <div className="self-center max-w-7xl mx-3">
        <h1 className="text-center my-6">Our Core Principles</h1>
        <div className="flex">
          <div className="self-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch  gap-6 flex-1  rounded-2xl my-6">
            <Principle
              Icon={Hand}
              title={"Worship God"}
              paragraph={
                "Engage in authentic worship practices to connect deeply with God's presence."
              }
            />
            <Principle
              Icon={Brain}
              title={"Know Christ"}
              paragraph={
                "Grow in understanding and intimacy with Jesus, allowing Him to transform your life."
              }
            />{" "}
            <Principle
              Icon={BookOpenCheck}
              title={"Obey the Word"}
              paragraph={
                "Follow biblical teachings as a guide for living faithfully and righteously."
              }
            />{" "}
            <Principle
              Icon={HandHelping}
              title={"Pray Continuously"}
              paragraph={
                "Maintain an ongoing dialogue with God through prayer, seeking His guidance and strength."
              }
            />{" "}
            <Principle
              Icon={Flame}
              title={"Live in the Spirit"}
              paragraph={
                "Foster a relationship with the Holy Spirit to empower spiritual growth and maturity."
              }
            />{" "}
            <Principle
              Icon={Volume2}
              title={"Bear Witness"}
              paragraph={
                "Share your faith journey and Christ’s message authentically with others."
              }
            />{" "}
            <Principle
              Icon={HandPlatter}
              title={"Serve One Another"}
              paragraph={
                "Embrace servant leadership by supporting and uplifting fellow believers."
              }
            />{" "}
            <Principle
              Icon={Smile}
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
