"use client";

import { notoSerif } from "@/app/_styles/font";
import devjobs from "@/public/projects/devjobs.webp";
import dictionary from "@/public/projects/dictionary.webp";
import finance from "@/public/projects/finance.webp";
import furn from "@/public/projects/furn.webp";
import invoicely from "@/public/projects/invoice.webp";

import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    name: "Finance",
    thumbnail: finance,
    github: "https://github.com/Ridwan-Lawal/Personal-finance-app",
    stack: "Next.js, TypeScript, Supabase, TailwindCSS",
    preview: "https://personal-finance-app-ochre.vercel.app/",
    about:
      " A dashboard-style web application designed to help individuals to monitor their income, expenses, savings, and spending habits in an organized and interactive way ",
  },

  {
    name: "Invoicely",
    thumbnail: invoicely,
    github: "https://github.com/Ridwan-Lawal/Invoicely",
    stack: "Next.js, JavaScript, Supabase, TailwindCSS",
    preview: "https://invoicely-nuld.vercel.app/user/signin",
    about:
      "An app that serves as a streamlined tool for individuals or businesses to handle billing processes, offering an organized way to create detailed invoices, monitor payment statuses, and maintain financial records",
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

  {
    name: "dictionary",
    thumbnail: dictionary,
    github: "https://github.com/Ridwan-Lawal/dictionary-react",
    stack: "React, JavaScript, TailwindCSS, React-router",
    preview: "https://dictionary-react-ruby.vercel.app/",
    about:
      " A user-friendly dictionary app designed to provide fast, accurate definitions, synonyms, and translations at your fingertips. Built from a project on Frontend Mentor.",
  },

  {
    name: "DevJobs",
    thumbnail: devjobs,
    github: "https://github.com/Ridwan-Lawal/dev-jobs",
    preview: "https://dev-jobs-orpin.vercel.app/",
    stack: "React, JavaScript, React-router, TailwindCSS",
    about:
      " A platform where developers can browse and apply for job opportunities. Implemented features such as job listing, and search and filtering functionalities using the React library and the Context API for state management.",
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
