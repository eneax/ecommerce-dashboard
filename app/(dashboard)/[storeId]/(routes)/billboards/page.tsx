import { format } from "date-fns";

import prismaDb from "@/lib/prisma-db";

import { BillboardClient } from "./components/billboard-client";
import { BillboardColumn } from "./components/columns";

export default async function BillboardsPage({
  params,
}: {
  params: {
    storeId: string;
  };
}) {
  const billboards = await prismaDb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map(
    (billboard) => ({
      id: billboard.id,
      label: billboard.label,
      createdAt: format(billboard.createdAt, "MMMM do, yyyy"),
    })
  );

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
}
