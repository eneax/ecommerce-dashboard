import { format } from "date-fns";

import prismaDb from "@/lib/prisma-db";
import { formatPrice } from "@/lib/utils";

import { OrderClient } from "./components/order-client";
import { OrderColumn } from "./components/columns";

const OrdersPage = async ({
  params,
}: {
  params: {
    storeId: string;
  };
}) => {
  const orders = await prismaDb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedOrders: OrderColumn[] = orders.map((order) => ({
    id: order.id,
    phone: order.phone,
    address: order.address,
    products: order.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    totalPrice: formatPrice(
      order.orderItems.reduce(
        (total, orderItem) => total + Number(orderItem.product.price),
        0
      )
    ),
    isPaid: order.isPaid,
    createdAt: format(order.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  );
};

export default OrdersPage;
