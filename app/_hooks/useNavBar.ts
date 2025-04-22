import { useEffect, useState } from "react";

export function useNavBar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [navFixedOnScroll, setNavFixedOnScroll] = useState(false);

  const onToggleNav = () => {
    setIsMobileNavOpen((cur) => !cur);
  };

  useEffect(() => {
    function onClickOverlay(e: MouseEvent) {
      const targetEl = e.target as HTMLDivElement;

      if (isMobileNavOpen && targetEl.classList.contains("menu-overlay")) {
        setIsMobileNavOpen(false);
      }
    }

    document.addEventListener("click", onClickOverlay);

    return () => {
      document.removeEventListener("click", onClickOverlay);
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 500) {
        setNavFixedOnScroll(true);
      } else {
        setNavFixedOnScroll(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { isMobileNavOpen, onToggleNav, navFixedOnScroll };
}
