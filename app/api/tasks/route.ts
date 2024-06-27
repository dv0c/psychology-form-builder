import prisma from "@/lib/prisma";

export async function GET(res:Response, req:Request) {
    return await prisma.form.findMany()
}