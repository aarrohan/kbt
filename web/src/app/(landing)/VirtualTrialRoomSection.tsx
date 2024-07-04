import Image from "next/image";
import virtualTrialRoomImg from "@/assets/images/virtual-trial-room-banner.png";
import Link from "next/link";

export default function VirtualTrialRoomSection() {
  return (
    <section className="overflow-hidden">
      <div className="relative mt-16 lg:mt-24 px-8 flex flex-col items-center">
        <h1 className="absolute -top-10 lg:-top-14 left-1/2 -translate-x-1/2 z-10 mix-blend-exclusion font-serif text-6xl sm:text-7xl lg:text-8xl font-normal whitespace-nowrap text-white">
          Virtual Wardrobe
        </h1>

        <div className="relative mb-8 w-full aspect-[6/3]">
          <Image
            src={virtualTrialRoomImg}
            alt=""
            fill={true}
            objectFit="cover"
          />
        </div>

        <Link href={"/virtual-trial-room"}>
          <button className="py-3 px-8 border border-dark/25 hover:border-transparent bg-white text-xs font-bold uppercase tracking-[1.5px] text-dark duration-300">
            Try it now
          </button>
        </Link>
      </div>
    </section>
  );
}
