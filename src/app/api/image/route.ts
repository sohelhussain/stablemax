// import { authOptions } from "@/utils/authOptions";
import prisma from "@/utils/prisma";
// import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {

    // const session = await getServerSession(authOptions);
    
    // if (!session) {
    //     return NextResponse.json({ error: "You must be logged in to do this!" }, { status: 401 });
    // }
    const {prompt} = await request.json();

    // const user = await prisma.user.findUnique({
    //     where: {
    //         id: session.user.id
    //     }
    // })
    // if (!user) {
    //     return NextResponse.json({ error: "You must be logged in to do this!" }, { status: 401 });
    // }

    function generateRandomNumber(): number {
        return Math.floor(Math.random() * 100000) + 1;
    }

    const randomSeed = generateRandomNumber();

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${randomSeed}&width=1050&height=1050&nologo=True`;

    await fetch(imageUrl);

    await prisma.post.create({
        data:{
            prompt: prompt,
            // userId: user.id,
            url: imageUrl,
            seed: randomSeed
        }
    })

    return NextResponse.json({message: "i'm a post route", url: imageUrl});
};


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