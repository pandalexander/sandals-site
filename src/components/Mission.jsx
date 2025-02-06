import { useState } from "react";
import {
  Crosshair,
  Telescope,
  Map,
  Footprints,
  ArrowRight,
  CornerRightUp,
} from "lucide-react";

const Mission = () => {
  const [selectedMission, setSelectedMission] = useState(0);
  const missionData = [
    {
      title: "Our Mission",
      copy: "We partner with churches, ministries, and faith organizations to integrate discipleship into every aspect of their mission. At Sandals, we are driven by a deep desire to strengthen Christ’s bride—the Church in all its forms—by fostering a healthy, intentional, and authentic approach to biblical discipleship. Our goal is to provide modern tools and methods that equip both disciples and the ministries that train and send them.",
      icon: Crosshair,
    },
    {
      title: "Vision for Empowerment",
      copy: "We empower the global Church to fulfill the Great Commission through authentic biblical discipleship. Rather than replicating the God-honoring work of those who came before us, we recognize their contributions and are blessed to build upon their foundation. While many Christians understand the importance of discipleship, they often hesitate because they do not know where to begin. Our mission is to equip them with the tools and guidance they need to disciple with confidence.",
      icon: Telescope,
    },
    {
      title: "Our Guiding Principle",
      copy: "We are committed to ensuring that everything we do fosters authentic conversion through meaningful interpersonal relationships. We are driven to facilitate intentional spiritual growth while equipping shepherds to actively engage and guide their sheep.",
      icon: Map,
    },
    {
      title: "Why 'Sandals'?",
      copy: "The name Sandals reflects our walk in discipleship, following Christ’s command to go and make disciples with faith in God’s provision. Throughout Scripture, sandals symbolize being sent, God’s sustaining care, the sealing of redemption, and Christ’s unmatched authority, calling us to walk humbly in His footsteps.",
      icon: Footprints,
    },
  ];
  return (
    <>
      <div className="w-full flex justify-center mt-12">
        <section
          className="w-full max-w-7xl bg-gradient-to-br from-baseDark/90 to-baseDark rounded-2xl my-6 mx-3 py-14 px-8 md:px-12
                flex flex-col-reverse items-center gap-8
          
                lg:flex-row lg:justify-center lg:items-start xl:gap-28 lg:gap-16
                "
        >
          <header className="flex-1 lg:max-w-md w-full flex flex-col lg:gap-8 gap-6">
            {missionData.map((item, index) => {
              return (
                <>
                  <button
                    onClick={() => setSelectedMission(index)}
                    className={`${
                      selectedMission == index
                        ? "bg-baseLight text-primaryDark"
                        : "bg-baseLight/70 text-accentTertiary"
                    }  flex justify-between items-center font-bold rounded-full px-4 py-2 hover:-translate-y-1 lg:hover:translate-x-1 lg:hover:translate-y-0 duration-300 transition-all ease-in-out text-center`}
                  >
                    <div className="flex gap-6 items-center text-left">
                      <item.icon className="min-w-6 min-h-6" />
                      <span className="text-primaryDark">{item.title}</span>
                    </div>
                    <span className="hidden lg:block">
                      <ArrowRight
                        className={`${
                          selectedMission == index
                            ? " text-primaryDark opacity-100"
                            : "opacity-0"
                        } `}
                      />
                    </span>
                    <span className="block lg:hidden">
                      <CornerRightUp
                        className={`${
                          selectedMission == index
                            ? " text-primaryDark opacity-100"
                            : "opacity-0"
                        } `}
                      />
                    </span>
                  </button>
                </>
              );
            })}
          </header>
          <div className="md:h-60 h-96 flex items-center lg:flex-1 text-baseLight leading-loose font-semibold text-lg">
            <p>{missionData[selectedMission].copy}</p>
          </div>
        </section>{" "}
      </div>
    </>
  );
};

export default Mission;
