import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(res: Response, params: { id: string }) {
  const _$ = await prisma.form.findFirst({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json(_$);
}
