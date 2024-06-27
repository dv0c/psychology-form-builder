import prisma from "@/lib/prisma";

export async function GET(res:Response) {
    return await prisma.form.findMany()
}