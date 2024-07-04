import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  image,
  backImage,
  title,
  color,
  label,
}: IProductCard) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-5 w-full">
        <div className="relative aspect-[3/4]">
          {backImage && (
            <Image src={backImage} alt="" fill={true} objectFit="cover" />
          )}

          <Image
            src={image}
            alt=""
            fill={true}
            objectFit="cover"
            className={`${backImage ? "hover:opacity-0 duration-200" : ""}`}
          />
        </div>

        {label && (
          <span className="absolute bottom-2 left-2 py-1 px-2 bg-dark text-xs font-medium uppercase tracking-[1.5px] text-white">
            {label}
          </span>
        )}
      </div>

      <Link
        href={"/products/1"}
        className="mb-1 font-serif text-2xl font-normal text-center text-dark"
      >
        {title}
      </Link>

      <p className="text-sm text-center text-dark/50">{color}</p>
    </div>
  );
}
