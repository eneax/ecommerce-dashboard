"use client";

import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/heading";
import { DataTable } from "@/components/data-table";

import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
  data: OrderColumn[];
}

export function OrderClient({ data }: OrderClientProps) {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage your orders"
      />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
}
