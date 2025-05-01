"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease",
    });
  }, []);

  return null;
}
