import { AiOutlineLoading } from "react-icons/ai";


export default function loading() {
    return (
        <div className="w-full h-dvh flex justify-center items-center">
             <AiOutlineLoading className="animate-spin" />
        </div>
    )
}