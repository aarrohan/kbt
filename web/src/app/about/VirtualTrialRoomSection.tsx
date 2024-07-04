export default function VirtualTrialRoomSection() {
  return (
    <section className="pt-20 lg:pt-28">
      <div className="px-8">
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="relative aspect-[3/4] bg-[url(/images/banner-1.png)] bg-cover bg-center"></div>

          <div className="relative p-5 aspect-[3/4] bg-foreground-2 flex justify-center items-center">
            <h2 className="mb-4 font-serif text-3xl lg:text-4xl font-normal leading-[3rem] text-center text-dark">
              Try our virtual trial room
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
