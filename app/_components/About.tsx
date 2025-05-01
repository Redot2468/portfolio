import { merriweather, notoSerif } from "@/app/_styles/font";
import passport from "@/public/passport.png";
import Image from "next/image";

function About() {
  return (
    <div
      id="about"
      className="mx-auto mt-8 flex flex-col items-center gap-11 pb-28 lg:max-w-[1150px] lg:flex-row lg:items-center lg:justify-center lg:gap-0"
    >
      <div className="flex flex-col text-center lg:order-1 lg:w-[50%] lg:text-left">
        <h2
          className={`${notoSerif?.className} text-center text-[40px] font-bold text-white md:text-[45px] lg:text-left lg:text-[50px]`}
          data-aos="fade-up"
          data-aos-duration="100"
        >
          Lawal Ridwan
        </h2>

        <p
          className={`mt-2 text-[22px] font-light tracking-wide text-gray-100 lg:mt-3 lg:text-[24px] ${merriweather?.className} max-w-[700px] leading-[1.8]`}
          data-aos="fade-up"
          data-aos-duration="300"
        >
          I&apos;m a dedicated{" "}
          <span className="font-semibold text-white">Front-End Developer</span>{" "}
          specialized in creating responsive and accessible web interfaces.
        </p>
      </div>

      <div className="relative flex h-[320px] w-[300px] items-center shadow-2xl shadow-gray-950 md:h-[350px] md:w-[330px] lg:order-2 lg:h-[480px] lg:w-[37%]">
        <Image
          src={passport}
          alt="avatar"
          quality={100}
          placeholder="blur"
          priority={true}
          fill
          className="object-cover grayscale-70 transition-all duration-500 ease-in hover:grayscale-0"
        />
      </div>
    </div>
  );
}

export default About;

// With a strong foundation
//             in HTML, CSS, JavaScript, and React, I excel in turning complex
//             designs into functional user experiences. I am committed to
//             continuous professional development and collaboration to deliver
//             high-quality solutions.
