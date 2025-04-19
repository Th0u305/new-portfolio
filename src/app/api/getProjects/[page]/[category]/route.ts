import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest, { params }: { params: Promise<{ page: string ; category : string}> }) {
  const { page , category } = await params;
 
  const pageNumber = parseInt(page, 10);

  if (isNaN(pageNumber) || pageNumber < 1) {
    return NextResponse.json({ error: "Invalid page number" }, { status: 400 });
  }
  
  try {
    const projects = await prisma.projectsData.findMany({
      skip : (pageNumber - 1) * 6,
      take : 9,
      where: {
        type: category !== "all" ? { equals: category , mode : "insensitive"} : undefined,
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ error: "Failed to fetch Projects" }, { status: 500 });
  }
}
