"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Logo from "./Logo";
import Button from "./shared/Button";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.nav
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed top-0 left-0 right-0 bg-white bg-opacity-80 backdrop-blur-[0.5rem] shadow-lg shadow-green-500/[0.03] border-b border-primary-accent border-opacity-40 sm:top-2 sm:left-2 sm:right-2 sm:border sm:rounded-full"
      >
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 py-2 sm:py-5">
          {/* Logo */}
          <Logo />

          {/* Navigation Links */}
          <ul className="flex flex-wrap sm:flex-nowrap justify-center gap-1 sm:gap-2 font-semibold text-xs xs:text-sm tracking-wider uppercase  text-gray-500">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
              >
                <Link
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(
                    "flex items-center justify-center px-3 py-3 hover:text-primary-accent transition",
                    {
                      "text-primary-accent": activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="bg-green-100 rounded-full absolute inset-0 -z-10"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Button */}
         
          <Button className="w-full sm:w-fit">Aplikacija</Button>
        </div>
      </motion.nav>
    </header>
  );
}