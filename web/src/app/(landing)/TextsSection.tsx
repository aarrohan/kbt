import Marquee from "react-fast-marquee";

export default function TextsSection() {
  return (
    <section className="py-20 lg:py-28">
      <Marquee speed={100} autoFill={true} style={{ height: "100px" }}>
        <h2 className="mx-14 font-serif text-4xl lg:text-5xl font-normal text-dark">
          Up to 50% discount
        </h2>

        <h2 className="mx-14 font-serif text-4xl lg:text-5xl font-normal text-dark">
          Explore latest collections
        </h2>

        <h2 className="mx-14 font-serif text-4xl lg:text-5xl font-normal text-dark">
          Summer solstice
        </h2>
      </Marquee>
    </section>
  );
}
