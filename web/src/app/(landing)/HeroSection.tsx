import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[url(/images/slider-1.png)] bg-cover bg-center">
      <div className="relative min-h-[100svh]">
        <div className="absolute bottom-8 sm:left-8 flex flex-col items-center sm:items-start">
          <p className="mb-3 text-xs uppercase tracking-[1.5px] text-white text-center sm:text-left">
            Summer solstice
          </p>

          <h1 className="mb-5 font-serif text-4xl lg:text-5xl font-normal text-center sm:text-left text-white">
            Dreamy dresses for midsummer
          </h1>

          <Link href={"/shop"}>
            <button className="py-3 px-8 border border-transparent hover:border-dark bg-white text-xs font-bold uppercase tracking-[1.5px] text-dark duration-300">
              Shop now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
