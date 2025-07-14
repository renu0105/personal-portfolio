import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Projects from "@/components/Project";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services" className="pt-16">
        <Services />
      </section>
      <section id="skills" className="mt-16">
        <Skills />
      </section>

      <section id="projects" className="pt-16">
        <Projects />
      </section>

      <section id="contact" className="my-16">
        <Contact />
      </section>
    </div>
  );
};

export default page;
