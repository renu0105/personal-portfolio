"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { tools } from "@/lib/data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="pt-20 min-h-screen scroll-mt-28">
      <Card>
        <CardHeader className="text-center text-3xl font-serif">
          Explore the tools
          <span className="text-[#956549] text-4xl">Behind my logic</span>
        </CardHeader>
        <CardContent className="h-fit flex flex-wrap gap-8 overflow-visible">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="w-64 h-fit p-5 rounded-3xl text-white text-center font-semibold text-xl mx-auto cursor-grab active:cursor-grabbing"
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
