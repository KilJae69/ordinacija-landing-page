"use client";
import { useState } from "react";
import LogoSmall from "./LogoSmall";
import Button from "./shared/Button";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { links } from "@/lib/data";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full flex gap-2 z-[9999] bg-white  bg-opacity-80 backdrop-blur-[0.5rem] shadow-lg shadow-green-500/[0.03] sm:hidden items-center justify-between px-2 py-2">
      <LogoSmall width={40} />
      <div className="flex items-center gap-5">
        <Button className="w-fit h-10 ">Aplikacija</Button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md transition"
        >
          {isOpen ? <FaX size={20} /> : <FaBars size={20} />}
        </button>
      </div>
      {/* Animated Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="absolute top-full  left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50"
          >
            <nav className="flex flex-col gap-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.hash}
                  href={link.hash}
                  className="text-center text-lg font-medium p-3 hover:bg-gray-100 transition"
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
