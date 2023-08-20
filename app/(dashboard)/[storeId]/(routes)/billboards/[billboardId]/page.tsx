import prismaDb from "@/lib/prisma-db";

import { BillboardForm } from "./components/billboard-form";

export default async function BillboardPage({
  params,
}: {
  params: {
    billboardId: string;
  };
}) {
  const billboard = await prismaDb.billboard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
}
