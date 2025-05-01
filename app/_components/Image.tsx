import Image, { StaticImageData } from "next/image";

interface CardImageProps {
  imgPath: StaticImageData;
}

function CardImage({ imgPath }: CardImageProps) {
  return (
    <div className="">
      <Image
        src={imgPath}
        alt="thumbnail"
        quality={100}
        placeholder="blur"
        priority={true}
        className={`h-[260px] max-w-[100%] object-cover object-top transition-transform duration-500 hover:scale-[102%] sm:h-[350px] md:h-[400px] lg:h-[350px]`}
      />
    </div>
  );
}

export default CardImage;

// relative h-[400px] w-full lg:h-[350px] lg:w-[500px]">
