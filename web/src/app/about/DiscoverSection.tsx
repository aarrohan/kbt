import Image from "next/image";
import BtnText from "@/components/BtnText";

export default function DiscoverSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="px-8">
        <h2 className="mb-10 font-serif text-3xl lg:text-4xl font-normal text-dark">
          Discover more
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="relative mb-3 aspect-[3/4]">
              <Image
                src="/images/featured-1.png"
                alt=""
                fill={true}
                objectFit="cover"
              />
            </div>

            <BtnText text="New arrivals" />
          </div>

          <div>
            <div className="relative mb-3 aspect-[3/4]">
              <Image
                src="/images/featured-2.png"
                alt=""
                fill={true}
                objectFit="cover"
              />
            </div>

            <BtnText text="Dresses" />
          </div>

          <div>
            <div className="relative mb-3 aspect-[3/4]">
              <Image
                src="/images/featured-3.png"
                alt=""
                fill={true}
                objectFit="cover"
              />
            </div>

            <BtnText text="Wedding" />
          </div>

          <div>
            <div className="relative mb-3 aspect-[3/4]">
              <Image
                src="/images/featured-4.png"
                alt=""
                fill={true}
                objectFit="cover"
              />
            </div>

            <BtnText text="The bestsellers" />
          </div>
        </div>
      </div>
    </section>
  );
}
