import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismaDb from "@/lib/prisma-db";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!body.name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store ID is required", { status: 400 });
    }

    const store = await prismaDb.store.updateMany({
      where: {
        id: params.storeId,
        userId,
      },
      data: {
        name: body.name,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_PATCH_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.storeId) {
      return new NextResponse("Store ID is required", { status: 400 });
    }

    const store = await prismaDb.store.deleteMany({
      where: {
        id: params.storeId,
        userId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("[STORE_DELETE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
