import prismaDb from "@/lib/prisma-db";

import { ProductForm } from "./components/product-form";

const ProductPage = async ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  const product = await prismaDb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm initialData={product} />
      </div>
    </div>
  );
};

export default ProductPage;
