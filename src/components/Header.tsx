"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { signIn, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function Header() {
    const [initialLoading, setInitialLoading] = useState<boolean>(true);
    const { data: session, status } = useSession();
    useEffect(() => {
        if (status !== "loading") {
            setInitialLoading(false);
        }
    }, [session, status])
    return (
        <div className="fixed top-0 w-full h-[60px] bg-black border-b border-white p-3 flex justify-between items-center">
            <Link href="/">
                <h2 className="font-bold text-xl">StableMax</h2>
            </Link>
            <div>
                {initialLoading && status === "loading" ? (
                    <AiOutlineLoading className="animate-spin" />
                ) : (
                    !session ? (
                        <Button onClick={() => signIn("google")}>Login</Button>
                    ) : (
                        <Avatar>
                            <AvatarImage src={session.user?.image || ""} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    )
                )}


            </div>
        </div>
    )
}