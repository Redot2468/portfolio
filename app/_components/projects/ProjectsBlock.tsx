import { notoSerif } from "@/app/_styles/font";
import kanban from "@/public/projects/darkmode.png";
import dsifootball from "@/public/projects/dsi-football.png";
import furn from "@/public/projects/furn.webp";
import Nora from "@/public/projects/nora.png";
import ZenGuide from "@/public/projects/zenguide.png";

import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    name: "DSI Football",
    thumbnail: dsifootball,
    stack: "Next.js, TypeScript, Postgres, TailwindCSS, Shadcn, Auth.js",
    preview: "https://dsifootball.live",
    about:
      "A football sport writing platform built for DSI Football, a football sport company, dedicated to delivering back-to-back football content, a consistent flow of updates, covering various aspects of the sport. ",
  },
  {
    name: "Nora AI",
    thumbnail: Nora,
    stack: "Next.js, TypeScript.",
    preview: "https://noramum.app/",
    about:
      "NORA is an AI-powered companion built to support mums with quick answers, daily guidance, emotional support, and practical tools for every stage of motherhood. ",
  },
  // {
  //   name: "Finance",
  //   thumbnail: finance,
  //   github: "https://github.com/Ridwan-Lawal/Personal-finance-app",
  //   stack: "Next.js, TypeScript, Supabase, TailwindCSS",
  //   preview: "https://personal-finance-app-ochre.vercel.app/",
  //   about:
  //     " A dashboard-style web application designed to help individuals to monitor their income, expenses, savings, and spending habits in an organized and interactive way ",
  // },
  {
    name: "Kanban",
    thumbnail: kanban,
    github: "https://github.com/Ridwan-Lawal/Kanban",
    stack:
      "Next.js, TypeScript, Postgres (Neon), TailwindCSS, Shadcn, Better Auth",
    preview: "https://kanban-lilac-ten.vercel.app/",
    about:
      "This is a robust, full-stack Kanban board application designed to streamline project management and boost team productivity. ",
  },

  {
    name: "ZenGuide",
    thumbnail: ZenGuide,
    github: "https://github.com/Ridwan-Lawal/ZenGuide/",
    stack: "Next.js, TypeScript, Supabase, TailwindCSS",
    preview: "https://zen-guide-pi.vercel.app/",
    about:
      "A comprehensive onboarding tour platform built with Next.js, Convex, and modern web technologies. This platform enables businesses to create, manage, and analyze interactive onboarding tours for their users.",
  },
  {
    name: "Furn",
    thumbnail: furn,
    github: "https://furnn.netlify.app/",
    stack: "HTML, CSS, JavaScript",
    preview: "https://github.com/Redot2468/FURN-page",
    about:
      "A modern e-commerce platform designed to showcase and sell furniture in a visually appealing and user-friendly way. ",
  },
];

function ProjectsBlock() {
  return (
    <div id="projects" className="mt-20 px-4 sm:px-6 md:px-8 lg:mt-24">
      <div className="space-y-12">
        <div className="text-center">
          <h1
            className={`${notoSerif?.className} text-[32px] font-semibold text-white uppercase lg:text-[40px]`}
          >
            projects
          </h1>
          <p className="text-light font-extralight text-gray-300">
            Some of my projects
          </p>
        </div>

        <div className="grid gap-8 gap-y-14 lg:grid-cols-1 lg:gap-y-20">
          {PROJECTS?.map((project, index) => (
            <ProjectCard
              name={project?.name}
              thumbnail={project?.thumbnail}
              preview={project?.preview}
              github={project?.github}
              key={index}
              stack={project?.stack}
            >
              {project?.about}
            </ProjectCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsBlock;
