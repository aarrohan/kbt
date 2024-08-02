import Image from "next/image";
import Link from "next/link";

interface IProps extends IProduct {
  vtr?: boolean;
  handleClick?: () => void;
}

export default function Product({
  vtr,
  handleClick,
  imgUrl,
  secondaryImgUrl,
  slug,
  title,
  colors,
  category,
}: IProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-5 w-full">
        <div className="relative aspect-[3/4]">
          <Image src={secondaryImgUrl} alt="" fill={true} objectFit="cover" />

          <Image
            src={imgUrl}
            alt=""
            fill={true}
            objectFit="cover"
            className="hover:opacity-0 duration-200"
          />
        </div>

        <span className="absolute bottom-2 left-2 py-1 px-2 bg-dark text-xs font-medium uppercase tracking-[1.5px] text-white">
          New
        </span>
      </div>

      {vtr ? (
        <button
          onClick={handleClick}
          className="mb-2 font-serif text-2xl font-normal text-center text-dark"
        >
          {title}
        </button>
      ) : (
        <Link
          href={`/${category.slug}/${slug}`}
          className="mb-2 font-serif text-2xl font-normal text-center text-dark"
        >
          {title}
        </Link>
      )}

      <div className="flex gap-2">
        {colors.map((color, index) => {
          return (
            <span
              key={index}
              className={`w-[12px] h-[12px] border border-dark/15 rounded-full block`}
              style={{ backgroundColor: color }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
