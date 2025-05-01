import Stack from "@/app/_components/Stack";
import { STACKS } from "@/app/_lib/constant";
import { merriweather } from "@/app/_styles/font";

function TechStack() {
  return (
    <div
      id="skills"
      className="mt-24 flex flex-col items-center gap-11 md:mt-28"
    >
      <div className="text-center">
        <h2 className={`${merriweather?.className} heading`}>Skills</h2>
        <p className="text-gray-300">Technologies I work with</p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {STACKS?.map((stack) => (
          <Stack stack="html" key={stack?.stack}>
            {stack?.text}
          </Stack>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
