export default function HeroSection() {
  return (
    <section className="mt-[50px] pt-20 lg:pt-28">
      <div className="px-8">
        <h1 className="mb-10 font-serif text-4xl lg:text-5xl font-normal text-center text-dark">
          About us
        </h1>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="relative p-5 aspect-[3/4] bg-foreground-2 flex justify-center items-center">
            <h2 className="mb-4 font-serif text-3xl lg:text-4xl font-normal leading-[3rem] text-center text-dark">
              Kara Howard, founder of KBT
            </h2>
          </div>

          <div className="relative aspect-[3/4] bg-[url(/images/slider-1.png)] bg-cover bg-center"></div>
        </div>
      </div>
    </section>
  );
}
