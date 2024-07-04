import InfoPageSidebar from "@/components/InfoPageSidebar";

export default function InfoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mt-[50px] py-20 lg:py-28">
      <div className="px-8 grid lg:grid-cols-[400px_auto] gap-14 lg:gap-0">
        <InfoPageSidebar />

        {children}
      </div>
    </section>
  );
}
