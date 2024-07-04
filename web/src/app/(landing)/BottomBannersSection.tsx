import BtnText from "@/components/BtnText";

export default function BottomBannersSection() {
  return (
    <section>
      <div className="px-8 grid sm:grid-cols-2 gap-8">
        <div className="relative aspect-[3/4] bg-[linear-gradient(transparent,rgba(0,0,0,0.5)),url(/images/banner-3.png)] bg-cover bg-center">
          <div className="absolute bottom-5 left-5">
            <h3 className="mb-4 font-serif text-3xl lg:text-4xl font-normal text-white">
              Explore latest collection
            </h3>

            <BtnText color="white" text="Shop now" />
          </div>
        </div>

        <div className="relative aspect-[3/4] bg-[linear-gradient(transparent,rgba(0,0,0,0.5)),url(/images/banner-4.png)] bg-cover bg-center">
          <div className="absolute bottom-5 left-5">
            <h3 className="mb-4 font-serif text-3xl lg:text-4xl font-normal text-white">
              Summer special dresses
            </h3>

            <BtnText color="white" text="New in" />
          </div>
        </div>
      </div>
    </section>
  );
}
