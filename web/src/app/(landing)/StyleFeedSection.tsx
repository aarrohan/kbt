import BtnText from "@/components/BtnText";
import StyleFeedCard from "@/components/StyleFeedCard";

export default function StyleFeedSection() {
  const cards: IStyleFeedCard[] = [
    {
      image: "/images/style-feed-1.png",
      username: "elpmaxe",
    },
    {
      image: "/images/style-feed-2.png",
      username: "kara_howard",
    },
    {
      image: "/images/style-feed-3.png",
      username: "carol12",
    },
    {
      image: "/images/style-feed-4.png",
      username: "alexa_esc",
    },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="px-8">
        <div className="mb-10 flex flex-col sm:flex-row justify-between items-center gap-5">
          <h2 className="font-serif text-3xl lg:text-4xl font-normal text-dark">
            KBT stylefeed
          </h2>

          <BtnText text="View all" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            return <StyleFeedCard key={index} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
}
