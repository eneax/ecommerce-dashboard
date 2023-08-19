import prismaDb from "@/lib/prisma-db";

export async function getSalesCount(storeId: string) {
  const salesCount = await prismaDb.order.count({
    where: {
      storeId,
      isPaid: true,
    },
  });

  return salesCount;
}
