import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import { motion } from "framer-motion";
import ocean from "./assets/ocean.jpg";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-main">
      {/* Background */}
      <motion.img
        src={ocean}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/80 to-black/85"></div> */}
      <div className="absolute inset-0 bg-black/85"></div>
      {/* Content */}
      <div className=" relative z-20">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
