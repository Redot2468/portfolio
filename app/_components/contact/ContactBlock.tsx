import { notoSerif } from "@/app/_styles/font";

function ContactBlock() {
  return (
    <div
      id="contact"
      className="mx-auto mt-12 flex flex-col gap-8 px-4 sm:px-6 md:mt-24 md:max-w-[1100px] md:flex-row md:gap-12"
    >
      <div className="mt-24 space-y-2 md:space-y-4">
        <h2
          className={`text-[29px] leading-[50px] font-semibold text-white md:text-[49px] ${notoSerif?.className} `}
        >
          Let&apos;s work together
        </h2>
        <div className="space-y-1">
          <p className="font-light text-gray-200 md:text-xl">
            I&apos;d love to hear about what you&apos;re working on and how i
            could help.{" "}
          </p>
          <p className="font-light text-gray-200 md:text-xl">
            Send an email{" "}
            <span>
              <a
                href="mailto:lawalridwan860@gmail.com"
                className="font-normal text-white underline"
              >
                lawalridwan860@gmail.com
              </a>
            </span>{" "}
            to get started.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactBlock;
