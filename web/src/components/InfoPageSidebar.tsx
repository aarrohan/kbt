"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ILink {
  title: string;
  href: string;
}

export default function InfoPageSidebar() {
  const pathname = usePathname();

  const links: ILink[] = [
    {
      title: "FAQ",
      href: "/info/faq",
    },
    {
      title: "Contact us",
      href: "/info/contact-us",
    },
    {
      title: "Shipping & delivery",
      href: "/info/shipping-and-delivery",
    },
    {
      title: "Returns & exchanges",
      href: "/info/returns-and-exchanges",
    },
    {
      title: "Terms & conditions",
      href: "/info/terms-and-conditions",
    },
    {
      title: "Privacy policy",
      href: "/info/privacy-policy",
    },
    {
      title: "Cookies",
      href: "/info/cookies",
    },
  ];

  return (
    <div className="hide-scrollbar links-wrapper group w-full lg:w-fit lg:space-y-8 space-x-12 lg:space-x-0 flex flex-row lg:flex-col overflow-scroll lg:overflow-visible">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={`relative text-sm whitespace-nowrap text-dark group-hover:text-dark/65 duration-300 ${
              pathname === link.href
                ? "after:content-[''] after:absolute after:top-1/2 after:-left-3 after:-translate-y-1/2 after:w-[2px] after:h-[35px] after:bg-dark"
                : ""
            }`}
          >
            {link.title}
          </Link>
        );
      })}
    </div>
  );
}
