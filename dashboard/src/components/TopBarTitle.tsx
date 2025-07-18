"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface IPageTitle {
  title: string;
  path: string;
}

export default function TopBarTitle() {
  const [pagePath, setPagePath] = useState<string>("/");
  const pathname = usePathname();

  const pageTitles: IPageTitle[] = [
    {
      title: "Overview",
      path: "/dashboard",
    },
    {
      title: "Orders",
      path: "/dashboard/orders",
    },
    {
      title: "Transactions",
      path: "/dashboard/transactions",
    },
    {
      title: "Customers",
      path: "/dashboard/customers",
    },
    {
      title: "Reviews",
      path: "/dashboard/reviews",
    },
    {
      title: "Products",
      path: "/dashboard/products",
    },
    {
      title: "New product",
      path: "/dashboard/products/create",
    },
    {
      title: "Categories",
      path: "/dashboard/categories",
    },
    {
      title: "New category",
      path: "/dashboard/categories/create",
    },
    {
      title: "Coupons",
      path: "/dashboard/coupons",
    },
    {
      title: "New coupon",
      path: "/dashboard/coupons/create",
    },
    {
      title: "Admins",
      path: "/dashboard/admins",
    },
    {
      title: "Reports",
      path: "/dashboard/reports",
    },
    {
      title: "Settings",
      path: "/dashboard/settings",
    },
  ];

  useEffect(() => {
    setPagePath(pathname);
  }, [pathname]);

  return (
    <h2 className="mb-1 text-2xl font-extrabold">
      {pageTitles.find((pageTitle) => pageTitle.path === pagePath)?.title ||
        (pagePath.includes("/dashboard/categories/") && "Edit category") ||
        (pagePath.includes("/dashboard/coupons/") && "Edit coupon")}
    </h2>
  );
}
