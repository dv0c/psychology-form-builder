import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, res:Response) {
    const tasks = await prisma.form.findMany();
    return NextResponse.json(tasks);
}