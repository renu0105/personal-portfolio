import { Choose } from "@/lib/data";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <section>
      <div className="flex lg:flex-row flex-col text-lg flex-wrap">
        <div className="border-1 border-[#956549] md:rounded-bl-3xl  lg:rounded-tl-3xl p-8 lg:w-[50%] w-fit mx-auto">
          <h1 className="text-4xl font-bold text-[#956549] mb-8">About Me</h1>
          <p className="text-xl ">
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
          <div className="flex flex-row gap-8 mt-10">
            <a
              href="/Renu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[#956549] border border-[#956549] font-bold rounded-3xl w-44 p-3 hover:bg-[#956549] hover:text-white transition-colors duration-300 hover:cursor-pointer">
                Download CV
              </button>
            </a>
            <button className="text-[#956549] border border-[#956549] font-bold rounded-3xl w-44 p-3 hover:bg-[#956549] hover:text-white transition-colors duration-300">
              <Link href="/projects">View Projects</Link>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6 text-black p-8 border-1 border-[#956549] lg:w-[50%] sm:w-full font-sans lg:rounded-br-3xl lg:rounded-tr-3xl">
          <h1 className="text-[#956549] font-bold text-3xl">Why Choose us ?</h1>
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
