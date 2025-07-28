// import { authOptions } from "@/utils/authOptions";
// import prisma from "@/utils/prisma";
// import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const prompt = body.prompt;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
    }

    const randomSeed = Math.floor(Math.random() * 100000) + 1;
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}?seed=${randomSeed}&width=1050&height=1050&nologo=True`;

    const imgResp = await fetch(imageUrl);
    if (!imgResp.ok) {
      return NextResponse.json({ error: "Image generation failed" }, { status: 502 });
    }

    // ❌ Remove Prisma-related DB call here

    return NextResponse.json({ message: "Image created", url: imageUrl });
  } catch (error) {
    console.error("❌ /api/image error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}



// export async function GET() {
    // const session = await getServerSession(authOptions);

    // if (!session) {
    //     return NextResponse.json({ error: "You must be logged in to do this!" }, { status: 401 });
    // }

//     const user = await prisma.user.findUnique({
//         where: {
//             id: session.user.id
//         }
//     })

//     if (!user) {
//         return NextResponse.json({ error: "You must be logged in to do this!" }, { status: 401 });
//     }

//     const posts = await prisma.post.findMany({
//         where: {
//             userId: user.id
//         }
//     })

//     return NextResponse.json(posts);
// }