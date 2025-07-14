import { Button } from "@/components/ui/button";
import { data } from "@/lib/data";
import Image from "next/image";
import React from "react";

function Project() {
  return (
    <div className="min-h-screen flex flex-col gap-10 mt-24">
      <h1 className="font-serif text-5xl text-center text-[#956549] underline underline-offset-8 font-bold">
        Projects
      </h1>
      {data.map((project, index) => (
        <div
          key={index}
          className="flex lg:flex-row flex-col bg-gradient-to-br from-white via-[#956549]/20 to-white p-10 rounded-2xl items-center border border-[#956549]"
        >
          <Image
            src={project.image}
            alt={project.title}
            width={1800}
            height={1800}
            className="object-contain h-64 w-full"
          />
          <div className="w-[90%] space-y-5 text-center">
            <h1 className="text-2xl  font-bold text-[#956549]">
              {project.title}
            </h1>
            <p>{project.description}</p>
            <Button className="bg-[#956549] w-44 p-5 rounded-2xl">
              View Project
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
