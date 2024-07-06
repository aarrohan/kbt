import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="dashboard-page h-screen">
      <SideBar />

      <ScrollArea className="max-h-screen px-10">
        <TopBar />

        <div className="px-1">{children}</div>

        <div className="mt-10"></div>
      </ScrollArea>
    </main>
  );
}
