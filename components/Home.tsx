"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef, useState } from "react";

import { InstagramIcon, LucideLinkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      // Animate all text nodes inside the container
      const textNodes: HTMLElement[] = [];
      function findTextNodes(node: Node) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
          textNodes.push(node.parentElement!);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          node.childNodes.forEach(findTextNodes);
        }
      }
      findTextNodes(containerRef.current);

      // Split and animate all text nodes
      textNodes.forEach((el) => {
        const { words } = splitText(el, { wordClass: "split-word" });
        animate(
          words,
          { opacity: [0, 1], y: [10, 0] },
          {
            type: "spring",
            duration: 2,
            bounce: 0,
            delay: stagger(0.05),
          }
        );
      });
    });
  }, []);

  return (
    <section>
      <div
        ref={containerRef}
        style={{ visibility: "hidden" }}
        className="flex flex-row justify-between bg-gradient-to-r from-white via-[#D9AB91]/40 via-40% to-white max-w-screen min-h-screen"
      >
        <div className="flex flex-col  lg:w-[60%] w-full md:gap-6 gap-2 justify-center">
          <h1 className="text-[#D9AB91] text-xl">WELCOME TO MY WORLD</h1>
          <h1 className="md:text-5xl text-3xl">
            Hello, I&#39;m
            <span className="text-[#D9AB91] font-bold"> Renu</span>
          </h1>
          <p className="mt-2 text-5xl md:text-3xl">a Frontend Developer</p>
          <p className="md:text-xl text-lg">
            Hi, I&#39;m Renu, a passionate front-end developer with a strong
            foundation in modern web technologies like Next.js, React.js,
            Tailwind CSS, and MongoDB. I love turning complex problems into
            simple, beautiful, and intuitive designs.
          </p>

          <div className="flex md:flex-row flex-col md:items-center md:gap-8 gap-4 md:mt-9 mt-4">
            <Button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  window.location.href = "mailto:renuu157@gmail.com";
                  setLoading(false); // optional reset if needed
                }, 1000);
              }}
              disabled={loading}
              className="hover:bg-[#d29b7b] disabled:opacity-100 rounded-4xl w-52 p-8 text-xl font-semibold text-white text-center bg-[#dda381] "
            >
              {loading ? "Loading..." : "Get in touch"}
            </Button>

            <div className="flex flex-row gap-6 md:mt-0 mt-4">
              <a
                href="https://www.instagram.com/codebyrenu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="bg-white text-[#D9AB91] rounded-full p-3 h-14 w-14 border-2 border-[#D9AB91]" />
              </a>
              <a
                href="https://twitter.com/renu05010"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="bg-white text-[#D9AB91] rounded-full p-3 h-14 w-14 border-2 border-[#D9AB91]" />
              </a>
              <a
                href="https://www.linkedin.com/in/renu-a1910526b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LucideLinkedin className="bg-white text-[#D9AB91] rounded-full p-2 h-14 w-14 border-2 border-[#D9AB91]" />
              </a>
            </div>
          </div>
        </div>
        <Image
          src="/portfolio.png"
          alt="Portfolio Image"
          width={300}
          height={300}
          className="hidden lg:block h-full w-fit object-contain my-auto rounded-3xl"
        />
      </div>
    </section>
  );
}
