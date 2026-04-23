import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`group relative rounded-xl overflow-hidden border border-cyan-700/50 bg-black/40 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-shadow duration-300 ${
        isFeatured ? "lg:col-span-2 flex flex-col lg:flex-row" : "flex flex-col"
      }`}
    >
      {/* Image Section */}
      <div
        className={`image relative overflow-hidden ${isFeatured ? "w-full lg:w-3/5 h-64 lg:h-auto" : "w-full h-56"}`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="overlay absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-all duration-300"></div>
      </div>

      {/* Content Section */}
      <div
        className={`card-content flex flex-col justify-center space-y-4 ${isFeatured ? "w-full lg:w-2/5 p-8 lg:p-10" : "w-full p-6"}`}
      >
        {isFeatured && (
          <p className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-1">
            Featured Project
          </p>
        )}

        <h3
          className={`${isFeatured ? "text-3xl" : "text-xl"} font-semibold text-white`}
        >
          {project.title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full text-cyan-300 bg-cyan-900/40 border border-cyan-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="cta flex gap-6 pt-4 text-sm font-medium">
          <a
            href={project.live}
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.code}
            className="flex items-center gap-1 text-white/60 hover:text-white transition-colors uppercase tracking-wider"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
