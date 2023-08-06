"use client";

import { useRouter, useParams } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/heading";

export function BillboardClient() {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Billboards (0)"
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
