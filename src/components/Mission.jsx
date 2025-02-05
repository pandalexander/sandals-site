import { useState } from "react";
import {
  Crosshair,
  Telescope,
  Users,
  Nfc,
  ArrowRight,
  CornerRightUp,
} from "lucide-react";

const Mission = () => {
  const [selectedMission, setSelectedMission] = useState(0);
  const missionData = [
    {
      title: "Our Mission",
      copy: "At Sandals Discipleship Ministries, our mission is to partner with churches, ministries, and faith-based organizations to embed discipleship into their foundational practices. We are committed to helping congregations embody a holistic approach to spiritual growth that mirrors the early church’s communal life.",
      icon: Crosshair,
    },
    {
      title: "Vision for Partnerships",
      copy: 'By collaborating with various faith communities, we aim to foster environments where individuals can grow in Christ together, encouraging maturity through shared worship, teaching, and service. Our goal is to make discipleship an integral part of every believer\'s journey, enabling them to "grow in every way more and more like Christ" (Ephesians 4:15 NLT).',
      icon: Telescope,
    },
    {
      title: "Emphasizing Congregational Health",
      copy: "We understand the vital role that mature believers play in serving as stewards of God’s grace for the common good. By equipping leaders with the tools to nurture spiritual health within their communities, we enhance the ability of individuals and groups to thrive both spiritually and relationally.",
      icon: Users,
    },
    {
      title: "Reflecting Jesus’ Call to Discipleship",
      copy: 'We are inspired by Jesus\' call to "go and make disciples" (Matthew 28:19-20), encouraging a focus on teaching new believers, baptizing them, and supporting them in following Christ’s teachings. Our approach emphasizes the importance of community, active learning, and service as foundational elements of effective discipleship.',
      icon: Nfc,
    },
  ];
  return (
    <>
      <div className="w-full flex justify-center mb-12">
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
