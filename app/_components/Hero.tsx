import Image from "next/image";
import avatar from "../../public/passport.png";

export default function Hero() {
  return (
    <div className="space-y-8">
      <p className="w-fit rounded-[3px] bg-gray-100 px-2 py-1 text-xs text-gray-900 uppercase">
        lawal ridwan, a frontend developer
      </p>

      <div className="bg-gray-100">
        <section>
          <h1 className="text-[23px] font-extrabold tracking-normal md:text-[26px]">
            Hi, I&apos;m Ridwan, a Frontend Developer
          </h1>

          <div>
            <Image
              src={avatar}
              alt="avatar"
              quality={100}
              placeholder="blur"
              priority={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
