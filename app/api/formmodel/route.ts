import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { model, date, quantity, license, comment } = body;

    if (!model) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!date) {
      return new NextResponse("Date is required", { status: 400 });
    }

    if (!quantity) {
      return new NextResponse("Quantity is required", { status: 400 });
    }

    if (!license) {
      return new NextResponse("License is required", { status: 400 });
    }

    const form = await prismadb.formModel.create({
      data: {
        model,
        date,
        quantity,
        license,
        comment,
      },
    });

    return NextResponse.json(form);
  } catch (error) {
    console.log("[FORM_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
