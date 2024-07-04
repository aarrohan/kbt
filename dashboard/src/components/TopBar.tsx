import TopBarDropdownMenu from "./TopBarDropdownMenu";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export default async function TopBar() {
  const session = await getServerSession(authOptions);
  const user = await prisma.dashboardUser.findUnique({
    where: {
      id: session?.user.id,
    },
  });

  return (
    <div className="mb-10 flex justify-between items-center">
      <div>
        <h2 className="mb-1 text-2xl font-extrabold">Overview</h2>
        <p className="text-muted-foreground">👋 Hey, {user?.name}</p>
      </div>

      <TopBarDropdownMenu
        user={{
          name: user!.name,
          username: user!.username,
        }}
      />
    </div>
  );
}
