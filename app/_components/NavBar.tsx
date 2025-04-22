"use client";

import { useNavBar } from "@/app/_hooks/useNavBar";
import { NAV_ITEMS } from "@/app/_lib/constant";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { RiMenu4Fill } from "react-icons/ri";

export default function NavBar() {
  const { isMobileNavOpen, onToggleNav, navFixedOnScroll } = useNavBar();

  return (
    <nav className="border-b border-gray-100">
      <div
        className={`mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-4 ${navFixedOnScroll && "fixed bg-white/70 shadow-sm shadow-gray-200 backdrop-blur-[4px]"} transition-all duration-200`}
      >
        <h2 className="text-[21px]">Ridwan&apos;s Portfolio</h2>
        <div className="flex items-center gap-8">
          <Button asChild className="hidden sm:block">
            <Link href="https://www.linkedin.com/in/ridwan-lawal-162284257/">
              Let&apos;s Connect
            </Link>
          </Button>
          <button className="cursor-pointer" onClick={onToggleNav}>
            <RiMenu4Fill className="size-[21px]" />
          </button>
        </div>
      </div>

      {/* menu items */}
      {/* overlay */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ ease: "easeIn", duration: 0.15 }}
            className="black menu-overlay fixed top-0 z-30 h-screen w-full border-2 border-green-500 bg-white/10 backdrop-blur-[3px]"
          >
            {/* menu */}
            <div className="flex h-screen w-[90%] flex-col bg-white px-4 py-3 text-gray-900 shadow-md drop-shadow sm:w-[50%]">
              <section className="relative right-0 flex h-10 justify-end">
                <X onClick={onToggleNav} className="size-5 cursor-pointer" />
              </section>
              <ul className="flex flex-grow flex-col items-center gap-8 pt-20">
                {NAV_ITEMS?.map((navItem) => (
                  <li
                    key={navItem}
                    className="group flex cursor-pointer flex-col items-center"
                  >
                    <span className="text-[17px] capitalize transition-colors group-hover:text-gray-700">
                      {navItem}
                    </span>
                    <p className="w-0 border border-gray-900 opacity-0 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

//fix the nav
// after push it to main branch
// create a new branch for each new feature
