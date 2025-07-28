"use client";

import { navLinks } from "@/lib/data";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const itemVariant = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const navVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const toggleContainer: React.CSSProperties = {
    outline: "none",
    border: "none",
    userSelect: "none",
    cursor: "pointer",
    position: "absolute",
    top: 18,
    left: 15,
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "transparent",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  };

  const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button style={toggleContainer} onClick={toggle} aria-label="Toggle menu">
      {sidebarOpen ? (
        <X size={28} color="#fff" className="mx-auto" />
      ) : (
        <Menu size={28} color="#fff" className="mx-auto" />
      )}
    </button>
  );

  return (
    <>
      <div className="lg:hidden text-white">
        <MenuToggle toggle={() => setSidebarOpen(!sidebarOpen)} />
        <motion.nav
          initial={false}
          animate={sidebarOpen ? "open" : "closed"}
          custom={400}
          ref={containerRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 260,
            height: "100vh",
            zIndex: 50,
            pointerEvents: sidebarOpen ? "auto" : "none",
          }}
        >
          <motion.div
            style={{
              backgroundColor: "black",
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: 260,
              borderRadius: 20,
            }}
            variants={sidebarVariants}
          />
          <motion.ul
            style={{
              listStyle: "none",
              padding: 25,
              margin: 0,
              position: "absolute",
              top: 80,
              width: 230,
            }}
            variants={navVariants}
          >
            {navLinks.map((link) => (
              <motion.li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                  cursor: "pointer",
                }}
                key={link.title}
                variants={itemVariant}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSidebarOpen(false)}
              >
                <Link
                  href={link.url}
                  className="flex items-center gap-2 text-[#D9AB91]"
                >
                  {link.icon && typeof link.icon === "function" ? (
                    <link.icon size={22} />
                  ) : null}
                  <span>{link.title}</span>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
        {/* Overlay for closing sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu overlay"
          />
        )}
      </div>

      <div className="hidden lg:flex flex-row items-center w-screen justify-between fixed py-3 bg-transparent backdrop-blur-md z-50 px-24">
        <Link href="/">
          <p className="font-serif text-3xl">
            <span className="text-[#D9AB91] text-5xl font-sans">R</span>
            ENU
          </p>
        </Link>
        <div className="lg:flex flex-row gap-10 hidden items-center">
          {navLinks.map((link) => (
            <a
              href={link.url}
              key={link.title}
              className="text-[#D9AB91] font-semibold hover:underline hover:text-[#956549] transition-all duration-300"
            >
              {link.title}
            </a>
          ))}
          <Button
            className="bg-[#dda381] hover:bg-[#d29b7b] disabled:opacity-100 p-5 w-44"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                window.location.href = "mailto:renuu157@gmail.com";
                setLoading(false); // optional reset if needed
              }, 1000);
            }}
            disabled={loading}
          >
            {loading ? "Loading..." : "Let's Talk"}
          </Button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
