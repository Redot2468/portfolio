import { merriweather } from "@/app/_styles/font";
import hero from "@/public/icons/hero.svg";
import Image from "next/image";

function Header() {
  return (
    <header
      id="home"
      className="mx-auto mt-5 grid max-w-[1150px] grid-cols-1 flex-col items-center justify-between gap-6 md:mt-8 md:grid-cols-2 md:flex-row lg:mt-0"
    >
      <div className="order-2 max-w-[600px] space-y-4 text-center md:order-1 md:text-left">
        <h1
          className={`font-merriweather inline text-[29px] font-semibold text-white md:text-4xl md:leading-[1.5] xl:text-[42px] ${merriweather?.className} `}
        >
          Hello there, I&apos;m Lawal Ridwan{" "}
        </h1>

        <p className="-mt-4 leading-[1.8] font-medium text-gray-100 md:-mt-1 md:text-lg">
          I&apos;m a front-end developer skilled in building beautiful and
          functional user interfaces. I enjoy working on projects that utilize
          front-end technologies to create seamless user experiences.
        </p>
      </div>
      <div className="order-1 md:order-2">
        <Image src={hero} alt="hero" quality={100} priority={true} />
      </div>
    </header>
  );
}

export default Header;
