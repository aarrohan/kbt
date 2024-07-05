import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { numberWithCommas, twoCharactersName } from "@/lib/utils";

interface ISale {
  amount: number;
  user: {
    profileImg: string;
    name: string;
    email: string;
  };
}

function Sale({ amount, user }: ISale) {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-9 w-9 flex">
        <AvatarImage src={user.profileImg} alt="Avatar" />
        <AvatarFallback>{twoCharactersName(user.name)}</AvatarFallback>
      </Avatar>

      <div className="grid gap-1">
        <p className="text-sm font-medium leading-none">{user.name}</p>

        <p className="text-sm text-muted-foreground">{user.email}</p>
      </div>

      <p className="ml-auto text-sm font-medium">${numberWithCommas(amount)}</p>
    </div>
  );
}

export default function RecentSales() {
  const sales: ISale[] = [
    {
      amount: 1999,
      user: {
        profileImg: "/avatars/01.png",
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
      },
    },
    {
      amount: 39,
      user: {
        profileImg: "/avatars/02.png",
        name: "Jackson Lee",
        email: "jackson.lee@email.com",
      },
    },
    {
      amount: 299,
      user: {
        profileImg: "/avatars/03.png",
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
      },
    },
    {
      amount: 99,
      user: {
        profileImg: "/avatars/04.png",
        name: "William Kim",
        email: "will@email.com",
      },
    },
    {
      amount: 39,
      user: {
        profileImg: "/avatars/05.png",
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
      },
    },
  ];

  return (
    <Card className="shadow-none">
      <CardHeader className="pb-8">
        <CardTitle>Recent sales</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-8">
        {sales.map((sale, index) => (
          <Sale key={index} {...sale} />
        ))}
      </CardContent>
    </Card>
  );
}
