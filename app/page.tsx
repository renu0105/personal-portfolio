import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React from "react";
import Projects from "@/components/ProjectPreview";

const page = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default page;
