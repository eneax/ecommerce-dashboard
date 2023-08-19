import prismaDb from "@/lib/prisma-db";

export async function getStockCount(storeId: string) {
  const stockCount = await prismaDb.product.count({
    where: {
      storeId,
      isArchived: false,
    },
  });

  return stockCount;
}
