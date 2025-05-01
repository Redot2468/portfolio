import {
  Kumbh_Sans,
  Merriweather,
  Noto_Serif,
  Playfair_Display,
} from "next/font/google";

export const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
});

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
});
