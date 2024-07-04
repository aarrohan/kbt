"use client";
import { useEffect, useState } from "react";
import {
  Home,
  UsersRound,
  ShoppingBag,
  Inbox,
  Tag,
  ShoppingCart,
  ClipboardIcon,
  CreditCard,
  MessageSquare,
  UserRoundCog,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";

interface ILinksPart {
  title: string;
  links: {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
}

export default function SideBar() {
  const [pagePath, setPagePath] = useState<string>("/");

  const pathname = usePathname();

  const parts: ILinksPart[] = [
    {
      title: "Dashboard",
      links: [
        {
          title: "Overview",
          icon: <Home className="w-5 h-5" />,
          href: "/dashboard",
        },
        {
          title: "Orders",
          icon: <ShoppingCart className="w-5 h-5" />,
          href: "/dashboard/orders",
        },

        {
          title: "Transactions",
          icon: <CreditCard className="w-5 h-5" />,
          href: "/dashboard/reports",
        },
        {
          title: "Customers",
          icon: <UsersRound className="w-5 h-5" />,
          href: "/dashboard/reports",
        },
        {
          title: "Reviews",
          icon: <MessageSquare className="w-5 h-5" />,
          href: "/dashboard/reports",
        },
        {
          title: "Products",
          icon: <ShoppingBag className="w-5 h-5" />,
          href: "/dashboard/products",
        },
        {
          title: "Categories",
          icon: <Inbox className="w-5 h-5" />,
          href: "/dashboard/categories",
        },
        {
          title: "Coupons",
          icon: <Tag className="w-5 h-5" />,
          href: "/dashboard/coupons",
        },
      ],
    },
    {
      title: "Management",
      links: [
        {
          title: "Admins",
          icon: <UserRoundCog className="w-5 h-5" />,
          href: "/dashboard/admins",
        },
        {
          title: "Reports",
          icon: <ClipboardIcon className="w-5 h-5" />,
          href: "/dashboard/reports",
        },
        {
          title: "Settings",
          icon: <Settings className="w-5 h-5" />,
          href: "/dashboard/reports",
        },
      ],
    },
  ];

  useEffect(() => {
    setPagePath(pathname);
  }, [pathname]);

  return (
    <ScrollArea className="p-10 border-r border-dashed">
      <h1 className="mb-10 text-2xl font-extrabold">KBT.</h1>

      <div className="space-y-5">
        {parts.map((part, index) => (
          <div key={index}>
            <p className="mb-4 text-xs font-medium uppercase text-muted-foreground">
              {part.title}
            </p>

            <div className="space-y-1">
              {part.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={`py-3 px-5 flex items-center gap-3 ${
                    pagePath === link.href
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "hover:bg-accent"
                  } rounded-lg duration-300`}
                >
                  {link.icon} {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
