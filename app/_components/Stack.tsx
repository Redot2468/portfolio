import Image from "next/image";

interface StackProps {
  children: React.ReactNode;
  stack: string;
}

function Stack({ children, stack }: StackProps) {
  const icon = `/assets/icons/${stack}.svg`;

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="relative h-12 w-12 md:w-16">
        <Image
          src={icon}
          alt="stack-icon"
          fill
          className="object-contain"
          quality={100}
          priority={true}
        />
      </div>
      <p className="paragraph">{children}</p>
    </div>

    // <div className="flex flex-col items-center space-y-1">
    //   <img src={`/assets/icons/${stack}.svg`} alt="" className="w-12 md:w-16" />
    //   <p className="paragraph">{children}</p>
    // </div>
  );
}

export default Stack;
