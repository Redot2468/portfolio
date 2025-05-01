"use client";

import { notoSerif } from "@/app/_styles/font";

const EXPERIENCES = [
  {
    job: "Frontend developer (Intern)",
    company: "D'HuB Technologies",
    timeline: "Aug 2024 - Jan 2025",
    tasks: [
      "Built the product main pages using frontend technologies and use of animation libraries",
      "Collaborated with other developers in styling the existing pages and continously fixing bugs.",
    ],
  },

  {
    job: "Frontend Developer (Intern)",
    company: " Lagos state Ministry of Innovation, Science and Technology.",
    timeline: "May 2023 - Oct 2023",
    tasks: [
      " Enhanced multiple front-end projects by applying responsive design principles, improving accessibility and user engagement across devices",
      "Engaged in continuous learning through practical project work contributing to open-source communities and completing advanced online courses in front-end technologies.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="mt-20 px-4 sm:px-6 md:px-8 lg:mt-24">
      <div className="space-y-12">
        <div className="text-center">
          <h1
            className={`${notoSerif?.className} text-[32px] font-semibold text-white uppercase lg:text-[40px]`}
          >
            Experience
          </h1>
          <p className="text-light font-extralight text-gray-300">
            Work Experience
          </p>
        </div>

        {/* experience */}

        {EXPERIENCES?.map((experience, id) => (
          <section className="space-y-3" key={id} data-aos="fade-up">
            <h1
              className={`text-[19px] font-semibold text-gray-100 md:text-[22px] lg:text-[26px] lg:font-medium ${notoSerif?.className}`}
            >
              {experience?.job}
            </h1>
            <div className="flex flex-col gap-4">
              <h1
                className={`text-[20px] font-semibold text-white md:text-[22px] lg:text-[26px] lg:font-medium ${notoSerif?.className}`}
              >
                {experience?.company}
              </h1>

              <p className="text-preset-1 text-sm font-extralight italic lg:text-base">
                {experience?.timeline}
              </p>
            </div>

            <ul className="list-disc space-y-3 pl-6">
              {experience?.tasks?.map((task) => (
                <li
                  key={task}
                  className="text-preset-1 font-extralight lg:text-[18px]"
                >
                  Enhanced multiple front-end projects by applying responsive
                  design principles, improving accessibility and user engagement
                  across devices
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
