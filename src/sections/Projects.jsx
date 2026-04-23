import React from "react";
import ProjectCard from "../components/ProjectCard";
import netflix from "../assets/netflix.png";
import cookbook from "../assets/cookbookpro.png";
import classconnect from "../assets/classConnect.png";
import trendikart from "../assets/trendikart.png";

const Projects = () => {
  const projects = [
    {
      title: "Trendikart",
      description:
        "Full-featured e-commerce app with authentication, cart, and Razorpay payment integration.",
      image: trendikart,
      tech: ["React", "Firebase", "Razorpay", "Context API"],
      live: "https://trendikart.netlify.app/",
      code: "https://github.com/RatnaPriya-2/trendikart",
      featured: true,
    },
    {
      title: "ClassConnect",
      description:
        "Class scheduling app with authentication, booking system, and real-time data using Firebase.",
      image: classconnect,
      tech: ["HTML", "CSS", "JavaScript", "Firebase"],
      live: "https://classconnect-stba.netlify.app/",
      code: "https://github.com/RatnaPriya-2/ClassConnect--Student-Teacher-Booking-Appointment",
      featured: false,
    },
    {
      title: "Movie Streaming App",
      description:
        "Netflix-inspired app with authentication, genre-based filtering, and trailer integration using TMDB API.",
      image: netflix,
      tech: ["React", "Firebase", "TMDB API"],
      live: "https://movie-streaming-app-tmdb.netlify.app/",
      code: "https://github.com/RatnaPriya-2/movie-streaming-app",
      featured: false,
    },
    {
      title: "CookBook Pro",
      description:
        "Recipe search app with API integration, video tutorials, and save functionality.",
      image: cookbook,
      tech: ["React", "CSS", "Recipe API"],
      live: "https://cookbook-pro.netlify.app/",
      code: "https://github.com/RatnaPriya-2/cookbook-pro",
      featured: false,
    },
  ];
  return (
    <section
      id="projects"
      className=" mt-60  relative min-h-screen px-20 gap-10 z-40 scroll-mt-30 "
    >
      <div className="text-center max-w-3xl mx-auto flex flex-col mb-20">
        <h2 className="text-xl  font-semibold mb-6 title-text">
          Selected Projects
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold leading-snug">
          <span className="title-text">Projects</span> that reflect real world
          problem solving.
        </h3>

        {/* Subheading */}
        <p className="mt-6 text-white/70 leading-relaxed">
          A curated set of applications showcasing frontend development,
          real-time features, and practical user-focused solutions.
        </p>
      </div>
      <div className="projects-container grid  grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
