import prismaDb from "@/lib/prisma-db";

import { ColorForm } from "./components/color-form";

const ColorPage = async ({
  params,
}: {
  params: {
    colorId: string;
  };
}) => {
  const color = await prismaDb.color.findUnique({
    where: {
      id: params.colorId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default ColorPage;
