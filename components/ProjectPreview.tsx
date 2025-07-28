"use client";
import { data } from "@/lib/data";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const [loading, setLoading] = useState(false);
  return (
    <section className="pt-20 min-h-screen scroll-mt-28">
      <div className="flex lg:flex-row flex-col lg:justify-between w-full items-center mb-8">
        <h1 className="font-serif text-3xl font-bold text-[#956549]/80">
          Projects
        </h1>
        <Link href="/project">
          <Button className="bg-[#956549] w-44 rounded-3xl my-4 p-6">
            View all
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        {data.slice(0, 3).map((data, index) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            key={index}
            style={{ width: "100%" }}
            className="bg-gradient-to-bl from-white via-[#956549]/30 to-white text-black border border-[#956549] rounded-2xl lg:mx-auto lg:py-5 p-8 space-y-3 flex lg:flex-row flex-col w-full items-center justify-between"
          >
            <Image
              src={data.image}
              alt={data.title}
              width={1800}
              height={1800}
              className="object-contain h-64 w-96"
            />
            <div className="lg:w-[60%] w-full space-y-3">
              <p className="text-xl font-bold">{data.title}</p>
              <p className="h-28">{data.description}</p>
              <a href={data.url}>
                <Button
                  className="bg-[#956549] w-full lg:w-44 p-6 lg:rounded-2xl rounded"
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      window.location.href = "/project";
                      setLoading(false);
                    }, 1000);
                  }}
                  disabled={loading}
                >
                  {loading ? "Loading..." : " View Project"}
                </Button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
