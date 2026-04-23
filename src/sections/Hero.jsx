import React from "react";
import download from "../assets/download.png";
import arrow from "../assets/arrow.png";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const Hero = () => {
  const techStack = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Firebase",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-20 flex flex-col items-center justify-center relative min-h-screen">
      {/* Content */}
      <div className="relative z-50 flex items-center justify-center gap-8 flex-col md:flex-row px-10 md:px-20">
        {/* LEFT */}
        <motion.div
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-3xl md:text-4xl leading-tight"
            variants={fadeInUp}
          >
            Crafting{" "}
            <span className="title-text">
              modern
            </span>{" "}
            web experiences with{" "}
            <span className="italic text-white/90 tracking-wider font-bodoni">
              precision
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-sm text-white/70 max-w-md"
            variants={fadeInUp}
          >
            Hi, I am Ratna Priya — a frontend developer with a background in
            banking, now focused on building modern, responsive web applications
            that are clean, intuitive, and user-focused.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-8 mt-10 w-full lg:w-auto"
            variants={fadeInUp}
          >
            {/* Get in Touch */}
            <a
              href="#contact"
              className="w-full md:w-auto justify-center
              px-6 py-3 rounded-full flex items-center gap-2 text-sm text-white
              bg-cyan-700/80 border border-cyan-500/40
              shadow-[0_0_15px_rgba(34,211,238,0.25)]
              transition-all duration-300
              hover:bg-cyan-600
              hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
              hover:-translate-y-0.5
              active:scale-95"
            >
              Get In Touch
              <img src={arrow} alt="arrow" className="w-4" />
            </a>

            {/* Download Resume */}
            <div className="relative inline-block w-full md:w-auto rounded-full p-px">
              <div className="absolute inset-0 rounded-full animate-border-move z-0"></div>

              <a
                href="/resume.pdf"
                download
                className="w-full md:w-auto justify-center
                relative z-10 px-5 py-3 text-sm md:text-xs
                bg-black text-white rounded-full flex items-center gap-2
                active:scale-95 transition-transform duration-200
                shadow-lg shadow-header/25
                focus-visible:ring-2 focus-visible:ring-header/50"
              >
                <img src={download} alt="Download Resume" className="w-5" />
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <div className="flex-1 ">
          <div className="img w-3/4 md:w-80 h-80 mx-auto rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.45)]">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <motion.div
        className="mt-16 md:mt-20 z-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        <h3 className="text-sm px-4 py-2 bg-black/60 border border-cyan-500/20 rounded-full text-white mb-6 text-center shadow-[0_0_20px_rgba(34,211,238,0.1)]">
          Technologies I work with
        </h3>

        <div className="flex flex-wrap gap-4 justify-center">
          {techStack.map((tech, index) => (
            <motion.span
              key={index}
              variants={fadeInUp}
              className="bg-black/50 text-cyan-300 px-3 py-1 rounded-full text-sm
              shadow-md shadow-header/25 transition-all duration-300
              hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
