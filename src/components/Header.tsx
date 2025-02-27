import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full h-[60px] bg-black border-b border-white p-3 flex justify-between items-center">
            <Link href="/">
            <h2 className="font-bold text-xl">StableMax</h2>
            </Link>
        </div>
    )
}