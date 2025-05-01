"use client";

import Button from "@/app/_components/Button";
import { useNavFixed } from "@/app/_hooks/useNavFixed";
import logo2 from "@/public/icons/logo2.svg";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { RiMenu4Fill } from "react-icons/ri";

function NavBar() {
  const [menuIsClicked, setMenuIsClicked] = useState(false);
  const isNavFixed = useNavFixed();
  const refEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onCloseMenu(e: MouseEvent) {
      if (!e.target) return;
      const targetEl = e.target as HTMLDivElement;

      if (targetEl.classList.contains("nav-overlay")) {
        console.log(targetEl.classList);
        setMenuIsClicked(false);
      }
    }

    window.addEventListener("click", onCloseMenu);

    return () => window.removeEventListener("click", onCloseMenu);
  }, []);

  return (
    <nav
      className={`z-50 transition-all ${
        isNavFixed
          ? "fixed top-0 w-full bg-black/40 py-5 shadow-lg backdrop-blur-sm md:py-4"
          : "static py-7"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1220px] flex-wrap items-center justify-between px-10 md:flex-nowrap">
        <section className="z-50 m-0">
          <Image
            src={logo2}
            alt="logo"
            quality={100}
            priority={true}
            className="w-[53px] brightness-0 invert md:w-14"
          />
        </section>

        <section
          onClick={() => setMenuIsClicked((curState) => !curState)}
          className={`m-0 w-fit cursor-pointer text-[25px] text-white md:text-3xl ${
            menuIsClicked ? "rotate-180" : "rotate-0"
          } z-50 transition-transform duration-300`}
        >
          {menuIsClicked ? (
            <HiMiniXMark />
          ) : (
            <RiMenu4Fill className="text-white" />
          )}
        </section>
        <AnimatePresence>
          {menuIsClicked && (
            <div
              className="nav-overlay fixed top-0 left-0 z-30 h-screen w-full bg-black/40 backdrop-blur-[2px]"
              ref={refEl}
            >
              <motion.ul
                className={`nav-items top-0 left-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-7 overflow-hidden bg-[#0e0e0e] px-6 md:w-[50%] md:py-12`}
                initial={{ x: -700, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -700, opacity: 0 }}
                transition={{ ease: "easeIn" }}
              >
                {["About", "Projects", "Contact"].map((link, id) => (
                  <li key={id} className="group flex flex-col gap-1">
                    <a
                      onClick={() => setMenuIsClicked(false)}
                      href={`#${link.toLowerCase()}`}
                    >
                      {link}
                    </a>
                    <div className="w-0 rounded-2xl border-b-2 border-white opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                  </li>
                ))}
                <a
                  href="/Resume-ridwan.pdf"
                  download="Resume-ridwan.pdf"
                  onClick={() => setMenuIsClicked(false)}
                >
                  <Button>Resume</Button>
                </a>
              </motion.ul>
            </div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default NavBar;
