"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { tools } from "@/lib/data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="pt-20 min-h-screen scroll-mt-28">
      <Card className="border-2">
        <CardHeader className="text-center md:text-3xl text-2xl font-serif">
          Explore the tools
          <span className="text-[#956549] md:text-4xl text-3xl">
            Behind my logic
          </span>
        </CardHeader>
        <CardContent className="h-fit flex flex-wrap gap-8 overflow-visible">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="lg:w-64 w-full h-fit md:p-5 p-3 rounded-3xl text-white text-center font-semibold md:text-xl text-lg mx-auto cursor-grab active:cursor-grabbing"
              style={{ background: tool.color }}
              drag
              dragConstraints={{
                left: -100,
                right: 100,
                top: -100,
                bottom: 100,
              }}
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tool.skill}
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
