"use client";

import { m, useMotionValueEvent, useScroll } from "framer-motion";

import Logo from "./Logo";
import Button from "./shared/Button";
import { useState } from "react";
import LogoSmall from "./LogoSmall";


export default function Header() {
  const { scrollY } = useScroll(); // Framer's built-in scroll tracking
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50); // Set `true` if scrolled past 50px
  });

  return (
    <header className="z-[999] relative w-full ">
      <m.nav
        initial={{ y: -250, x:"-50%", opacity: 0 }}
        animate={{ y: 2,x:"-50%",  opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`fixed  px-2 container xs:px-6 top-2 left-1/2 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white bg-opacity-80 backdrop-blur-[0.5rem] shadow-lg "
            : "bg-transparent shadow-none border-0"
        }`}
      >
        <m.div
          animate={{ height: scrolled ? 70 : 100 }}
          transition={{ duration: 0.3 }}
          className=" mx-auto  flex items-center justify-between gap-2 xs:gap-0 py-2 xs:py-5"
        >
          {/* Logo */}
          <m.div
            animate={{ scale: scrolled ? 0.8 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="hidden sm:block">

            <Logo />
            </div>
            <div>

            <LogoSmall width={60} className=" sm:hidden"/>
            </div>
          </m.div>

          <div className="flex gap-4">
            <Button className="w-full px-2 sm:w-fit">Aplikacija</Button>
            <Button invert href="/kontakt" className="w-full sm:w-fit">
              Kontakt
            </Button>
          </div>
        </m.div>
      </m.nav>
     
    </header>
  );
}
