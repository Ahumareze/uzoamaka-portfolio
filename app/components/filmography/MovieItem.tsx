import Image from "next/image"
import { MovieItemProps } from "./Filmography"
import { GoArrowUpRight } from "react-icons/go"
import Link from "next/link"

export const MovieItem = ({title, platform, year, role, link, directors, index, handleHover}: MovieItemProps & {index: number, handleHover: (e: number) => void}) => {
    return(
        <Link href={link} target="_blank">
            <div 
                className="font-eculid cursor-pointer group/movie grid items-center grid-cols-[100px_170px_150px_1fr_150px] text-sm text-[#1E1E1E] gap-2 px-5 py-5 border-b border-[#B4B4B4]"
                onMouseEnter={() => handleHover(index)}
                data-aos="fade-up"
            >
                <p className="text-[#8E8E8E]">{year}</p>
                <p>{title}</p>
                <p>{role}</p>
                <p className="text-[#8E8E8E]">{directors}</p>
                <div className="w-full flex items-center">
                    <div className="flex-1">
                        <Image
                            src={platform}
                            alt={title}
                            className="w-[60px]"
                        />
                    </div>
                    <div className="h-[30px] w-[30px] rounded-full group-hover/movie:bg-[#f5f5f5] flex items-center justify-center">
                        <GoArrowUpRight size={20} />
                    </div>
                </div>
            </div>
        </Link>
    )
}