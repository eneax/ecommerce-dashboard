"use client";

import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BillboardColumn } from "./columns";

interface CellActionProps {
  data: BillboardColumn;
}

export function CellAction({ data }: CellActionProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-8 h-8 p-0">
          <span className="sr-only">Open Menu</span>
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <Copy className="mr-2 w-4 h-4" />
          Copy ID
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Edit className="mr-2 w-4 h-4" />
          Update
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash className="mr-2 w-4 h-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
