import Image from "next/image";

export default function StyleFeedCard({ image, username }: IStyleFeedCard) {
  return (
    <div>
      <div className="relative mb-3 aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt=""
          fill={true}
          objectFit="cover"
          className="hover:scale-105 duration-300"
        />
      </div>

      <p className="text-sm tracking-[1.5px] text-dark">@{username}</p>
    </div>
  );
}
