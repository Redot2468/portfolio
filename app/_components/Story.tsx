import { TECHNOLOGIES } from "@/app/_lib/constant";
import { merriweather } from "@/app/_styles/font";

export default function Story() {
  return (
    <div className="mx-auto bg-[#151515] lg:max-w-[1150px]">
      <section className="gap-12 space-y-6 px-5 py-12 lg:flex">
        <h1
          className={`${merriweather?.className} text-[25px] font-medium text-white uppercase`}
        >
          about
        </h1>

        <div data-aos="fade-up">
          <p className="text-preset-1">
            I am <span className="font-medium">Ridwan</span>, a front-end
            developer with 2+ years of creating responsive and accessible web
            applications, turning complex designs into functional user
            experiences. I am committed to continous professional development
            and collaboration and looking forward to opportunites where i can
            contribute my skills. Feel free to reach out!
          </p>

          <div className="text-preset-1 space-y-1.5">
            <p>Technologies:</p>
            <ul className="space-y-1.5">
              {TECHNOLOGIES?.map((tech) => (
                <li key={tech?.type} className="text-preset-1">
                  <span className="capitalize">{tech?.type}: </span>
                  <span className="ml-2 text-white">
                    {tech?.value?.join(", ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
