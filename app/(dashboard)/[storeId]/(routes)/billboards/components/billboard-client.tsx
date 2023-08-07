"use client";

import { useRouter, useParams } from "next/navigation";
import { Plus } from "lucide-react";
import { Billboard } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/heading";

interface BillboardClientProps {
  data: Billboard[];
}

export function BillboardClient({ data }: BillboardClientProps) {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage your store billboards"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 w-4 h-4" />
          Create Billboard
        </Button>
      </div>

      <Separator />
    </>
  );
}
