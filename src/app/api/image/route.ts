// import { authOptions } from "@/utils/authOptions";
import prisma from "@/utils/prisma";
// import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
    }

    const generateRandomNumber = () => Math.floor(Math.random() * 100000) + 1;
    const randomSeed = generateRandomNumber();
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${randomSeed}&width=1050&height=1050&nologo=True`;

    // Optionally check if image is reachable
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch image" }, { status: 502 });
    }

    // Save to DB
    await prisma.post.create({
      data: {
        prompt,
        url: imageUrl,
        seed: randomSeed,
      },
    });

    return NextResponse.json({ message: "Image created successfully", url: imageUrl }, { status: 200 });

  } catch (error) {
    console.error("POST /api/image error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
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