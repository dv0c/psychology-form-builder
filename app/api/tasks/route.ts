import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const tasks = await prisma.form.findMany();
    return NextResponse.json(tasks);
}