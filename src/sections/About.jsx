import React from "react";
import { Layout, Brain, Code, TrendingUp } from "lucide-react";
import SmallCard from "../components/SmallCard";

const About = () => {
  const aboutCards = [
    {
      icon: Layout,
      title: "UI Clarity",
      description:
        "Designing interfaces that are simple, structured, and easy to understand.",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description:
        "Breaking down requirements into practical and scalable solutions.",
    },
    {
      icon: Code,
      title: "Code Quality",
      description:
        "Writing clean, readable code that is easy to maintain and extend.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description:
        "Improving through consistent practice and real-world projects.",
    },
  ];
  return (
    <section
      id="about"
      className=" mt-60 flex flex-col md:flex-row items-center justify-center flex-wrap relative min-h-screen px-6 md:px-20 gap-10 z-40 scroll-mt-32  "
    >
      {/* Content */}

      <div className="left flex-1 flex flex-col gap-6">
        <h2 className="text-xl font-semibold mb-6 title-text">About Me</h2>
        <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
          From <span className="title-text">banking</span> to building{" "}
          <span className="title-text">modern web </span>experiences
        </h2>

        <p className="mt-6 text-white/90 text-lg">
          Focused on clarity, usability, and interfaces that feel effortless.
        </p>

        <p className="text-white/70 text-sm leading-relaxed">
          I’m Ratna Priya, a frontend developer who transitioned from a decade
          in banking into web development, driven by an interest in how digital
          products work and how users interact with them.
        </p>

        <p className="text-white/70 text-sm leading-relaxed">
          I build with a focus on structure, clarity, and reliability — creating
          interfaces that are intuitive and easy to navigate.
        </p>

        <p className="text-white/70 text-sm leading-relaxed">
          Working with HTML, CSS, JavaScript, React, and Tailwind CSS, I focus
          on clean, maintainable code and continuously improve through hands-on
          projects.
        </p>
        <p className="mt-6 italic px-8 py-6 border rounded-lg bg-black border-cyan-700/50 shadow-[0_0_20px_rgba(34,211,238,0.2)] shadow-cyan-500/25 text-white leading-loose backdrop-blur-sm">
          "My goal is to build interfaces that are not just functional, but
          intuitive — where users don’t have to think twice to interact."
        </p>
      </div>
      <div className="right flex-1 grid grid-cols-2 gap-6">
        {aboutCards.map((card, index) => (
          <SmallCard
            key={index}
            icon={<card.icon />}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
