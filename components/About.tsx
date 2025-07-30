"use client";
import { Choose } from "@/lib/data";
import React, { useState } from "react";
import { Button } from "./ui/button";

function About() {
  const [projectLoading, setProjectLoading] = useState(false);
  const [cvLoading, setCvLoading] = useState(false);

  const handleDownload = () => {
    setCvLoading(true);
    setTimeout(() => {
      window.open("/Renu_Resume.pdf");
      setCvLoading(false);
    }, 2000);
  };

  return (
    <section className="pt-20 min-h-screen scroll-mt-28 mx-auto">
      <div className="flex lg:flex-row flex-col text-lg flex-wrap">
        <div className="border-1 border-[#956549] lg:rounded-bl-3xl  lg:rounded-tl-3xl p-8 lg:w-[50%] mx-auto">
          <h1 className="md:text-4xl text-2xl font-bold text-[rgb(149,101,73)] mb-8">
            About Me
          </h1>
          <p className="md:text-xl text-sm ">
            Hi, I’m Renu — a passionate Front-End Developer with a strong
            foundation in modern web development technologies. I specialize in
            creating beautiful, responsive, and performance-driven user
            interfaces using Next.js, React.js, and Tailwind CSS.In addition to
            front-end technologies, I also have hands-on experience with
            back-end tools like MongoDB, Prisma, and API integrations. I use
            tools like Zustand for state management, ShadCN and DaisyUI for
            modern component design, and NextAuth or Clerk for secure user
            authentication. Whether I’m building a personal project,
            collaborating on a team, or learning something new, I bring
            enthusiasm, precision, and a growth mindset to everything I do. My
            goal is to keep growing as a full-stack developer and contribute to
            meaningful projects that solve real-world problems.
          </p>
          <div className="flex lg:flex-row flex-col gap-8 mt-10">
            <Button
              className="text-white hover:border hover:border-[#956549] hover:bg-white font-bold rounded-3xl md:w-52 w-full md:p-7 p-6 hover:text-[#956549] transition-colors duration-700 hover:cursor-pointer bg-[#956549] md:text-lg text-sm "
              onClick={handleDownload}
            >
              {cvLoading ? "Loading..." : "Download CV"}
            </Button>
            <Button
              className="bg-white md:p-7 p-6 text-[#956549] border border-[#956549] font-bold rounded-3xl md:w-52 w-full hover:bg-[#956549] hover:text-white transition-colors duration-700 hover:cursor-pointer md:text-lg text-sm"
              onClick={() => {
                setProjectLoading(true);
                setTimeout(() => {
                  window.location.href = "/project";
                  setProjectLoading(false); // optional reset if needed
                }, 1000);
              }}
              disabled={projectLoading}
            >
              {projectLoading ? "Loading..." : "View Projects"}
            </Button>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 text-black p-8 border-1 border-[#956549] lg:w-[50%] sm:w-full font-sans lg:rounded-br-3xl lg:rounded-tr-3xl text-sm md:text-lg">
          <h1 className="text-[#956549] font-bold md:text-3xl text-2xl">
            Why Choose us ?
          </h1>
          <div className="space-y-6">
            {Choose.map((section) => (
              <div key={section.title} className="space-y-2">
                <div className="flex flex-row gap-2">
                  <section.icon className="text-[#956549]" size={28} />
                  <h1 className="font-bold  text-[#956549]">{section.title}</h1>
                </div>
                <p className="pb-4 border-b-2 border-white">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
