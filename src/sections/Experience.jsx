import React from "react";

const Experience = () => {
  const journey = [
    {
      year: "2011 — 2023",
      title: "Banking Career",
      description:
        "Worked across various banking roles, developing strong analytical thinking, attention to detail, and a structured approach to problem-solving.",
      side: "left",
    },
    {
      year: "2023 — Present",
      title: "Transition to Web Development",
      description:
        "Shifted into frontend development, learning HTML, CSS, JavaScript, and React through consistent practice and hands-on projects.",
      side: "right",
    },
    {
      year: "2024 — Present",
      title: "Building Real-World Projects",
      description:
        "Developed applications like Trendikart and ClassConnect, focusing on responsive UI, real-world functionality, and clean architecture.",
      side: "left",
    },
  ];
  return (
    <section
      id="experience"
      className=" mt-60  relative min-h-screen px-20 gap-10 z-40 scroll-mt-30 "
    >
      <div className="text-center max-w-3xl mx-auto flex flex-col mb-20">
        <h2 className="text-xl  font-semibold mb-6 title-text">My Journey</h2>
        <h3 className="text-3xl md:text-4xl font-semibold leading-snug">
          My <span className="title-text">journey</span> into web development
        </h3>

        {/* Subheading */}
        <p className="mt-6 text-white/70 leading-relaxed">
          From banking to frontend development — a transition driven by
          curiosity, consistency, and real-world project building.
        </p>
      </div>
      
      <div className="relative min-h-screen  mt-20">
        <div className="journey">
          <div className="middle-line hidden  md:block absolute left-1/2 top-0 -translate-x-1/2  w-0.5  h-full bg-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]"></div>
          <div className="cards flex flex-col gap-10  relative z-10">
            {journey.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-0 md:gap-10 ${item.side === "left" ? "md:flex-row-reverse md:text-right" : " md:flex-row md:text-left"} w-full items-center justify-center`}
                >
                  <div className="blank w-1/2"></div>
                  <div className=" hidden md:block absolute left-1/2 -translate-x-1/2 dot w-4 h-4 bg-cyan-400  rounded-full border-3 border-black">
                    <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 dot w-2.5 h-2.5 bg-cyan-400  rounded-full animate-ping"></div>
                  </div>
                  <div
                    className="card  w-1/2md:w-full max-w-xl p-7 rounded-lg border border-cyan-700/30 bg-white/5 backdrop-blur-sm  hover:-translate-y-1 hover:shadow-[0_0px_15px_rgba(34,211,238,0.2)]
transition-all duration-300"
                  >
                    <p className="text-cyan-400 text-sm mb-2">{item.year}</p>
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
