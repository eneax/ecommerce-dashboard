import { redirect } from "next/navigation";
import { UserButton, auth } from "@clerk/nextjs";

import prismaDb from "@/lib/prisma-db";

import { StoreSwitcher } from "@/components/store-switcher";
import { NavbarRoutes } from "@/components/navbar-routes";
import { ThemeToggle } from "@/components/theme-toggle";

export const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismaDb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <StoreSwitcher items={stores} />
        <NavbarRoutes className="mx-6" />
        <div className="flex items-center space-x-4 ml-auto">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};
