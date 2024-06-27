import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(res: Response, { params }: { params: { taskId: string } }) {
  if (!params?.taskId) return NextResponse.json("error");
        
  const _$ = await prisma.form.findUnique({
    where: {
      shareURL: params.taskId,
    },
  });

    if (!_$) return NextResponse.json("error");
  return NextResponse.json(_$);
}
