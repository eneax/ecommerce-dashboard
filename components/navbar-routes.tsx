"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function NavbarRoutes({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      name: "Dashboard",
      href: `/${params.storeId}`,
      active: pathname === `/${params.storeId}`,
    },
    {
      name: "Billboards",
      href: `/${params.storeId}/billboards`,
      active: pathname === `/${params.storeId}/billboards`,
    },
    {
      name: "Categories",
      href: `/${params.storeId}/categories`,
      active: pathname === `/${params.storeId}/categories`,
    },
    {
      name: "Sizes",
      href: `/${params.storeId}/sizes`,
      active: pathname === `/${params.storeId}/sizes`,
    },
    {
      name: "Colors",
      href: `/${params.storeId}/colors`,
      active: pathname === `/${params.storeId}/colors`,
    },
    {
      name: "Products",
      href: `/${params.storeId}/products`,
      active: pathname === `/${params.storeId}/products`,
    },
    {
      name: "Orders",
      href: `/${params.storeId}/orders`,
      active: pathname === `/${params.storeId}/orders`,
    },
    {
      name: "Settings",
      href: `/${params.storeId}/settings`,
      active: pathname === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
}
