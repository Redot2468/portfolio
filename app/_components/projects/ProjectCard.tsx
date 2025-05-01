/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

import CardImage from "@/app/_components/Image";
import { kumbhSans, notoSerif } from "@/app/_styles/font";
import { StaticImageData } from "next/image";
import ProjectLink from "./ProjectLink";

interface ProjectCardProps {
  children: React.ReactNode;
  thumbnail: StaticImageData;
  preview: string;
  github: string;
  stack: string;
  name: string;
}

function ProjectCard({
  children,
  thumbnail,
  preview,
  github,
  stack,
  name,
}: ProjectCardProps) {
  return (
    <div
      className={`md:justify-items-between gap-12 space-y-8 rounded-xl md:max-w-6xl md:items-center md:space-y-10 md:shadow-none lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-14 ${kumbhSans?.className} w-fulllg:items-center`}
      data-aos="fade-up"
    >
      <section className="">
        <CardImage imgPath={thumbnail} />
      </section>
      <section className="space-y-3">
        <h1
          className={`text-[27px] font-semibold text-white md:text-[29px] lg:text-[32px] lg:font-medium ${notoSerif?.className}`}
        >
          {name}
        </h1>
        <p className="text-preset-1 font-extralight lg:text-[18px]">
          {children}
        </p>

        <p className="text-preset-1 font-extralight lg:text-[18px]">
          <span className="font-normal text-white">Stack</span>: {stack}
        </p>

        <section className="mt-9 flex items-center justify-between lg:gap-8">
          <ProjectLink linkText="Live Preview" link={preview}>
            <IoLink className="-rotate-45 text-white" />
          </ProjectLink>

          <ProjectLink linkText="View Code" link={github}>
            <FaGithub className="text-white" />
          </ProjectLink>
        </section>
      </section>
    </div>
  );
}

export default ProjectCard;
