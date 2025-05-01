import About from "@/app/_components/About";
import ContactBlock from "@/app/_components/contact/ContactBlock";
import Experience from "@/app/_components/Experience";
import ProjectsBlock from "@/app/_components/projects/ProjectsBlock";

import Story from "@/app/_components/Story";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <div className="mx-auto max-w-[1200px]">
      <div>
        <About />
        <Story />
        <ProjectsBlock />
        <Experience />
        <ContactBlock />
      </div>
    </div>
  );
}
