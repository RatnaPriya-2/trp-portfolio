import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className=" group relative  rounded-xl overflow-hidden border border-cyan-700 backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300 hover:-translate-y-1">
      <div className="image relative overflow-hidden w-150 h-58">
        <img
          src={project.image}
          alt={project.title}
          className=" object-cover group-hover:scale-107 transition-transform duration-300"
        />
        <div className="overlay absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      </div>
      <div className="card-content p-4 space-y-3 backdrop-blur-sm">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm text-white/70">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="tech-tag text-xs px-2 py-1 rounded-full text-cyan-300 bg-cyan-700/20 hover:bg-cyan-700/40 transition-all duration-300 border border-cyan-700/40 hover:border-cyan-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="cta flex gap-4 mt-4 text-sm ">
          <a
            href={project.live}
            className="live-demo text-cyan-300 hover:underline transition-all duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.code}
            className="code text-white/70 hover:text-white transition-all duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
